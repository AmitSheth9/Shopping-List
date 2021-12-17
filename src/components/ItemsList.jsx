import React from 'react'
import { useState } from 'react';
import Item from './Item';

export default function ItemsList({ items, handleDeleteItem, handleEditItem }) {
  
    return (
        <>
        
             {items.map((item, i)  => {
            return (
                <div key={item.id} >
                   <Item item={item} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
                </div>
            )
        })}
        
        
        </>
        
    )
}
