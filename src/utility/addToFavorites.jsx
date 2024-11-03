import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const StateProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    return (
        <StateContext.Provider value={{favorites, setFavorites}}>
            {children}
        </StateContext.Provider>
    );
};

const useFavorites = () => useContext(StateContext);

export { StateProvider, useFavorites }