import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Products from './data'

// Reducer
const rootReducer = (state = Products, action) => {
  switch (action.type) {
    case 'CHANGE_ORDER':
      const exist = state.find((x) => x.id === action.id);
      if (exist) {
          return {
            ...state,
            qty: action.count
          }
      } else {
          return {
            ...state,
            qty: 1
          }
      }
    
    case 'REMOVE_PRD':
      return (state.filter((x) => x.id !== action.id))
    default:
      break;
  }
  return state;
};

// Store
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
