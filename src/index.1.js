import React from 'react';
import ReactDOM, {render} from 'react-dom';//从react-dom中导入一个reactDom，逗号后面的内容是把reactDom这个对象进行解构<=>import {render} from "react-dom";

import Dialog from './component/fun';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Item from 'antd/lib/list/Item';

ReactDOM.render(<div>
  {/*注释：jsx中调用组件，只需要把组件当做一个标签去使用即可（单闭合和双闭合都可以） */}
  <Dialog />
  <Dialog con='哈哈哈😄' lx={2}>
  {/* 属性值不是字符串，我们需要使用大括号包起来 */}

    <span>我的天呀cnpm</span>
    <span>2</span>
  </Dialog>
</div>, document.getElementById('root'));

/*1:react组件
不管是vue还是react框架，设计之初都是期望我们按照"组件/模块管理"的方式来构架程序,也就是把一个程序划分为
一个个的组件单独处理
[优势]
1.有助于多人协作开发
2.我们开发的组件可以被复用
....

  react中创建组件有两种方式：
  函数声明组件
  基于继承component类来创建组件

  src->compneent：这个文件夹中存放的就是开发的组件

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
