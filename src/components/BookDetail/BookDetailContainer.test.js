import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { Provider } from 'react-redux'
import BookDetailContainer from './BookDetailContainer'

import { MemoryRouter as Router } from 'react-router-dom'
import store from '../../store'

const renderWithProvider = (component) => {
  return {
    ...render(
      <Provider store={store}>
        <Router>{component}</Router>
      </Provider>,
    ),
  }
}

describe('BookDetailContainer', () => {
  it('renders', async () => {
    const props = {
      match: {
        params: {
          id: 2,
        },
      },
    }

    const mock = new MockAdapter(axios)
    mock.onGet('http://localhost:8080/books/2').reply(200, {
      name: 'Acceptance tests driven development with React',
      description:
        'This book describes how to apply the Acceptance Test Driven Development when developing a Web Application named bookish with React / Redux and other tools in react ecosystem.',
      id: 2,
    })

    const { findByText } = renderWithProvider(
      <BookDetailContainer {...props} />,
    )

    const book = await findByText(
      'Acceptance tests driven development with React',
    )
    expect(book).toBeInTheDocument()
  })
})
