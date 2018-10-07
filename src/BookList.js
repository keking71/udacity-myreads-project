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
              {/* filter books list based on the shelf it's on */}
              <Shelf name="Currently Reading" shelfBooks={books.filter(book => book.shelf === 'currentlyReading')} updateShelf={updateShelf} />
              <Shelf name="Want to Read" shelfBooks={books.filter(book => book.shelf === 'wantToRead')} updateShelf={updateShelf} />
              <Shelf name="Read" shelfBooks={books.filter(book => book.shelf === 'read')} updateShelf={updateShelf} />
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
