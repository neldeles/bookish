/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import SearchBox from '../SearchBox/SearchBox'
import BookList from './BookList'
import * as actions from '../../redux/actions/actions'
import bookListSelector from '../../redux/selectors/selector'

// const BookListContainer = () => {
//   const [term, setTerm] = useState('')

//   const { data, loading, error, setUrl } = useRemoteService(
//     'http://localhost:8080/books',
//     [],
//   )

//   useEffect(() => {
//     setUrl(`http://localhost:8080/books?q=${term}`)
//   }, [term])

//   const onSearch = (event) => setTerm(event.target.value)

//   return (
//     <>
//       <SearchBox term={term} onSearch={onSearch} />
//       <BookList books={data} loading={loading} error={error} />
//     </>
//   )
// }

const BookListContainer = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchBooks())
  }, [term, dispatch])

  const onSearch = (event) => {
    setTerm(event.target.value)
    dispatch(actions.setSearchTerm(event.target.value))
    // dispatch(actions.fetchBooks)
  }

  const { books, loading, error } = useSelector(bookListSelector)

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={books} loading={loading} error={error} />
    </>
  )
}

export default BookListContainer
