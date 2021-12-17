import React from 'react'
import { useState } from 'react';
export default function Item({ item, handleDeleteItem, handleEditItem }) {
    const [isEdit, setIsEdit] = useState(false)
    const [editInput, setEditInput] = useState('');

    const handleEditButton =(item) => {
        //item.edit = !item.edit;
        setIsEdit(prev => !prev);
        console.log(item);
    }
    return (
        <section>
           
                    <p className='item'>Item: {item.text}</p>
                    <p >Id: {item.id}</p>
                    <button onClick={() => handleEditButton(item)}>Edit Item</button>
                    <button onClick={()=>handleDeleteItem(item.id)}>Delete Item</button>
                    
                    
                    {isEdit ?<><input value= {editInput} onChange={(e) => setEditInput(e.target.value)}/> <button onClick={() => handleEditItem({...item, text: editInput})}>Save</button></> :<></>}
                
        </section>
    )
}
