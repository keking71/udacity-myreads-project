import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './SingleBook'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {
  state = {
    query: '',
  }

/* update our query in state */
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { books, updateShelf } = this.props;
    const { query } = this.state;

    let showingBooks = []

/* if there is a query, check it against the book titles and authors. otherwise display all */
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => (match.test(book.title) || match.test(book.authors)))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book => (
              <Book book={book} key={book.id} updateShelf={updateShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
