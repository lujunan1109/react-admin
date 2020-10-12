/*
 * @Author: your name
 * @Date: 2020-09-16 17:01:40
 * @LastEditTime: 2020-09-25 17:41:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ting_ge_blogd:\项目管理\react-admin\react-admin\src\config\menu.js
 */
const menuList = [
  {
    key: '/home',
    title: '首页',
    icon: 'home'
  },
  {
    key: '/products',
    title: '商品',
    icon: 'appstore',
    children: [
      {
        key: '/category',
        title: '品类管理',
        icon: 'bars'
      },
      {
        key: '/product',
        title: '商品管理',
        icon: 'tool'
      },
      {
        key: '/flagInx',
        title: '商品索引',
        icon: 'tool'
      }
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },

  {
    title: '订单管理',
    key: '/order',
    icon: 'windows',
  },
]
export default menuList