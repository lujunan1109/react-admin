/*
 * @Author: your name
 * @Date: 2020-10-16 16:39:38
 * @LastEditTime: 2020-10-18 21:36:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\contenx\index.js
 */

import React, { Component, useContext, createContext } from 'react';
import Reducer from "../reducer"
// 跨级组件传值 value接受多种类型传值
// let { Provider, Consumer } = createContext();
let myContext = createContext();
class Contenx extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                {/* <Provider value={{ info: "组件之间数据传递" }}>
                    <Parent></Parent>
                </Provider> */}

                <myContext.Provider value={{ info: "第二种写法" ,info2: "第三种写法"}}>
                    <Parent></Parent>
                </myContext.Provider>
                <Reducer></Reducer>
            </>
        );
    }
}


class Child extends Component {
    static contextType = myContext
   
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                {/* <Consumer>
                    {(Contenx) => {
                        return <div>{Contenx}</div>
                    }}

                </Consumer> */}
                <p>{this.context.info}</p>

            </>
        );
    }
}

function Child2 () {
    const {info} = useContext(myContext)
    return (
        <>
          <myContext.Consumer>
           {(data)=>
               <div>{data.info2}
               <span> <div>{info}</div></span>
               </div>  
               
          }
          </myContext.Consumer>  
        </>
    )
}

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Child ></Child>
                <Child2></Child2>
            </>
        );
    }
}

export default Contenx;