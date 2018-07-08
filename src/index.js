import React from 'react';
import ReactDOM from 'react-dom';
// import './static/css/reset.css';
// import './static/css/response.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();