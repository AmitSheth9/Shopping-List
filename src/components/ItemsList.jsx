import React from 'react'
import { useState } from 'react';
import Item from './Item';

export default function ItemsList({ items, handleDeleteItem, handleEditItem }) {
  
    return (
        <>
        
             {items.map((item)  => {
            return (
                <div key={item.text} >
                   <Item item={item} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
                </div>
            )
        })}
        
        
        </>
        
    )
}
