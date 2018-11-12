<template>
	<div>

	<el-row>
	  <el-col :span="4">
	  	<div class="grid-content bg-purple">
		  	<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
	  </el-col>
	  <el-col :span="20">
	  	<div class="grid-content bg-purple-light">
	  		<div class = 'right_nav'>王小虎</div>
	  		<el-row :gutter="20" style = 'margin:0;'>
			  <div class = 'list'>
			  	<el-col :span="4"><div class="grid-content bg-purple">2016-08-08</div></el-col>
				  <el-col :span="16"><div class="grid-content bg-purple">elementUI</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple">11111</div></el-col>
			  </div>
			</el-row>
			<el-row :gutter="20" style = 'margin:0;'>
			  <div class = 'list'>
			  	<el-col :span="4"><div class="grid-content bg-purple">2016-08-08</div></el-col>
				  <el-col :span="16"><div class="grid-content bg-purple">elementUI</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple">11111</div></el-col>
			  </div>
			</el-row>
			<el-row :gutter="20" style = 'margin:0;'>
			  <div class = 'list'>
			  	<el-col :span="4"><div class="grid-content bg-purple">2016-08-08</div></el-col>
				  <el-col :span="16"><div class="grid-content bg-purple">elementUI</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple">11111</div></el-col>
			  </div>
			</el-row>
	  	</div>
	  </el-col>
	</el-row>

	</div>
</template>
<script>
	export default{
		  methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>

<style lang="scss" scoped>
.list{
	/*border-top:1px solid #99A9BF;*/
	border-bottom:1px solid #99A9BF;
	padding:10px 0;
	height:30px;
	width:90%;
	margin:10px auto;
	text-align:center;
	line-height:30px;
}
.navto{
	width:100%;
}
.nav{
	width:100%;
	text-align:center;
	line-height:50px;
}
.right_nav{
	width:100%;
	line-height:50px;
	background: #99a9bf;
	text-align:right;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
  	/*border:1px solid black;*/
    /*background: #d3dce6;*/
  }
  .bg-purple-light {
    /*background: #e5e9f2;*/
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>