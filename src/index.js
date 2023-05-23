import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import GuGuDan from './components/GuGudan/GuGuDan';
import WordRelay from './components/WordRelay/WordRelay';
import NumberBaseball from './components/NumberBaseball/NumberBaseball';
import ResponseCheck from './components/ResponseCheck/ResponseCheck';
import RSP from './components/RSP/RSP';
import Lotto from './components/Lotto/Lotto';
import TicTacToe from './components/TicTacToe/TicTacToe';
import MineSearch from './components/MineSearch/MineSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GuGuDan />
    <WordRelay />
    <NumberBaseball />
    <ResponseCheck />
    <RSP />
    <Lotto />
    {/* <TicTacToe /> */}
    <MineSearch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
