/*
 * @Author: your name
 * @Date: 2020-10-26 20:25:15
 * @LastEditTime: 2020-10-26 21:15:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\componentProps\child.js
 */
import React, { useEffect,useContext }  from 'react';
import {StoreDispatch} from './index'
import Component2 from '../componnets2'


export default function(props) {
  const { count, step,sum } = props.state;
  const dispatch = useContext(StoreDispatch);
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div >
      <h1 style={{color:'black'}}>{count}</h1>
      <input value={step} onChange={e => {
        dispatch({
          type: 'step',
          step: Number(e.target.value)
        });
      }} />
      <button onClick={()=>{
          dispatch({
            type:'sum'
          })
        }}>惦记我获得能量和：{sum}</button>
        <Component2></Component2>
    </div>
  );
}