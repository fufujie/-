<template>
  <div class="app">
    <!-- 头 -->
    <div class="header">
      <div class="title">
        <i class="fa fa-modx"></i>
        <span>看点资讯精选</span>
        <i class="fa fa-bars" aria-hidden="true" value="toggle" v-on:click="toggle()"></i>
        <el-dropdown>
          <span class="el-dropdown-link users">
            <img src="@/assets/user.jpg" alt="用户头像">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><i class="fa fa-cog" aria-hidden="true"></i>设置</el-dropdown-item>
            <el-dropdown-item><i class="fa fa-question" aria-hidden="true"></i> 帮助</el-dropdown-item>
            <el-dropdown-item divided><i class="fa fa-power-off" aria-hidden="true"></i>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>
    <!-- 体 -->
    <div class="center">
      <!-- 左侧导航 -->
      <div :class="{'left-nav':isActive,'left-nav-two':isError}">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse"  background-color="#545c64"text-color="#fff"active-text-color="#409EFF" router > 
          <el-menu-item index="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span slot="title">资讯首页</span>
          </el-menu-item>
          <el-menu-item index="/category">
            <i class="fa fa-columns" aria-hidden="true"></i>
            <span slot="title">栏目管理</span>
          </el-menu-item>
          <el-menu-item index="/article">
            <i class="fa fa-book" aria-hidden="true"></i> 
            <span slot="title">文章管理</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <i class="fa fa-user" aria-hidden="true"></i> 
            <span slot="title">用户管理</span>
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 右侧内容区 -->
      <div :class="{'content':isActive,'content-two':isError}">
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        currentRoute:'/',
        isCollapse:false,
        isActive:true,
        isError:false
      }
    },
    watch:{
      '$route':function(to,from){
        this.currentRoute = to.path;
      }
    },
    methods:{
      toggle:function(){
        this.isCollapse = !this.isCollapse;
        this.isActive=!this.isActive;
        this.isError=!this.isError;
      }
    }
  }
</script>
<style>
  html {
    font: normal normal 12px '微软雅黑','Microsoft YaHei';
    color: #666
  }
  body , ul ,ol,dl ,p, h1,h2,h3 {
    margin: 0;
    padding: 0
  }
  ul , ol {
    list-style: none;
  }
  a {
    color: #666;
    text-decoration: none;
  }
  div {
    box-sizing: border-box;
  }
  .el-menu{
    position: absolute;
    top: 0;
    bottom: 0;
  } 
  .header {
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    background-color: #434a50;   
    padding: 0 1em; 
  }
  .header .title {
    color: #fff;
    line-height: 60px;
    font-size: 24px;
    position: relative;
  }
  .fa-bars{
    cursor: pointer;
  }
  .title span{
    margin:0 2em 0 .1em;
  }
  .el-dropdown{
    float: right;
  }
  .users img{
    cursor: pointer;
    width: 40px;
    border-radius: 50%;
    position: absolute;
    top:50%;
    right: 1em;
    margin-top:-20px;
  }
  .center {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;

  }
  .left-nav {
    width: 200px;
    height: 100%;
    float: left;
  }
  .left-nav-two{
    width: 64px;
    height: 100%;
    float: left;
    transition: all 0.5s;
  }
   .content {
    margin-left: 200px;
    height: 100%;
    background-color: #f0f0f0;
    padding: 1em 1em 0 1em;
    overflow-y: auto;
  }
  .content-two{
    margin-left: 64px;
    height: 100%;
    background-color: #f0f0f0;
    padding: 1em 1em 0 1em;
    overflow-y: auto;
  }
  .wrapper {
    width:100%;
    height:100%;
    background-color: #fff;
    border-radius: 5px;
    padding:.5em;

  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .fa{
    padding: 5px;
    font-size: 1em;
  }
    
</style>