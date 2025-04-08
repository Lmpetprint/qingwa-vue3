/// <reference types="vite/client" />

// 解决vite提示找不到模块的问题
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

