import React from 'react'
import { useState } from 'react';

export default function AddItem({ handleAddItem  }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddItem(text);
    }
    return (
        <div>test
            <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </label>
                <button type='submit'>Add Item</button>
            </form>
        </div>
       
       
        </div>
    )
}
