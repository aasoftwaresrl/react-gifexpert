
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    const onAddCategory = (newCategory) => {
        //Naruto
        //No utilizar .push para insertar datos en un arreglo
        //console.log(newCategory);
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>    

        {/* Input */}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory = {value => onAddCategory(value)}
        />

        {/* Listado de Gifs */}
        {/* <button onClick={ onAddCategory }> Agregar </button> */}
                
            { categories.map( (category) => 
                 (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                 )
            )};

            {/* Gif Item */}
    </>
  )

}
