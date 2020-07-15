<template>
    <div>
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
         <el-breadcrumb-item>工单系统</el-breadcrumb-item>
         <el-breadcrumb-item>工单类型</el-breadcrumb-item>
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
              <el-col :span='4'><el-button type="primary" @click="but">添加工单</el-button></el-col>
          </el-row>
        </el-card>
        <el-card>
        <h4>工单信息</h4>
        <div class="block">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="全部" name="3"></el-tab-pane>
                <el-tab-pane label="启用" name="0"></el-tab-pane>
                <el-tab-pane label="停用" name="1"></el-tab-pane>
            </el-tabs>
          <el-table :data="labellist" border style="width: 100%">
            <el-table-column fixed prop='id' label='工单类型ID' width='100'></el-table-column>
            <el-table-column  prop="type_name" label="工单类型名称" width="200"></el-table-column>
            <el-table-column  prop="department" label="接收部门" width="200"></el-table-column>
            <el-table-column  prop="config" label="配置字段" width="150"></el-table-column>
            <el-table-column  prop="creat_time" label="创建时间" width="200"></el-table-column>
            <el-table-column  prop="end_time" label="更新时间" width="200"></el-table-column>
            <el-table-column  prop="person" label="最后操作人" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                  <el-button icon="el-icon-s-tools" circle size="small" @click="upuser(scope.row)"></el-button>
                  <el-button type="danger" icon="el-icon-error" circle size="small" @click="deluser(scope.row)"></el-button>
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
            activeName:3,
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
          var delorder_formdata = new FormData()
          delorder_formdata.append('id',row['id'])
          this.axios.post('http://127.0.0.1:5000/del_order/',delorder_formdata).then(res=>{
            if(res.data.code == 200){
                  this.$message.success('停用成功')
                  this.$router.go(0)
                }else {
                  this.$message.error('数据错误，请重试')
                }
          })
          // var params = { uid: row.id , type:localStorage.getItem('type')}
          // deluser_del(params).then(res=>{
          //     if(res.code == 200){
          //         this.$message.success('归档成功')
          //     }else{
          //         this.$message.error('权限不够，请联系超管')
          //     }
          // })
        },
        but(){
          this.$router.push('/addorder')
        },
        upuser(row){
          // this.$message.success(row)
          console.log(row['id'])
          // this.$router.push({path:'/uplabel',query:{data:row}})
        }
    }
}
</script>
<style>

</style>
