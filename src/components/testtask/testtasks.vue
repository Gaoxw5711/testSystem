<template>
	<div class="wrap-content">
		<el-row>
			<el-col :span="24">
				<div class="wrap-top">
					<el-row :gutter="20">
						<el-col :span="3">
							<div class="refresh">
								<el-button class="btn-refresh" type="primary" :loading="false">
									<i class="el-icon-refresh"></i>刷新
								</el-button>
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
								<el-button class="btn-new" @click="dialogCreateTesttask=true" type="primary" :loading="false">新建测试任务</el-button>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		<div class="table-wrap" style="margin-bottom: 20px; margin-top: 20px;">
	  		<el-table :data="testtaskData" style="width: 100%">
				<el-table-column prop="taskName" label="测试任务名称" width="180"></el-table-column>
				<el-table-column prop="module" label="模块"></el-table-column>
				<el-table-column prop="taskFunc" label="功能"></el-table-column>
				<el-table-column prop="describe" label="任务描述"></el-table-column>
				<el-table-column prop="taskLevel" label="优先级"></el-table-column>
				<el-table-column prop="expectation" label="期望结果"></el-table-column>
				<el-table-column prop="datetime" label="任务建立时间" :formatter="dateFormat" width="220"></el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<el-button size="mini" @click="">
							<router-link :to="{ name: '' }">查看</router-link>
						</el-button>
						<el-button size="mini" type="danger" @click="delTesttask(scope)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<el-row type='flex' justify='end'>
			<el-pagination
		      @size-change="handlePageSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="pagination.current"
		      :page-sizes="[5, 10]"
		      :page-size="pagination.pageSize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="pagination.total">
		    </el-pagination>
		</el-row>

		<!-- 新建 -->
		<el-dialog
		  title="项目新建"
		  :visible.sync="dialogCreateTesttask"
		  ref='createProject'
		  width="70%"
		  style="padding: 50px;">
			<el-form :model="testtaskForm" ref="testtaskForm" label-width="80px">
		  		<el-row type='flex' justify='space-between'>
					<el-col :span='8'>
					  	<el-form-item label="测试任务名称"
					  	label-width="110px"
					  	prop='taskName'
					  	required
					  	:rules='{
						    required: true, message: "名称不能为空！"
						}'>
						    <el-input v-model="testtaskForm.taskName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='7'>
					  	<el-form-item label="模块"
					  	prop='module'
					  	required
					  	:rules='{
						    required: true, message: "模块不能为空！"
						}'>
						    <el-input v-model="testtaskForm.module"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='7'>
					  	<el-form-item label="功能"
					  	prop='taskFunc'
					  	required
					  	:rules='{
						    required: true, message: "功能不能为空！"
						}'>
						    <el-input v-model="testtaskForm.taskFunc"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type='flex' justify='space-between'>
					<el-col :span='8'>
					  	<el-form-item label="任务描述"
					  	label-width="110px"
					  	prop='describe'
					  	required
						:rules='{
					     required: true, message: "描述不能为空！"
						}'>
					    	<el-input type="textarea" v-model="testtaskForm.describe"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='7'>
					  	<el-form-item label="优先级"
					  	prop='taskLevel'
					  	required
					  	:rules='{
						    required: true, message: "优先级不能为空！"
						}'>
						    <el-select v-model="testtaskForm.taskLevel" placeholder="优先级">
								<el-option label="Lv1" value="0"></el-option>
						      	<el-option label="Lv2" value="1"></el-option>
						      	<el-option label="Lv3" value="2"></el-option>
						    </el-select>
						</el-form-item>
					</el-col>
					<el-col :span='7'>
					  	<el-form-item label="期望结果"
					  	prop='expectation'
					  	required
					  	:rules='{
						    required: true, message: "此处不能为空！"
						}'>
						    <el-input type="textarea" v-model="testtaskForm.expectation"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col  :span='11'>
						<el-form-item
						label-width="110px"
						label='成立时间'
						prop='datetime'
						required
						:rules='{
					      	required: true, message: "时间不能为空！"
					    }'>
							<el-date-picker
						      v-model="testtaskForm.datetime"
						      type="date"
						      placeholder="选择日期"
						      :picker-options="pickerOptions">
						    </el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type='flex' justify='end'>
					<el-button @click='handleCloseAddDialog'>取消</el-button>
					<el-button type='info' @click="submitForm('testtaskForm')">保存</el-button>
				</el-row>
			</el-form>
		</el-dialog>

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
    	this.getTableData();
    }
}
</script>