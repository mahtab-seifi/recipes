import React, { Component } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const addContext = createContext();

export const useAdd =()=>useContext(addContext);

export const AddProvider =({children})=>{
    const [addItem,setAddItem]=useState([]);

    const addToList =(items)=>{
        const index = addItem.findIndex(item=>item.id===items.id);
        if (index !== -1) {
            const newAdd =[...addItem];
            newAdd.splice(index,1)
            setAddItem(newAdd)
        }else{
            setAddItem([...addItem,{...items}])
        }
      
      
    }
    const removeItem = (id) => {
        const index =addItem.findIndex(item=>item.id !== id);
        if (index!==1) {
            const newAdd=[...addItem];
            newAdd.splice(index,1);
            setAddItem(newAdd)
        }
    }


    return(
        <addContext.Provider value={{addItem,addToList,removeItem}} >{children}</addContext.Provider>
    )
}