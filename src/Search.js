import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './SingleBook'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'

class Search extends Component {
  state = {
    query: '',
    showingBooks: []
  }


/* update our query state and call the next function */
  updateQuery = (query) => {
    this.setState({ query: query })
    this.searchBooks(query)
  }

/* search for books based on our query */
  searchBooks = (query) => {
    if (query) { /* if there is a query */
      BooksAPI.search(query) /* search using it */
        .then((showingBooks) => {
          if (showingBooks.error){ /* if there is an error show nothing */
            this.setState({ showingBooks: []} )
          } else if(this.state.query === query){
          this.setState({ showingBooks: showingBooks }) /* otherwise display our books */
          showingBooks.sort(sortBy('title'))
          }
        })
      } else {
        this.setState({ showingBooks: [] })
      }
  }

  render() {
    const { query, showingBooks } = this.state;
    const { updateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* map over the book results and display them */}
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
