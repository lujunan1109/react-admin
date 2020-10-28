/*
 * @Author: your name
 * @Date: 2020-10-26 21:17:29
 * @LastEditTime: 2020-10-26 21:28:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\componnets2\Child1.js
 */
import React, { Component } from 'react';

function Child2(props) {
    console.log(props,'props')
    return (
        <div>
           callback数据：{props.callback()}
        </div>
    )
}

export default Child2;