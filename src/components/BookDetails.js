
import React, { useContext} from 'react'
import { BookContext } from '../context/BookContext';



const BookDetails = (props) => {
    const {removeBooks} = useContext(BookContext)
    return ( <div>
<li onClick={()=>removeBooks(props.book.id)}>
    <div className="author">{props.book.author}</div>
    <div className="name">{props.book.name}</div>
</li>


    </div> );
}
 
export default BookDetails;