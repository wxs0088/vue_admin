<template>
    <div>
      <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>工单系统</el-breadcrumb-item>
         <el-breadcrumb-item>新建工单类型</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
          <h2>新建工单</h2>
          <br>
          <div>
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="工单类型名称" prop="name">
                    <el-input v-model="ruleForm.type_name"></el-input>
              </el-form-item>
              <el-form-item label="接收部门" prop="department">
                    <el-input v-model="ruleForm.department"></el-input>
              </el-form-item>
              <el-form-item label="负责人" prop="person">
                    <el-input v-model="ruleForm.person"></el-input>
              </el-form-item>
              <el-form-item label="优先级">
              <el-radio-group v-model="ruleForm.priority">
                <el-radio label="普通"></el-radio>
                <el-radio label="低"></el-radio>
                <el-radio label="立即解决"></el-radio>
              </el-radio-group>
            </el-form-item>
              <el-form-item label="使用设备">
              <el-checkbox-group v-model="ruleForm.equip">
                <el-checkbox label="iPhone" name="iphone"></el-checkbox>
                <el-checkbox label="Android" name="Android"></el-checkbox>
                <el-checkbox label="iPad" name="iPad"></el-checkbox>
                <el-checkbox label="Windows" name="Windows"></el-checkbox>
                <el-checkbox label="XP系统" name="XP系统"></el-checkbox>
                <el-checkbox label="Mac系统" name="Mac系统"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="使用终端">
            <el-radio-group v-model="ruleForm.software">
                <el-radio label="PC客户端"></el-radio>
                <el-radio label="App移动端"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="上传图片">
              <el-upload class="avatar-uploader" action="http://127.0.0.1:5000/upyun/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="配置字段">
              <el-input type="textarea" v-model="ruleForm.config"></el-input>
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
            priority:'',
            equip:[],
            software:'',
            imageUrl:'',
            imgname:'',
          }
        }
    },
    mounted(){
    },
    methods:{
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        console.log(file)
        this.imgname = file.name
        console.log(this.imgname)
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
      },
        submitForm(val){
           var formdata = new FormData()
           formdata.append('type_name',val['type_name'])
           formdata.append('department',val['department'])
           formdata.append('config',val['config'])
           formdata.append('person',val['person'])
           formdata.append('priority',val['priority'])
           formdata.append('equip',val['equip'])
           formdata.append('software',val['software'])
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

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>