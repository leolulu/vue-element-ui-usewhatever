<template>
    <div>
        <el-row>
            <el-col :span="24" class="header">
                <router-link class="logo" to='/' tag='div'></router-link>
                <el-button  icon="el-icon-edit" size="mini"></el-button>
            </el-col>
        </el-row>
        <el-row class="maincontain">
                 <el-menu class="aside" background-color="#F9F9F5" router>
                     <el-menu-item :route='item.path' :index="index" v-for='(item,index) in navlist' :key='index'>{{item.name}}</el-menu-item>
                 </el-menu>
            <div class="main">
                <router-view></router-view>
            </div>
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
  display: flex;
  align-items: center;
  .logo{
      margin-left: 50px;
      background-image: url('../assets/images/logo.png');
      width: 140px;
      height: 60px;
      background-size: 135px 40px;
      background-repeat: no-repeat;
      background-position-y: center;
      display: inline-block;
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
    flex:1;
    overflow: hidden;
  }
}
@media screen and (max-width:776px) {
    .aside{
        display: none;
    }

}
</style>