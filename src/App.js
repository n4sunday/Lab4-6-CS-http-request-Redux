import React, { Component } from 'react';
import Github from './github/index'
import Footer from './footer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './actions'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// export const weather = (state = [], action) => {
//   switch (action.type) {
//     case 'RESETW':
//       return state = []
//     case 'SETW': {
//       if (action.value == 'null') return state.concat([''])
//       else return state.concat([action.value])
//     }
//     default:
//       return state
//   }
// }

export const store = createStore(rootReducer,applyMiddleware(logger, thunk))


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Github />
        <Footer />
      </Provider>
    )
  }
}


export default App;
