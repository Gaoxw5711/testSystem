<template>
	<el-container class="container">
		<aside class="aside-menu" ref="asideMenu">
			<div class="menu-close" ref="menuClose" @click="closeMenu">
				<i class="el-icon-close"></i>
			</div>
			<div>
				<img src="./assets/user-info.png">
			</div>
			<el-menu :default-active="$route.path" class="menu-items" :default-openeds="['1','project']" router>
				<el-submenu index="1">
	        <template slot="title">产品内测系统</template>
        	<el-menu-item index="/project">项目管理</el-menu-item>
        	<el-menu-item index="/improvement">改进任务管理</el-menu-item>
        	<el-menu-item index="/report">报告管理</el-menu-item>
		    </el-submenu>
			</el-menu>
		</aside>
		<el-row class="page">
			<el-col class="header">
				<div class="menu" ref="menuOpen" @click="openMenu"><i class="el-icon-menu"></i></div>
				<div class="board-name">{{ $route.name }}</div>
				<img src="./assets/00logo.png">
			</el-col>
			<el-col class="content-container">
				<router-view></router-view>
			</el-col>
		</el-row>
	</el-container>
</template>

<script>
export default{
  data () {
    return {
      show: false
    }
  },
  methods: {
    openMenu: function () {
      this.$refs.asideMenu.style.left = '0'
    },
    closeMenu: function () {
      this.$refs.asideMenu.style.left = '-100%'
    }
  }
}
</script>

<style lang="scss" type="text/css">
.container {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
	height: 100%;
	.page {
		width: 100%;
		height: 100%;
		.header {
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 110px;
			color: white;
			background-color: #324057;
			.menu {
				font-size: 30px;
				height: 30px;
				margin-left: 30px;
				cursor: pointer;
			}
			img {
				position: absolute;
				right: 0;
			}
			.board-name {
				padding: 20px;
				box-sizing: border-box;
				font-size: 24px;
				margin-bottom: 0;
			}
		}
		.wrap-content {
			margin: 10px auto;
			padding: 10px 20px;
			.refresh, .newbuilt {
				text-align: center;
				.btn-refresh i {
					margin-right: 5px;
				}
			}
		}
	}
	.aside-menu {
		width: 270px;
		height: 100%;
		padding-top: 25px;
		position: fixed;
		transition: all 0.8s 0s;
		left: -100%;
		color: white;
		z-index: 10;
		background-color: #000000;
		opacity: 0.8;
		.menu-close {
			position: absolute;
			right: 20px;
		    top: 10px;
		    color: white;
		    font-size: 28px;
		    cursor: pointer;
		}
	}
}
</style>