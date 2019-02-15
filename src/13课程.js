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
     super(); 
     
     /**
      * 
      * 即使在constructor中不设置形参props接收属性，执行super的时候也不传这个属性，除了constructor中不能直接使用
      * this.props，其它生命周期函数中都可以使用（也就是执行完成 constructor，react已经帮我们把传递的属性接收，并且挂载到实例上了）
      * 
      * 
      */
    //=>ES6中的extends继承，一但使用了constructor，第一行位置必须设置super执行；相当于react.component.call(this),也
    //  就是call继承，把父类私有的属性继承过来

    /**
     * 如果只写super（）：虽然创建实例的时候把属性传递进来了，但是并没有传递父组件，也就是没有把属性挂载到实例上，使用this.props获取
     * 的结果是undefined
     * 
     *  */

    /**
     * 
     * 如果super（props）：在继承父类私有的时候，就把传递的属性挂载到子类的实例上，constructor中就可以使用this.props了
     * 
     **/

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

  componentWillMount(){
    console.log(this.props);
  }

  render(){
    console.log(this.props);
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
