import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../../redux/actions/actions'
import BookDetail from './BookDetail'

// const BookDetailContainer = ({ match }) => {
//   const { data } = useRemoteService(
//     `http://localhost:8080/books/${match.params.id}`,
//     {},
//   )

//   return <BookDetail book={data} />
// }

const BookDetailContainer = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchABook(match.params.id))
  }, [])

  const book = useSelector((state) => state.book)

  return <BookDetail book={book} />
}

export default BookDetailContainer
