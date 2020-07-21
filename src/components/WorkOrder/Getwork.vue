<template>
    <div>
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>工单系统</el-breadcrumb-item>
         <el-breadcrumb-item>工单发送</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图 -->
        <el-card>
            <!-- 搜索与添加区域 -->
            <el-row :gutter="20">
              <el-col :span='7'>
                <el-input placeholder="请输入内容">
                 <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </el-col>
          </el-row>
        </el-card>
        <el-card>
        <h4>工单发送</h4>
        <div class="block">
          <el-table :data="labellist" border style="width: 100%">
            <el-table-column fixed prop='id' label='工单类型ID' width='100'></el-table-column>
            <el-table-column  prop="type_name" label="标题" width="200"></el-table-column>
            <el-table-column  prop="department" label="接收部门" width="200"></el-table-column>
            <el-table-column  prop="creat_time" label="创建时间" width="200"></el-table-column>
            <el-table-column  prop="end_time" label="更新时间" width="200"></el-table-column>
            <el-table-column  prop="person" label="最后操作人" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                  <el-button @click="upuser(scope.row)" type="primary" plain>领取</el-button>
                  <el-button @click="deluser(scope.row)" type="primary" plain>指认</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            labellist:[],
            num:'',
            activeName:0,
        }
    },
    mounted(){
        this.handleClick()
    },
    methods:{
        handleClick(){
          var getorder_formdata = new FormData()
          getorder_formdata.append('state',this.activeName)
          this.axios.post('http://127.0.0.1:5000/get_order/',getorder_formdata).then(res=>{
                this.labellist = res.data.data
            })
        },
        deluser(row){
          this.$message.success('指认成功')
          // var delorder_formdata = new FormData()
          // delorder_formdata.append('id',row['id'])
          // this.axios.post('http://127.0.0.1:5000/del_order/',delorder_formdata).then(res=>{
          //   if(res.data.code == 200){
          //         this.$message.success('停用成功')
          //         this.$router.go(0)
          //       }else {
          //         this.$message.error('数据错误，请重试')
          //       }
          // })
        },
        upuser(row){
          this.$message.success('领取成功')
          // console.log(row['id'])
          // this.$router.push({path:'/uplabel',query:{data:row}})
        }
    }
}
</script>
<style>

</style>
