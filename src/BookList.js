import React from 'react';
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class BookList extends React.Component {
  render() {
    const { books, updateShelf } = this.props

    return (

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf id="currentlyReading" name="Currently Reading" books={books} updateShelf={updateShelf} />
              <Shelf id="wantToRead" name="Want to Read" books={books} updateShelf={updateShelf} />
              <Shelf id="read" name="Read" books={books} updateShelf={updateShelf} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>

    )
  }
}

export default BookList
