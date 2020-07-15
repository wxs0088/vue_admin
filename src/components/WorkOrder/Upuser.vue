<template>
    <div>
        <el-card>
        <h4>用户信息</h4>
        <div>
    <Form ref="form" :label-width="150" >
      <FormItem label="邮箱" prop="email">
        <input type="text" v-model="data.email"/>
      </FormItem>
      <FormItem label="密码" prop="password">
        <input type="password" v-model="data.password"/>
      </FormItem>
      <FormItem label="用户名" prop="username">
        <input type="text" v-model="data.username"/>
      </FormItem>
      <FormItem label="电话" prop="phone">
        <input type="text" v-model="data.phone"/>
      </FormItem>
      <FormItem label="权限" prop="type">
        <input type="text" v-model="type" placeholder="0：超管，1：送货，2：发货，3：发货+送货，4：客服"/>
      </FormItem>
      <FormItem label="审核" prop="type">
        <input type="text" v-model="auditing" placeholder="0：待审核，1：审核通过，2：审核失败"/>
      </FormItem>
      <FormItem>
        <Button color="primary" @click="submit">提交</Button>
        <Button color="primary" @click="topbut">修改权限和审核</Button>
      </FormItem>
    </Form>
  </div>
        </el-card>
    </div>
</template>
<script>
import { upuser_post , topup_post} from '../axios_api/api.js'
export default {
    data(){
        return{
            data:'',
            type:'',
            auditing:'',
        }
    },
    mounted(){
        this.data = this.$route.query.data
        console.log(this.data)
    },
    methods:{
        topbut(){
           var data = {uid:this.data.id,type:this.type,auditing:this.auditing,leve:localStorage.getItem('type')}
            topup_post(data).then(res=>{
              if(res.code == 200){
                    this.$message.success('修改成功')
                    this.$router.push('/userinfo')
                }else{
                    this.$message.error('无权限修改')
                }
            })
        },
        submit(){
            upuser_post(this.data).then(res=>{
                if(res.code == 200){
                    this.$message.success('修改成功')
                    this.$router.push('/userinfo')
                }else{
                    this.$message.error('信息错误')
                }
            })
        }
    }
}
</script>
<style>

</style>