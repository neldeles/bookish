import React from 'react'
import { render } from '@testing-library/react'
import BookDetail from './BookDetail'

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    }

    const { container } = render(<BookDetail {...props} />)
    const title = container.querySelector('.book-title')
    expect(title.innerHTML).toEqual(props.book.name)
  })

  it('renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description:
          "Martin Fowler's Refactoring defined core ides and techniques that " +
          'hundreds of thousands of developers have used to improve their software.',
      },
    }

    const { container } = render(<BookDetail {...props} />)
    const title = container.querySelector('p.book-description')
    expect(title.innerHTML).toEqual(props.book.description)
  })

  it('displays the book name when no description was given', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    }

    const { container } = render(<BookDetail {...props} />)

    const description = container.querySelector('p.book-description')
    expect(description.innerHTML).toEqual(props.book.name)
  })

  // it('Shows *more* link when description is too long', () => {
  //   const props = {
  //     book: {
  //       name: 'Refactoring',
  //       description: 'The book about how to do refactoring ....',
  //     },
  //   }

  //   const { container } = render(<BookDetail {...props} />)
  //   const link = container.querySelector('a.show-more')
  //   const title = container.querySelector('p.book-description')

  //   expect(link.innerHTML).toEqual('Show more')
  //   expect(title.innerHTML).toEqual('The book about how to do refactoring ....')
  // })
})
