import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { addBooks } = useContext(BookContext);
  const [author, setAuthor] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks(name, author);
    setAuthor('');
    setName('');
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div className="author-group">
        <label htmlFor="Yazar">Yazar</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
        />
      </div>

      <div className="bookName-group">
        <label htmlFor="kitap ismi">Kitap ismi</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <button>Kitap ekle</button>
    </form>
  );
};

export default BookForm;
