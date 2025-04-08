import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'
import permissionApi from './mockData/permission'

/**
 * 三个参数：url要写正则表达式、请求方法、mock数据
 */
Mock.mock(/api\/home\/getTableData/, "get", homeApi.getTableData)
// Mock.mock("/api/home/getTableData", "get", homeApi.getTableData)//这个也可以


Mock.mock(/api\/home\/getCountData/, "get", homeApi.getCountData)

Mock.mock(/api\/home\/getChartData/, "get", homeApi.getChartData)

//用户
Mock.mock(/user\/getUserData/,"get", userApi.getUserList)

Mock.mock(/user\/deleteUser/, "get", userApi.deleteUser)

Mock.mock(/user\/addUser/,"post", userApi.createUser)

Mock.mock(/user\/editUser/, "post",userApi.updateUser)


Mock.mock(/permission\/getMenu/, "post",permissionApi.getMenu)