import React from 'react'
import { Typography } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import BookDetailContainer from './components/BookDetailContainer'
import BookListContainer from './components/BookListContainer'

const App = () => {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Switch>
        <Route exact path="/" component={BookListContainer} />
        <Route path="/books/:id" component={BookDetailContainer} />
      </Switch>
    </div>
  )
}

export default App
