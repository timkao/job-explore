import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const initialState = {

}

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware))
export default store
