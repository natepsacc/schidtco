import React from 'react';
import ReactDOM from 'react-dom';
import fleekStorage from '@fleekhq/fleek-storage-js';
import './index.css';
import App from './app.js';
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material/styles";
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 600,
      bigMobile: 700,
      tablet: 500,
      desktop: 800
    }
  },
  palette: {
    background: {
      paper: 'rgba(0,0,0,0.2)'
    }}
});
ReactDOM.render(
  <HashRouter basename='/'>
<App />
</HashRouter>,

document.getElementById('root')
);
