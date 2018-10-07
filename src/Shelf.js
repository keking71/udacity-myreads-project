import React from 'react';
import Book from './SingleBook'

/* stateless component for Shelf */

const Shelf = ({ name, shelfBooks, updateShelf }) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* map over the shelf's books */}
            {shelfBooks.map(book => (
              <Book book={book} key={book.id} updateShelf={updateShelf}/>
            ) ) }
          </ol>
        </div>
      </div>
    )
}

export default Shelf
