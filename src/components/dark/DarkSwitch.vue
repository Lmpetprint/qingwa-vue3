<template>
<el-switch
    v-model="isDark"
    style="--el-switch-on-color: black; --el-switch-off-color: black"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
    @change="toggleDark"
/>    
     
</template>

<script setup>
import { ref } from 'vue'
import { Sunny, Moon,ArrowDown  } from '@element-plus/icons-vue'
const isDark = ref(true)
const toggleDark = (v) => {
  document.documentElement.classList.toggle('dark')
  isDark.value = v;
}
</script>

<style scoped lang="less">

</style>