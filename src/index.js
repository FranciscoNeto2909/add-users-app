import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { getUsers } from './redux/slice/Slice';
import {store} from "./redux/store/Store"
import './index.css';
import App from './App';

store.dispatch(getUsers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);