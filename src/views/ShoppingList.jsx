import React from 'react'
import { useState, useReducer } from 'react'


const nextId = 99


let initialList = [{id: 0, item: 'Veggie Burgers', done: false},
                        {id: 1, item: 'Potatoes', done: false},
                        {id: 2, item: 'Fudge', done: false}]

    
   
const itemsReducer = (items, action) =>{
    switch(action.type) {
    case 'added': {
        return [...items, { id: action.id, item: action.item, done: false},]
    }    
    case 'edited': {
        return items.map(item => {
            if(item.id === action.task.id) {
                return action.task
            }
            return item
        })
    }
    case 'deleted': {
        return (items.filter((item) => item.id !== action.id ))
    }
    default : {
        throw Error (`Error, unknown action ${action.type}`)
    }

    }
    }


export default function ShoppingList() {
    const [items, dispatch] = useReducer(itemsReducer, initialList)
    const [item, setItem] = useState('');
    const [isEdit, setIsEdit] = useState(false)
    const [editInput, setEditInput] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(item);
}

  
   const handleAddItem = (item) => {
       dispatch({type: 'added',
                id: nextId -1, item })
   }
   const handleEditItem = (task) => {
       dispatch({type: 'edited',
                task})
   }
   const handleDeleteItem = (taskId) => {
        dispatch({ type: 'deleted',
                id: taskId})
   }
return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input value={item} onChange={(e) => setItem(e.target.value)} />
                </label>
                <button type='submit'>Add Item</button>
            </form>
        </div>
        <div>
        {items.map((item, i)  => {
            return (
                <div display='flex' border='5px solid black' key={i}>
{isEdit ? <input value= {editInput} onChange={(e) => setEditInput(e.target.value)}/> : <div>Item: {item.item}</div>}
                    <div >Id: {item.id}</div>
                    <button onClick={() => {setIsEdit(prev => !prev); handleEditItem(editInput)} }>Edit Item</button>
                    
                    <button>Delete Item</button>
                   
                </div>
            )
        })}
        
        </div>
        <div>
        
        </div>
        </div>
    )
}
