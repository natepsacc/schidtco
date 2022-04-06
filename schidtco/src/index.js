import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import useImageColor from 'use-image-color';
import App from './app.js';
import WebCam from './reactwebcam.js';

ReactDOM.render(
  <WebCam />,
  document.getElementById('root')
);

