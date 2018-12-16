import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Resume from './pages/Resume'
import * as serviceWorker from './serviceWorker'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// REDUX
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Reducers from './redux/reducers'
import ReduxPromise from 'redux-promise'

let store = createStore(
  Reducers,
  applyMiddleware(ReduxPromise, ReduxThunk)
)

ReactDOM.render(
<Provider store={store}>
  <Resume />
</Provider> , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
