<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
a {
    cursor: auto;
    text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.el-submenu,.el-menu-item, .el-submenu__title {
  font-size: 18px;
  vertical-align: baseline;
  background-color: #000000;
}
.el-menu {
  border-right: none;
}
.el-submenu .el-menu {
  background-color: #000000;
}
.el-submenu.is-active .el-submenu__title {
    border-bottom-color: #20a0ff;
}
.el-menu-item, .el-submenu__title {
    color: #bfcbd9;
}
.el-menu-item:hover, .el-submenu__title:hover {
    background-color: #48576a;
}
.el-menu-item:focus {
    outline: 0;
    background-color: #48576a;
}
</style>
