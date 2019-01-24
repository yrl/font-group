import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Item from 'antd/lib/list/Item';

// ReactDOM.render(<App />, document.getElementById('root'));
let data=[{name:"尤荣浪"},{name:"jack you"}];
let classA="kk";
ReactDOM.render(
    <ul style={{color:'red'}} className={classA}>
        {data.map((item,index)=>{
            return <li key={index}>{item.name}</li>;
        })}
    </ul>
,document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
