import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import './firebase'
import {ThemeProvider} from "./store/themeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);


