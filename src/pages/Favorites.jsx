'use client'

import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { firestore } from '../../firebase'
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  const fetchFavorites = async () => {
    const favoritesRef = collection(firestore, 'favorites')
    const snapshot = await getDocs(favoritesRef)
    const favoritesList = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    setFavorites(favoritesList)
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  const removeFavorite = async (id) => {
    await deleteDoc(doc(firestore, 'favorites', id))
    fetchFavorites() 
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <Box width="80%" mb={4}>
        <Typography variant="h3" textAlign="center" color="#333">
          Your Favorite Watches
        </Typography>
      </Box>
      {favorites.length > 0 ? (
        <Stack width="80%" spacing={3}>
          {favorites.map(({ id, brand, model, image, price }) => (
            <Box
              key={id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor="#f9f9f9"
              border="1px solid #ddd"
              padding={3}
              borderRadius={2}
            >
              <Box display="flex" alignItems="center" gap={3}>
                <img src={image} alt={model} width="100px" height="100px" style={{ borderRadius: '8px' }} />
                <Box>
                  <Typography variant="h5" color="#333">{brand}</Typography>
                  <Typography variant="subtitle1" color="#666">{model}</Typography>
                  <Typography variant="subtitle2" color="#999">Price: {price}</Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeFavorite(id)}
              >
                Remove from Favorites
              </Button>
            </Box>
          ))}
        </Stack>
      ) : (
        <Typography variant="h6" color="#666">
          You have no favorite watches yet.
        </Typography>
      )}
    </Box>
  )
}

export default Favorites
