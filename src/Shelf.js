import React from 'react';
import Book from './SingleBook'

class Shelf extends React.Component {
  render() {
    const { id, name, books, updateShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* filter the books by whether their shelf matches the current shelf's ID */}
            {books.filter(book => book.shelf === `${id}`).map(book => (
              <Book book={book} key={book.id} updateShelf={updateShelf}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
