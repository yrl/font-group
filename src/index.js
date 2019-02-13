import React from 'react';
import ReactDOM, {render} from 'react-dom';//从react-dom中导入一个reactDom，逗号后面的内容是把reactDom这个对象进行解构<=>import {render} from "react-dom";


import './index.css';
import * as serviceWorker from './serviceWorker';
import Item from 'antd/lib/list/Item';

function sum(props){
  console.log(this);
  return <div>
    函数式声明
  </div>;
}

class Dialog extends React.Component{
  constructor(props,context,updater){
     super(); //=>ES6中的extends继承，一但使用了constructor，第一行位置必须设置super执行；相当于react.component.call(this),也
    //  就是call继承，把父类私有的属性继承过来

    /*
      =>PROPS:当render渲染并且把当前类执行创建实例的时候，会把之前jsx解析出来的
      props对象中的信息（可能有children）传递给参数 props=》 “调用组件传递的属性”
    */
    /*
    this.props: 属性集合
    this.refs:ref 集合（非受控组件中用到）
    this.context:上下文
     */
    console.log(this);
    
    
  }
  render(){
      return <section>
        <h3>系统提示</h3>
        <div></div>
      </section>
  }
}

ReactDOM.render(<div>
  珠峰培训
  <Dialog lx={2} con="哈哈哈">
    <span>我是子元素</span>
  </Dialog>
</div>,document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
