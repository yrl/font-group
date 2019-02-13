/*
 函数是声明组件
1.函数返回结果是一个新的jsx（也就是当前组件的jsx结构）
2.props变量存储的值是一个对象，包含了调取组件时候传递的属性值（不专递是一个空对象）
*/
import React from 'react';
//每一个组件中都要
export default function Dialong(props){
    let {con,lx = 0, children} = props;
    console.log(con,lx);
    //children：可能有可能没有，可能只是一个值，也可能是一个
    //数组，可能每一项是一个字符串，也可能是一个对象等（代表双闭合数组中的子元素）
   return <section>
       <h2 >{con}</h2>
       <div>{lx}</div>
       {/*
        把属性中传递的子元素放到组件中的指定位置
    */}
      
          {children} 
      
      {
/* 也是基于react中提供的专门遍历children的方法来完成遍历操作*/
      }
       {
        //    React.Children.map(children,item=>item)
       }
      
   </section>;
}