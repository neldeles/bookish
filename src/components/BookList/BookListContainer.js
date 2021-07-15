import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRemoteService } from '../../hooks'
import SearchBox from '../SearchBox/SearchBox'
import BookList from './BookList'

const BookListContainer = () => {
  const [term, setTerm] = useState('')

  const { data, loading, error, setUrl } = useRemoteService(
    'http://localhost:8080/books',
    [],
  )

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`)
  }, [term])

  const onSearch = (event) => setTerm(event.target.value)

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={data} loading={loading} error={error} />
    </>
  )
}

export default BookListContainer
