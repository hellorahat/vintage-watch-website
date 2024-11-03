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

  const addToCart = () => {
    removeFavorite();
    
  }

  return (
    <Box
      width="100vw"
      // height="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <Box width="80%" mb={4}>
        <Typography variant="h3" textAlign="center" color="#333">
          Favorites
          <hr style={{ marginTop: '20px', marginBottom: '-30px' }} />
        </Typography>
      </Box>
      {favorites.length > 0 ? (
        <Stack width="80%" spacing={3}>
          {favorites.map(({ id, brand, model, image, price }) => (
            <Box
              key={id}
              display="flex"
              height={225}
              justifyContent="space-between"
              alignItems="center"
              border="1px solid #ddd"
              padding={3}
              paddingBottom={5.5}
              backgroundColor="white"
              borderTop={0}
              borderLeft={0}
              borderRight={0}
            >
              <Box display="flex" alignItems="center" gap={3}>
                <img src={image} alt={model} width="200px" height="200px" style={{ borderRadius: '10px' }} />
                <Box>
                  <Typography variant="h5" color="#198754">{brand}</Typography>
                  <Typography variant="subtitle1" color="#666">{model}</Typography>
                  <Typography variant="subtitle2" color="#999">Price: {price}</Typography>
                </Box>
              </Box>
              <div className="d-flex flex-column justify-content-center">
                <Button
                    className="mb-3 outline-success"
                    variant="contained"
                    color="success"
                    onClick={() => addToCart(id)}
                  >
                    Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeFavorite(id)}
                >
                  Remove from Favorites
                </Button>
              </div>
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
