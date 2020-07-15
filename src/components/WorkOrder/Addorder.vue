<template>
    <div>
      <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>工单系统</el-breadcrumb-item>
         <el-breadcrumb-item>新建工单类型</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
          <div>
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="工单类型名称" prop="name">
                    <el-input v-model="ruleForm.type_name"></el-input>
              </el-form-item>
              <el-form-item label="接收部门" prop="department">
                    <el-input v-model="ruleForm.department"></el-input>
              </el-form-item>
              <el-form-item label="配置字段" prop="config">
                    <el-input v-model="ruleForm.config"></el-input>
              </el-form-item>
              <el-form-item label="负责人" prop="person">
                    <el-input v-model="ruleForm.person"></el-input>
              </el-form-item>
              <center>
                <el-button type="primary" @click="submitForm(ruleForm)">立即创建</el-button>
              </center>
            </el-form>
          </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
          ruleForm:{
            type_name:'',
            department:'',
            config:'',
            person:'',
          }
        }
    },
    mounted(){
    },
    methods:{
        submitForm(val){
           var formdata = new FormData()
           formdata.append('type_name',val['type_name'])
           formdata.append('department',val['department'])
           formdata.append('config',val['config'])
           formdata.append('person',val['person'])
           this.axios.post('http://127.0.0.1:5000/add_order/',formdata).then(res=>{
                    if(res.data.code == 200){
                      this.$message.success('添加成功')
                      this.$router.push('/order')
                    }else {
                      this.$message.error('数据错误，请重新添加')
                    }
                })
        }
    }
}
</script>
<style>

</style>