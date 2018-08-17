import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './style.css';

import Clock from './components/Timer/Clock';
import Container from './Container';

ReactDOM.render(<Container />, document.getElementById('requestRefresh'));

ReactDOM.render(<Clock />, document.getElementById('clock'));
