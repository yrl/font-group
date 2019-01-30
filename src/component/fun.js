/*
 函数是声明组件
1.函数返回结果是一个新的jsx（也就是当前组件的jsx结构）
2.props变量存储的值是一个对象，包含了调取组件时候传递的属性值（不专递是一个空对象）
*/
import React from 'react';
//每一个组件中都要
export default function Dialong(props){
    let {con,lx = 0} = props;
    console.log(con,lx);
   return <section>
       <h2 >{con}</h2>
       <div>{lx}</div>
   </section>;
}