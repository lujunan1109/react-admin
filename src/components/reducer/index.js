/*
 * @Author: your name
 * @Date: 2020-10-18 21:21:52
 * @LastEditTime: 2020-10-26 20:28:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\reducer.js\index.js
 */

import React, { Component, useReducer, createContext, useContext,useState,useRef,useEffect} from 'react';
import Reducer1 from './reducer'
import Components2 from '../componentProps'
let myContext = createContext();


function Counter() {
    const [count, setCount] = useState(0);
  
    const prevCountRef = useRef();
    useEffect(() => {
      prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;// 利用更新state状态的时候此处早于useEffect执行来实现
    return <h1 style={{color:"black"}}>Now: {count}, before: {prevCount}
    <button onClick={()=>{
       setCount(count+1)
    }}>增加数字[利用useref存储上一状态的数据]</button>
    </h1>;
  }

function reduce(state = 0, action) {
    switch (action.type) {
        case "add":
            ++state;
            break;
        case "minus":
            --state;
            break;
    }
    return state;
}




function Child() {
    let { state, dispatch } = useContext(myContext)
    return (
        <div>
            <button onClick={() => {
                dispatch({ type: "add" })
            }}>+</button>
            <button> {state} </button>
            <button
                onClick={() => {
                    dispatch({ type: "minus" })
                }}>-</button>
        </div>)
}

function Reduce() {
    let [state, dispatch] = useReducer(reduce, 0)
    return (
        <myContext.Provider value={{ state, dispatch }}>
            <Child />
        </myContext.Provider>
    )
}


class Reducer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Reduce></Reduce>
                <Counter></Counter>
                <Reducer1></Reducer1>
                <Components2></Components2>
            </div>
        );
    }
}

export default Reducer;