import React, { Component } from 'react';
import Github from './github/index'
import Weather from './weather/index'
import Footer from './footer'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
// ========  action (As Dispatcher) ==========

export const add = () => ({ type: 'ADD' })
export const minus = () => ({ type: 'MINUS' })
export const set = (x) => ({ type: 'SET', value: x })
export const reset = () => ({ type: 'RESET' })
export const resetw = () => ({ type: 'RESETW' })
export const setw = (y) => ({ type: 'SETW', value: y})
// ========  reducer (As Controller) =========
export const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
export const githubReducer = (state = [], action) => {
  switch (action.type) {
    case 'RESET':
      return state = []
    case 'SET': {
      if (action.value == 'null') return state.concat([''])
      else return state.concat([action.value])
    }
    default:
      return state
  }
}
export const weather = (state = [], action) => {
  switch (action.type) {
    case 'RESETW':
      return state = []
    case 'SETW': {
      if (action.value == 'null') return state.concat([''])
      else return state.concat([action.value])
    }
    default:
      return state
  }
}

export const rootReducer = combineReducers({ number: numberReducer, githubs: githubReducer , wt:weather})
export const store = createStore(rootReducer)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Github />
        <Weather />
        <Footer />
      </Provider>
    )
  }
}


export default App;
