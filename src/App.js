import React from 'react';
import { Route } from 'react-router-dom' //import Route component to handle UI display
import Search from './Search' //import Search component
import BookList from './BookList' //import BookList component
import * as BooksAPI from './BooksAPI'
import './App.css'

/* create the class for the main app */
class BooksApp extends React.Component {
  state = {
    books: []
  }

/* after the component has rendered, get all the book data and add it to state */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

/* change the shelf */
  updateShelf = (thisBook, shelf) => {
    this.setState(prev => { /* set state */
      let addBook = true;
      prev.books.forEach(book => {
        if(thisBook.id === book.id) /* check if we're adding a new book */
          addBook = false;
      })
      if(addBook)
        prev.books.splice(1, 0, thisBook); /* add new book to list of books */
      return ({
        books: prev.books.map(book => {
          if(book.id === thisBook.id) /* if the book matches the selected book */
            book.shelf = shelf;  /* update the shelf value */
          return book;
        })
        .filter(b => b.shelf !== "none") /* don't display books without a shelf */
      })
    })
    BooksAPI.update(thisBook, shelf) /* update the book's shelf */
  }


  render() {
    const { books } = this.state;

    return (
      <div className="app">
          <Route exact path="/" render={()=><BookList books={books} updateShelf={this.updateShelf} />} /> {/* when on '/', display the BookList comp */}
          <Route path="/search" render={()=><Search updateShelf={this.updateShelf} />} /> {/*when on '/search', display the Search comp */}
      </div>
    )
  }
}

export default BooksApp
