import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const LakeInfo = [
    {id:1, name:"Orom", region:"Tashkent"},
    {id:2, name:"Aydarko'l", region:"Jizzakh"},
    {id:3, name:"Issiq Ko'l", region:"Kyrgizstan"},
    {id:4, name:"Sho'r Ko'l", region:"Xorazm"}
]


ReactDOM.render(<App  lakes={LakeInfo} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
