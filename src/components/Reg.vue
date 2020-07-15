<template>
    <div class="login_container">
        <h1>Apical后台管理</h1>
        <div class="login_box">
            <!-- 登录表单 -->
            <el-form >
                <el-form-item :model="userForm">
                <el-input v-model="userForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item>
                <el-input placeholder="请输入密码" v-model="userForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                <el-input v-model="userForm.email" placeholder="请输入邮箱地址"></el-input>
                </el-form-item>
                <el-form-item>
                <el-input v-model="userForm.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                <el-input v-model="userForm.code" placeholder="请输入验证码"></el-input>

                </el-form-item>

                <el-button type="info" @click="get_sendalysm">获取验证码</el-button>
                <el-button type="primary" @click="reg_but">注册</el-button>

            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userForm: {
                username: '',
                password: '',
                email:'',
                phone:'',
                code:'',
            },
        }
    },
    mounted() {
    },
    methods: {
        get_sendalysm(){
            this.$message.success('暂无该功能')
        },
        reg_but() {
            this.$message.success('暂无该功能')
        },
    }
}
</script>

<style>
 .login_container{
     background-color: #969799;
     height: 100%;
 }
 .login_box{
     background-color: #969799;
     height: 50%;
 }
</style>