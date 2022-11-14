import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import CountHooks from './components/CountHooks'
import ViewCountHooks from './components/ViewCountHooks'
// import reducer from './reducers/reducer'
import counterReducer from "./components/counterSlice";
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// const store = createStore(reducer)
const store = configureStore({
  reducer: counterReducer,
  // if there are more than one reducer can make the object here and key value pairs of each reducer slices
  // ie reducer: {
  // key: value
  // }
})

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/count_hooks' element={<CountHooks />}/>
          <Route path='/view_count_hooks' element={<ViewCountHooks />}/>
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

