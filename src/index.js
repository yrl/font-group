import React from 'react';
import ReactDOM, {render} from 'react-dom';//从react-dom中导入一个reactDom，逗号后面的内容是把reactDom这个对象进行解构<=>import {render} from "react-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Item from 'antd/lib/list/Item';

ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
