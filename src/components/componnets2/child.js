/*
 * @Author: your name
 * @Date: 2020-10-26 21:11:38
 * @LastEditTime: 2020-10-27 15:23:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\componnets2\child.js
 */

import React, {useMemo} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import './style.css'

function Parent({ count, callback }) {
    // count变化才会重新渲染
    const child1 = useMemo(() => <Child1 count={count} />, [count]);
    // callback变化才会重新渲染，count变化不会 Rerender
    const child2 = useMemo(() => <Child2 callback={callback} />, [callback]);
    return (
      <>
        {child1}
        {child2}
        <ul className="box">  
        {
          [1,2,3,4].map((item,index)=>{
            return (<li className="li" key={index}>{item}</li>)
          })
        }
        </ul>
        <p style={{background:'red'}}>25345</p>
      </>
    )
  }

  export default Parent;