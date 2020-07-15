<template>
    <div class="login_container">
        <div class="login_box">
            <h1>Apical后台管理</h1>
            <!-- 登录表单 -->
            <el-form class="login_form" :rules="loginFormRules" :model="userForm" ref="loginFormRef">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input class="login_input" v-model="userForm.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input class="login_input" v-model="userForm.password" prefix-icon="el-icon-lock" show-password></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="primary" @click="but">注册</el-button>
                    <el-button type="info" icon="el-icon-message" circle @click="reversebut">找密码</el-button>
                </el-form-item>
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
                password: ''
            },
            // 这是表单的验证规则对象
            loginFormRules: {
                // 验证用户是否合法
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
                ],
                // 验证密码是否合法
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
                ],
            }
        }
    },
    mounted() {
    },
    methods: {
        login(){
            var login_formdata = new FormData()
            login_formdata.append('username',this.userForm['username'])
            login_formdata.append('password',this.userForm['password'])
            this.axios.post('http://127.0.0.1:5000/login/',login_formdata).then(res=>{
                if(res.data.code==200){
                    localStorage.setItem('username',res.data.username)
                    localStorage.setItem('jwt',res.data.jwt)
                    this.$message.success('登陆成功')
                    this.$router.push('/index')
                }
            })
        },
        but() {
            this.$router.push('/reg')
        },
        reversebut(){
            this.$router.push('/reverse')
        },
        text() {
            test_get().then(resp => {
                console.log(resp)
            })
        }
    }
}
</script>

<style>
 .login_container{
     background-color: #2b4b6b;
     height: 100%;
 }
</style>