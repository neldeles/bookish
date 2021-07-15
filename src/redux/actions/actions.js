import * as types from '../types'
import axios from 'axios'

export const setSearchTerm = (term) => {
  return { type: types.SET_SEARCH_TERM, term }
}

export const fetchBooks = (term) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_BOOKS_PENDING' })
    return axios
      .get(`http://localhost:8080/books?q=${term}`)
      .then((res) => {
        dispatch({ type: 'FETCH_BOOKS_SUCCESS', books: res.data })
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_BOOKS_FAILED', err: err.message })
      })
  }
}
