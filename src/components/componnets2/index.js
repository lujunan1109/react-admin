/*
 * @Author: your name
 * @Date: 2020-10-26 21:10:50
 * @LastEditTime: 2020-10-26 21:33:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\componnets2\index.js
 */
import React,{useState,useRef,useEffect,useCallback} from 'react';
import Parent from './child';

export default ()=> {
    const [count, setCount] = useState(1);
    const countRef = useRef(0);// 在组件生命周期内保持唯一实例，可穿透闭包传值
  
    useEffect(() => {
      countRef.current = count; // 将 count 写入到 ref

    });
    // 只有countRef变化时，才会重新创建函数
    const callback = useCallback(() => {
      const currentCount = countRef.current //保持最新的值
      console.log(currentCount,'currentCount');
      return currentCount;
    }, [countRef]);
    return (
      <Parent callback={callback} count={count}/>
    )
  }