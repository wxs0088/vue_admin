<template>

    <el-container class="index-container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <span>Apical后台管理</span>
            </div>
            欢迎：{{username}}
            <el-button type="info" @click="outlogin">退出</el-button>

        </el-header>
        <!-- 页面主题区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <!-- 三元表达式，当isCollapse为true时，width为64px,反之为200px -->
            <el-aside :width="isCollapse ? '64px' : '200px'">
            <div class="toggle-button" @click="toggleCollapse">|||</div>
            <!-- 侧边栏菜单区 -->
            <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b"
            unique-opened :collapse="isCollapse"
             router :default-active="activePath">
                <!-- 一级菜单 -->
                <el-submenu :index="'/'+ item.path" v-for="(item,index) in menulist" :key="index">
                        <!-- 一级菜单模版区域 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i :class="iconsObj[item.id]"></i>
                            <!-- 文本 -->
                            <span>{{ item.name }}</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item :index="'/' + item2.path"
                        v-for="(item2,index) in item.children" :key="index" @click="saveNavState('/' + item2.path)">
                            <template slot="title">
                                <!-- 图标 -->
                                <i class="el-icon-menu"></i>
                                <!-- 文本 -->
                                <span>{{ item2.name }}</span>
                            </template>
                        </el-menu-item>
                </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 右侧内容主题 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            username:'',
            menulist: [],
            iconsObj: {
                '1': 'el-icon-pie-chart',
                '2': 'el-icon-tickets',
                '3': 'el-icon-postcard',
                '4': 'el-icon-user-solid',
                '5': 'el-icon-s-marketing',
                '6': 'el-icon-message-solid',
                '7': 'el-icon-s-tools',
            },
            // 是否折叠侧边栏
            isCollapse: false,
            // 被激活的链接地址
            activePath:'',
        }
    },
    mounted() {
        this.get_menulist()
        this.username = localStorage.getItem('username')
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        // 保存链接的激活状态
        saveNavState(activePath){
            window.sessionStorage.setItem('activePath',activePath)
            this.activePath = activePath
        },
        // 点击按钮，折叠侧边栏
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        // 获取侧边栏标签
        get_menulist() {
            this.axios.get('http://127.0.0.1:5000/menu_list_get/').then(res=>{
                this.menulist = res.data.data
            })
        },
        // 退出登录
        outlogin() {
            sessionStorage.removeItem('activePath')
            localStorage.removeItem('jwt')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.index-container {
    height: 100%;
}
.el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }
        img {
            width: 130px;
            border-radius: 50%
        }
    }
}
.el-aside {
    background-color: #333744;
    .el-menu {
        border-right: none;
    }
}
.el-main {
    background-color: #eaedf1;
}
.iconfont {
    margin-right: 10px;
}
.toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.4em;
    cursor: pointer;
}
</style>