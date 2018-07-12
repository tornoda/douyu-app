import React from 'react';
import ReactDOM from 'react-dom';
// import './static/css/reset.css';
// import './static/css/response.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/store'

const store = configureStore();

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();