import './App.css';
import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BooksList';
import BookForm from './components/BookForm';

function App() {


  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
