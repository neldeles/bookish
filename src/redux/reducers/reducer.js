import * as types from '../types'

const reducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return { ...state, term: action.term }
    case types.FETCH_BOOKS_PENDING:
      return { ...state, loading: true }
    case types.FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books, loading: false }
    case types.FETCH_BOOKS_FAILED:
      return { ...state, loading: false, error: true }
    case types.FETCH_BOOK_SUCCESS:
      return { ...state, book: action.book }
    default:
      return state
  }
}

export default reducer
