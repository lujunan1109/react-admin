/*
 * @Author: your name
 * @Date: 2020-10-09 20:35:32
 * @LastEditTime: 2020-10-10 17:25:04
 * @LastEditors: Please set LastEditors
 * @Description: 弹窗实现
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\dialog\index.js
 */
import React, { Component } from 'react';
import { createPortal } from "react-dom";
import "./style.css"

class myDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        const doc = window.document;
        this.node = doc.createElement("div");
        doc.body.appendChild(this.node)
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }

    render() { 
        let isShow = this.state.isShow;
        return createPortal( 
            isShow &&<div className="shadowBox">
                <div className="dialog" onClick={()=>{this.setState({isShow:!isShow})}}>点击弹窗{this.props.children}</div>
            </div>,this.node
         );
    }
}
 
export default myDialog;