<template>
    <div>
        <el-row>
            <el-col :span="24" class="header">
                <div class="logo"></div>
            </el-col>
        </el-row>
        <el-row class="maincontain">
                 <el-menu class="aside" background-color="#fef" router>
                     <el-menu-item :route='item.path' :index="index" v-for='(item,index) in navlist' :key='index'>{{item.name}}</el-menu-item>
                 </el-menu>
            <div class="main"></div>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navlist: [
                {name:'功能木块1',path:'/module1'},
                {name:'功能木块2',path:'/module2'},
                {name:'功能木块3',path:'/module3'},
                {name:'功能木块4',path:'/module4'},
                {name:'功能木块5',path:'/module5'},
                {name:'功能木块6',path:'/module6'},
                {name:'功能木块7',path:'/module7'}
            ]
        }
    },
};
</script>

<style scoped lang='scss'>
.header {
  height: 60px;
  background-color: #eee;
  .logo{
      margin-left: 50px;
      background-image: url('../assets/images/logo.png');
      width: 140px;
      height: 60px;
      background-size: 135px 40px;
      background-repeat: no-repeat;
      background-position-y: center;
  }
}
.maincontain {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0;
  width: 100%;
  .aside {
    // background-color: lightseagreen;
    width: 250px;
  }
  .main {
    background-color: lightgray;
    flex:1;
  }
}
</style>