<template>
	<div class="wrap-content">
		<el-row>
		  <el-col :span="24">
	  		<div class="wrap-top">
					<el-row :gutter="20">
					  <el-col :span="3">
					  	<div class="refresh">
					  		<el-button class="btn-refresh" type="primary" :loading="false"><i class="el-icon-refresh"></i>刷新</el-button>
					  	</div>
					  </el-col>
					  <el-col :span="17">
					  	<div>
			  				<el-input placeholder="请输入内容" class="input-with-select">
				    			<el-button slot="append" icon="el-icon-search"></el-button>
							  </el-input>
							</div>
						</el-col>
					  <el-col :span="4">
					  	<div class="newbuilt">
					  		<el-button class="btn-new" type="primary" :loading="false">新建改进任务</el-button>
					  	</div>
					  </el-col>
					</el-row>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="">
		  		<el-table :data="improveData" style="width: 100%">
			      <el-table-column prop="name" label="项目名称" width="180"></el-table-column>
			      <!-- <el-table-column prop="date" label="任务生成时间" width="180"></el-table-column> -->
			      <el-table-column prop="" label="模块"></el-table-column>
			      <el-table-column prop="" label="编号"></el-table-column>
			      <el-table-column prop="" label="功能"></el-table-column>
			      <el-table-column prop="" label="优先级"></el-table-column>
			      <el-table-column prop="" label="条件及操作步骤"></el-table-column>
			      <el-table-column prop="" label="期望结果"></el-table-column>
			      <el-table-column prop="" label="测试结果"></el-table-column>
			      <el-table-column prop="" label="结果改进"></el-table-column>
			      <el-table-column prop="" label="需求加入"></el-table-column>
			      <el-table-column prop="" label="是否完成"></el-table-column>
			      <el-table-column label="操作" width="180">
				      <template slot-scope="scope">
				        <el-button size="mini" @click="">查看</el-button>
				        <el-button size="mini" type="danger" @click="">删除</el-button>
				      </template>
				    </el-table-column>
			    </el-table>
			  </div>
		  </el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
  import methods from './method'
  import data from './data'

export default{
    data () {
      return data.init()
    },
    methods: methods,
    mounted () {
    // this.getTableData();
    }
}
</script>