/*
 * @Author: your name
 * @Date: 2020-09-16 17:01:40
 * @LastEditTime: 2020-09-27 09:10:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\components\left-nav\index.js
 */
import React from 'react';

import { Link, withRouter } from 'react-router-dom'

import menuList from '../../config/menu'

// import memoryUtils from '../../config/memoryUtils'

import { Menu, Icon } from 'antd';

import { LeftNavWrapper } from './style'

const { SubMenu } = Menu;

class LeftNav extends React.Component {
  hasAuth = (item) => {
    return true;
    // const { key, isPublic } = item
    // const menus = memoryUtils.user.role.menus

    // const username =  memoryUtils.user.username
    // /*
    // *1 如果username是admin
    // 2. 如果item 是公开的
    // 3.当前用户有此item的权限: key有没有menus中
    //  * 
    //  */
    // if (username === 'admin' || isPublic || menus.indexOf(key) !== -1) {
    //   return true
    // } else if (item.children) {
    //   return !!item.children.find((cItem) => menus.indexOf(cItem.key) !== -1)
    // }
    // return false
  }
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      // 遍历每个子路由判断是否在menus权限数组中返回布尔值
      if (this.hasAuth(item)) {
        if (!item.children) {
        // 子类菜单没有chilren进入此循环
          pre.push((
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ))
        } else {

          // 查找一个与当前请求匹配的item
          const cItem = item.children.find((cItem) => {
            return path.indexOf(cItem.key) === 0
          })
          if (cItem) {
            this.openKey = item.key
          }
          pre.push((
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
                </span>
              }
            >
              {this.getMenuNodes(item.children)}
            </SubMenu>
          ))
        }
      }
      return pre
    }, [])
  }
  render() {
    const openKey = this.openKey
    return (
      <LeftNavWrapper>
        <div className='left-nav-header'>
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3663663312,3397280610&fm=26&gp=0.jpg" alt="电商后台" />
          <h1>电商后台</h1>
        </div>
        <div style={{ width: '100%' }}>
          <Menu
            defaultSelectedKeys={[openKey]}
            mode="inline"
            theme="dark"
          >
            {this.getMenuNodes(menuList)}
          </Menu>
        </div>
      </LeftNavWrapper>
    )
  }
}
export default withRouter(LeftNav)