import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import CountHooks from './components/CountHooks'
import ViewCountHooks from './components/ViewCountHooks'
import reducer from './reducers/reducer'
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const store = createStore(reducer)

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

