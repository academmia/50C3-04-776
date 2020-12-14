import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initStore } from './state/store/initStore';
import { Provider } from 'react-redux';

//1.a test ADD_BOOK_TO_BORROW_LIST action
import * as actions from './state/store/actionTypes';

const store = initStore();
// console.log(store); //1

//1.b test actions
// store.dispatch({ type: actions.ADD_BOOK_TO_BORROW_LIST, book: { id: 1, name: 'Book ONE' } })
// store.dispatch({ type: actions.ADD_BOOK_TO_BORROW_LIST, book: { id: 2, name: 'Book TWO' } })
// setTimeout( () => {
//   store.dispatch({ type: actions.ADD_BOOK_TO_BORROW_LIST, book: { id: 3, name: 'Book THREE' } })
// }, 3000);

console.log('store.getState(): ', store.getState()); //2 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
