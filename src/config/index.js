/**
 * 配置文件，用来配置不同环境的api地址
 */
const env = import.meta.env.MODE || "prod"
const EnvConfig = {
    development:{
        baseApi: '/api',
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api/home/getTableData"
    },
    test:{
        baseApi: '//test',
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api/home/getTableData"
    },
    prod:{
        baseApi: '//prod',
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api/home/getTableData"
    }
}

export default {
    env,
    ...EnvConfig[env],
    //mock
    mock:false
}