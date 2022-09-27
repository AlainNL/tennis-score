import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { Provider } from "react-redux";
import { store} from "./store";
import { StrictMode } from 'react';


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
      <StrictMode>
          <App />
      </StrictMode>
  </Provider>,
  rootElement
);
