import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Context } from './utils/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/logos">
        <Link to="/logos"/> 
          <Context>
                  <App />
          </Context>
    </BrowserRouter>
  
);


