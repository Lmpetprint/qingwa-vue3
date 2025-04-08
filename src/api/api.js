/**
 * 整个项目api的管理
 * 
 */
import request from "./request"

export default {
  // home组件 左侧表格数据获取
  getTableData() {
    return request({
      url: '/home/getTableData',
      // url: 'https://apifoxmock.com/m1/4068509-0-default/api/home/getTableData',
      method: 'get',
      mock: false,
    })
  },
  getCountData() {
    return request({
      url: '/home/getCountData',
      // url: 'https://apifoxmock.com/m1/4068509-0-default/api/home/getTableData',
      method: 'get',
      
    })
  },
  getChartData() {
    return request({
      url: '/home/getChartData',
      method: 'get',
    })
  },
  

  //用户接口
  getUserData(data) {
    return request({
      url: '/user/getUserData',
      method: 'get',
      data
    })
  },
  //删除用户
  deleteUser(params) {
    return request({
      url: '/user/deleteUser',
      method: 'get',
      data: params
    })
  },
  //新增用户
  addUser(params) {
    return request({
      url: '/user/addUser',
      method: 'post',
      data: params
    })
  },
  //修改用户
  editUser(params) {
    return request({
      url: '/user/editUser',
      method: 'post',
      data: params
    })
  },


  //登录---
  getMenu(params) {
    return request({
      url: '/permission/getMenu',
      method: 'post',
      data: params
    })
}

}