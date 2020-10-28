/*
 * @Author: your name
 * @Date: 2020-10-13 17:38:04
 * @LastEditTime: 2020-10-15 17:59:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\Todos\index.js
 */
import React, { Component, useState ,useRef, useMemo, useEffect,useCallback} from 'react';
import './style.css'


function Memo() {
    const [name, setName] = useState('lja')
    const [age, setAge] = useState(0)

    let nameRef = useRef(null);

    const ageChange = (age) => {
        console.log(age,'age')
        let age2;
        switch(age) {
            case 0:
                age2 = "宝宝";break;
            case 10:
                age2 = "小学生";break;
            case 50:
                age2 = "初中生";break;
                case 30:
                age2 = "老年人";break;
            default:
                age2 = "外星人";break;
        }
        return age2;
    }
    // 满足条件执行ageChange
    //Memo的作用是把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
    // 后面的条件返回布尔值变化后会执行1次(true<->false)
    let stage = useMemo(() => ageChange(age), [age>=20]);
    // useCallback主要是Memo的一个变种，当useMeme返回的是一个函数的时候可以用useCallback去替代
    let callStage = useCallback(()=> age<18?"未成年":"成年", [age>18]);

    useEffect(()=> {
        // 获取dom改变颜色
        nameRef.current.style.background="red";
        console.log('end')
        return ()=>{
            console.log("销毁的生命周期")
        }
    },[])
    return (
        <>
        Name: <span ref={nameRef}>{name}</span><br/>
    Age: <span>{age}</span><br/>
    年龄阶段:<span>{stage}</span>   
    callBack年龄段 ：<span>{callStage()}</span>
    <button onClick={()=>{
        setAge(age+10)
    }}  >增加年龄</button>
 <button onClick={()=>{
        setAge(age-10)
    }}  >-年龄</button>
        </>
    )
}

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            value: "花手摇过我",
            flag: true,
            list: [{
                value: 123,
                isChecked: false,
                status: true,
                mouseStatus: false
            }, {
                value: 3453,
                isChecked: true,
                status: true,
                mouseStatus: false
            }],
        }
    }

    keyDown = (e) => {
        const { list, value } = this.state;
        console.log(list)
        if(!value.trim()) {
            alert("请输入内容")
        } else {
            list.push({ value })
            this.setState({ list })
        }
        
    }
    // 全选
    allChecked = () => {
        const { list,flag } = this.state;
        list.forEach(i => {
            flag?i.isChecked = true:i.isChecked = false;
        })
        if(flag) {
            this.setState({flag:false})
        } else {
            this.setState({flag:true})
        }
        this.setState({ list })
    }

    // 清除选中的
    clearChecked = () =>{
        const {list} = this.state;
        this.setState({list:list.filter(item=>item.isChecked === false)})
    }

    render() {
        const { value, list } = this.state;
        return (
            <>
                <h1 className="todo-box">TODOS列表</h1>
                    <input placeholder="请输入内容" type="text" value={value}
                       
                        onChange={(e) => {
                            this.setState({ value: e.target.value })
                        }} />
                <button onClick={this.keyDown}>添加数据</button>
                <button onClick={this.allChecked}>全选</button>
                <button onClick={this.clearChecked}>清除已完成的选项</button>
                {
                    list.length > 0 ? list.map((item, index) => {
                        if (item.id === undefined) {
                            item.id = Math.floor(Math.random() * 10660)
                            item.mouseStatus = false;
                        }
                        if (item.isChecked === undefined) {
                            item.isChecked = false;
                            item.status = true;
                        }
                        return (item.status?<div key={item.id} className={item.isChecked?"done":""} 
                        onMouseEnter={()=>{
                            item.mouseStatus = true;
                            this.setState({ list })
                        }}
                        onMouseLeave={
                            ()=>{
                                item.mouseStatus = false;
                                this.setState({ list })  
                            }
                        }>
                            <input type="checkbox" checked={item.isChecked} className="checked-int"onClick={()=>{
                                item.isChecked = !item.isChecked;
                                this.setState({ list })
                            }} 
                            onChange={()=>{}}/>

                            
                            <span onClick={()=>{
                                item.status = false;
                                this.setState({ list })
                            }}
                            >{item.value}</span>
                          
                            <span  style={{display:(item.mouseStatus?"inline-block":"none")}} className="delete-item" onClick={() => {
                                list.splice(index, 1)
                                this.setState({ list })
                                console.log(list)
                            }}>删除</span></div>:
                            <input key={item.id} type="text" className="input-block" value={item.value} onChange={(e)=>{
                                item.value = e.target.value;
                                this.setState({ list })
                            }} 
                            onBlur={()=>{
                                if (item.value.trim()) {
                                    item.status = true;
                                    this.setState({ list })
                                }
                                 
                            }}/>)
                    }) : <p>没得数据</p>
                }
                <Memo></Memo>
            </>
        );
    }
}

export default Todos;