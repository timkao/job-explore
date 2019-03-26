import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// initial State
const initialState = {
  jobs: [],
  searchInput: '',
}

// action
const GET_JOBS = 'GET_JOBS'
const WRITE_SEARCH = 'WRITE_SEARCH'

// action creator
export const getJobs = (jobs) => {
  const action = {type: GET_JOBS, jobs}
  return action
}

export const writeSearch = (searchInput) => {
  const action = {type: WRITE_SEARCH, searchInput}
  return action
}

// thunk creator
export const fetchJobs = () => {
  return (dispatch) => {

  }
}

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return Object.assign({}, state, {jobs: action.jobs})
    case WRITE_SEARCH:
      return Object.assign({}, state, {searchInput: action.searchInput})
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware))
export default store
