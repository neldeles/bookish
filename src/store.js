import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './redux/reducers/reducer'

const middlewares = [thunk]

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(reducer, composedEnhancers)

export default store
