import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import useImageColor from 'use-image-color';
import App from './app.js';
import { HashRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <HashRouter basename='/'>
<App />
</HashRouter>,

document.getElementById('root')
);
