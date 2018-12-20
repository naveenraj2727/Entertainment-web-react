import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter } from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
