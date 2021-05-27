import React, { useState,createContext } from 'react';
import uuid from "uuid/dist/v1"
export const BookContext=createContext()

const BookContextProvider = (props) => {

    const [book, setBook] = useState([
        {author:"orhan pamuk",name:"masumiyet muzesi",id:1},
        {author:"ihsan oktay anar",name:"amat",id:2}
    ])

     const addBooks=(name,author)=>{
        setBook([...book,{name,author,id:uuid()}])
    }

    const removeBooks=(id)=>{
        setBook(book.filter(e=>e.id!==id))
    }

    return ( 

        <BookContext.Provider value={{book,addBooks,removeBooks}}>

                {props.children}

        </BookContext.Provider>


     );
}
 
export default BookContextProvider;