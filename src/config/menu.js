/**
 *  Create By 2019/1/6 & 兰木落
 */

const menuList =[
    {
        title:'首页',
        key:'/home',
        icon:'home',
    },
    {
        title:'UI',
        key:'/ui',
        icon:'bg-colors',
        children:[
            {
                title:'按钮',
                key:'/ui/buttons'
            },
            {
                title:'对话框',
                key:'/ui/modals'
            },
            {
                title:'通知提醒',
                key:'/ui/notifications'
            },
            {
                title:'全局Message',
                key:'/ui/messages'
            },
            {
                title:'Tabs标签页',
                key:'/ui/tabs'
            },
            {
               title:'轮播图',
               key:'/ui/carousel',
            }
        ]
    },
    {
        title:'表单',
        key:'/form',
        icon:'form',
        children:[
            {
                title:'登录',
                key:'/form/login',
            },
            {
                title:'注册',
                key:'/form/register',
            }
        ]
    },
    {
        title:'表格',
        key:'/table',
        icon:'file-text',
        children:[
            {
                title:'基础表格',
                key:'/table/basic',
            },
            {
                title:'高级表格',
                key:'/table/advancedTable',
            }
        ]
    },
    {
        title:'图表',
        key:'/charts',
        icon:'bar-chart',
        children:[
            {
                title:'柱形图',
                key:'/charts/bar'
            },
            
            {
                title:'折线图',
                key:'/charts/line'
            },
            // {
            //     title:'地图',
            //     key:'/charts/map'
            // },
        ]
    },
]

export default menuList;