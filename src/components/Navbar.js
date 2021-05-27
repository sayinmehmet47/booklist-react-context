import React, {useContext } from 'react';
import { BookContext } from "../context/BookContext";



const Navbar = () => {
const context = useContext(BookContext)
const {book}=context


    return ( 
        <div className="navbar">
            <h1>Ninja Reading List</h1>
            <p>Currently you have {book.length}</p>




        </div>
     );
}
 
export default Navbar;