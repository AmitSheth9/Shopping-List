import React from 'react'
import { useState, useReducer } from 'react'
import './ShoppingList.css'
import AddItem from '../components/AddItem'
import ItemsList from '../components/ItemsList'

const nextId = 99


let initialList = [{id: 0, text: 'Veggie Burgers', done: false, edit: false},
                        {id: 1, text: 'Potatoes', done: false, edit: false},
                        {id: 2, text: 'Fudge', done: false, edit: false}]

    
   
const itemsReducer = (items, action) =>{
    switch(action.type) {
    case 'added': {
        return [...items, { id: action.id, text: action.text, done: false, edit: false},]
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
    
    


  
   const handleAddItem = (text) => {
       dispatch({type: 'added',
                id: nextId -1, text })
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
        <AddItem handleAddItem={handleAddItem} />
        <ItemsList items={items} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />
    </div>
    )
}
