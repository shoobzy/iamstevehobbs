import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

<SVG
    src="/images/steve-hobbs.svg"
    preloader={<Loader />}
    onLoad={(src) => {
        myOnLoadHandler(src);
    }}
>
  Here's some optional content for browsers that don't support XHR or inline
  SVGs. You can use other React components here too. Here, I'll show you.
  <img src="/images/steve-hobbs.png" />
</SVG>


import 'font-awesome/css/font-awesome.css';
import './style.css';

// import Clock from './components/Timer/Clock';
// import Container from './Container';

ReactDOM.render(<Loader />, document.getElementById('steve-hobbs'));

// ReactDOM.render(<Clock />, document.getElementById('clock'));
