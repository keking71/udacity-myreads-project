import React from 'react';

class Book extends React.Component {
  state = {
    book: []
  }

  render() {
    const { book, updateShelf } = this.props

    return (
        <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1)` }}></div>
                  <div className="book-shelf-changer">
                    {/* when select value is changed, push book and new value to the changeshelf method */}
                    <select value={book.shelf} onChange={(event) => updateShelf(book, event.target.value)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                {/* display one author only, or no author if none found */}
                <div className="book-authors">{book.authors[0] || 'No author'}</div>
              </div>
        </li>

    )
  }
}

export default Book
