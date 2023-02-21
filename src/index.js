import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GuGuDan from './components/GuGuDan';
import WordRelay from './components/WordRelay';
import NumberBaseball from './components/NumberBaseball';
import ResponseCheck from './components/ResponseCheck';
import RSP from './components/RSP';
import Lotto from './components/Lotto';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GuGuDan />
    <WordRelay />
    <NumberBaseball />
    <ResponseCheck />
    <RSP />
    <Lotto />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
