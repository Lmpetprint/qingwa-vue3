import { defineStore } from 'pinia'
import { ref } from 'vue'

//初始化state数据，这里我们使用一个函数来返回
function initState(){
  return {
    isCollapse: false,//控制侧边栏是否折叠
    tags:[
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon:'home'
      },
    ],
    currentMenu: null ,  //当前选中的菜单
    menuList: [], //菜单列表
    token:''
  }
}

export const useAllDataStore = defineStore('allData', (a) => {
   
      const state=ref(initState())
      
      function selectMenu(val){
        if(val.name === 'home'){
          state.value.currentMenu = false
        }else{
          let index = state.value.tags.findIndex(item => item.name === val.name)
          index===-1?state.value.tags.push(val):"";
        }
      }

      function updateTags(val){
        let index = state.value.tags.findIndex(item => item.name === val.name)
        state.value.tags.splice(index,1)
      }

      function updateMenuList(val){
        state.value.menuList = val
      }
      return {
        state,
        selectMenu,
        updateTags,
        updateMenuList
      }
})