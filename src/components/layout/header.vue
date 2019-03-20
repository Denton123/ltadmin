/* 全栈头部组件
* @description 头部组件
* @author 舒丹彤 
* @date 2019/3/5
* */

<template>
    <div class="header">
        <el-header class="el_header_style">
            <div class="header_logo">
                <img src="@/assets/logo.png" alt="">
                <!-- <h1>御道管理系统</h1> -->
            </div>
            <!-- 右侧个人中心 -->
            <el-dropdown class="header_right" @command="handleCommand">
                <div class="header_user">
                    <span class="header_avatar">
                        <img src="@/assets/user.jpeg" alt="">
                    </span>
                    <span class="header_userName">小辰</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        handleCommand (command) {
            if (command === 'logout') {
                this.$confirm('确认退出登录?')
                .then(() => {
                    this.$router.push('/login')
                })
                .catch(() => {})
            }
        }
    }
}
</script>

<style lang="scss">
    .header {
        background-color: rgb(64, 158, 255);
        // box-shadow: 2px 2px 4px 2px #eee;
        margin-bottom: 5px;
        .el_header_style{
            height: 97px !important;
            overflow: hidden;
            padding: 0;
        }
        .header_logo {
            width: 100px;
            height: 100%;
            float: left;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            
        }
        .header_right {
            float: right;
            color: #fff;
            .header_user {
                cursor: pointer;
                margin-right: 15px;
                margin-top: 32px;
            }
            .header_avatar {
                width: 30px;
                height: 30px;
                display: inline-block;
                border-radius: 50%;
                overflow: hidden;
                vertical-align: middle;
                margin-right: 15px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
</style>
