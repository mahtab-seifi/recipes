
import React, { createContext, useState } from 'react';

const SaveRecipeContext = createContext();

export const SaveRecipeProvider = ({ children }) => {
    const [savedItems, setSavedItems] = useState([]);

    return (
        <SaveRecipeContext.Provider value={{ savedItems, setSavedItems }}>
            {children}
        </SaveRecipeContext.Provider>
    );
};

export default SaveRecipeContext;