import React from 'react'
import { useState, useReducer } from 'react'
import './ShoppingList.css'

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
    const [text, setText] = useState('');
    const [isEdit, setIsEdit] = useState(false)
    const [editInput, setEditInput] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(text);
}

  
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
   const handleEditButton =(item) => {
       //item.edit = !item.edit;
       setIsEdit(prev => !prev);
       console.log(item);
   }
return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </label>
                <button type='submit'>Add Item</button>
            </form>
        </div>
        <div>
        {items.map((item, i)  => {
            return (
                <section className='item-container' key={i}>
                    <p className='item'>Item: {item.text}</p>
                    <p >Id: {item.id}</p>
                    <button onClick={() => handleEditButton(item)}>Edit Item</button>
                    <button onClick={()=>handleDeleteItem(item.id)}>Delete Item</button>
                    
                    
                    {isEdit ?<><input value= {editInput} onChange={(e) => setEditInput(e.target.value)}/> <button onClick={() => handleEditItem({...item, text: editInput})}>Save</button></> :<>tester</>}
                </section>
            )
        })}
        
        </div>
        <div>
        
        
        </div>
        </div>
    )
}
