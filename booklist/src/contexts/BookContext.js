import React, {createContext, useState} from 'react';
import uuid from 'uuid/dist/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:'Name of the wind',author: "John Doe", id:1},
        {title:'The way of kings',author: "John Doe", id:2},
        {title:'The final empire',author: "John Doe", id:3},
        {title:'The hero of ages',author: "John Doe", id:4}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title:title, author:author, id:uuid() }]);

    }
    const removeBook = id => {
        setBooks(books.filter(book => id !== book.id));
    };
    return (
        <BookContext.Provider value ={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;