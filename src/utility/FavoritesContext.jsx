import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (watch) => {
        // Create a new favorite object using the watch details
        console.log("adding to favorite")
        const exists = favorites.some(favorite => favorite.id === watch.id);
        if(exists) return;
        const newFavorite = {
            id: watch.id,
            brand: watch.brand,
            model: watch.model,
            image: watch.image,
            price: watch.price,
        };
        // Add the new favorite to the list
        setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    };

    const removeFavorite = (param) => {
        const id = typeof param === 'object' && param !== null ? param.id : param;
        setFavorites((prevFavorites) => 
            prevFavorites.filter(favorite => favorite.id !== id)
        );
    };

    return (
        <StateContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            {children}
        </StateContext.Provider>
    );
};

const useFavorites = () => useContext(StateContext);

export { FavoritesProvider , useFavorites }