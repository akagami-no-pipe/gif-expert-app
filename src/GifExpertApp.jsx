
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball' ]);

    const onAddCategory = (category) => {
        if(categories.includes(category)) return;
        setCategories([category, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={ (value) => onAddCategory(value) } />
                
            { 
                categories.map( (category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    );
}
