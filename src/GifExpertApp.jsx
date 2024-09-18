
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball' ]);

    const onAddCategory = () => {
        setCategories([...categories, 'Tower of god'])
    }

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory/>
            {/* Listado de gif */}
            <button onClick={onAddCategory}>agregar</button>
            <ol>
                { categories.map( category => {
                    return <li key={category}>{category}</li>
                } ) }
            </ol>
            {/* gif item */}
        </>
    );
}
