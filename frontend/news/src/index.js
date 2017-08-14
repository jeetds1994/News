import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Carousel from './components/Carousel'


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Carousel />, document.getElementById('root'));

registerServiceWorker();
