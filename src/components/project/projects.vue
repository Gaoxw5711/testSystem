<template v-emit="getTableData">
	<div class="wrap-content">
		<el-row>
			<el-col :span="24">
		  		<div class="wrap-top">
					<el-row :gutter="20">
						<el-col :span="3">
						  	<div class="refresh">
						  		<el-button class="btn-refresh" type="primary" :loading="false" @click=""><i class="el-icon-refresh"></i>刷新</el-button>
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
						  		<el-button class="btn-new" @click="dialogCreateProject=true" type="primary">新建项目</el-button>
						  	</div>
						</el-col>
					</el-row>
			  	</div>
			</el-col>
		</el-row>
	  	<div class="table-wrap" style="margin-bottom: 20px; margin-top: 20px;">
	  		<el-table :data="tableData" style="width: 100%;">
			    <el-table-column prop="projectName" label="项目名称" width="180"></el-table-column>
			    <el-table-column prop="datetime" label="项目成立时间" :formatter="dateFormat" width="220"></el-table-column>
			    <el-table-column prop="projectLeader" label="项目负责人" width=""></el-table-column>
			    <el-table-column label="操作" width="220">
				    <template slot-scope="scope">
				        <router-link :to="{ name: '测试任务管理', params: { proName: scope.row.projectName }}">
				        	<el-button size="mini" @click="">查看</el-button>
				        </router-link>
				        <el-button size="mini" @click="editProject(scope)">编辑</el-button>
				        <el-button size="mini" type="danger" @click="delProject(scope)">删除</el-button>
			    	</template>
			    </el-table-column>
		    </el-table>
		</div>
		<el-row type='flex' justify='end'>
			<el-pagination
		      @size-change="handlePageSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="pagination.current"
		      :page-sizes="[5, 10, 15]"
		      :page-size="pagination.pageSize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="pagination.total">
		    </el-pagination>
		</el-row>

		<!-- 新建 -->
		<el-dialog
		title="项目新建"
		:visible.sync="dialogCreateProject"
		ref='createProject'
		width="60%"
		style="padding: 50px;">
			<el-form :model="projectForm" ref="projectForm" label-width="80px">
			  	<el-row type='flex' justify='space-between'>
					<el-col :span='11'>
					  	<el-form-item label="项目名称"
					  	prop='projectName'
					  	required
							:rules='{
						     required: true, message: "名称不能为空！"
						   }'>
						    <el-input v-model="projectForm.projectName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='11'>
						<el-form-item
						label='成立时间'
						prop='datetime'
						required
						:rules='{
				      	required: true, message: "时间不能为空！"
						}'>
							<el-date-picker
							v-model="projectForm.datetime"
							type="datetime"
							placeholder="选择时间"
							:picker-options="pickerOptions"
							@change="getTime">
					    </el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type='flex' justify='space-between'>
					<el-col :span='11'>
				  	<el-form-item label="负责人"
				  	prop='projectLeader'
				  	required
						:rules='{
					     required: true, message: "负责人不能为空！"
					   }'>
					    <el-input v-model="projectForm.projectLeader"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type='flex' justify='end'>
					<el-button @click='handleCloseAddDialog'>取消</el-button>
					<el-button type='info' @click="submitForm('projectForm')">保存</el-button>
				</el-row>
			</el-form>
		</el-dialog>

		<!-- 更新 -->
		<el-dialog
		title="项目信息修改"
		:visible.sync="dialogEditProject"
		ref='createProject'
		width="60%"
		style="padding: 50px;">
			<el-form :model="editForm" ref="editForm" label-width="80px">
			  	<el-row type='flex' justify='space-between'>
					<el-col :span='11'>
					  	<el-form-item label="项目名称"
					  	prop='projectName'
					  	required
							:rules='{
						     required: true, message: "名称不能为空！"
						   }'>
						    <el-input v-model="editForm.projectName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span='11'>
						<el-form-item
						label='成立时间'
						prop='datetime'
						required
						:rules='{
				      	required: true, message: "时间不能为空！"
						}'>
							<el-date-picker
							v-model="editForm.datetime"
							type="date"
							placeholder="选择时间"
							:picker-options="pickerOptions">
					    </el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type='flex' justify='space-between'>
					<el-col :span='11'>
				  	<el-form-item label="负责人"
				  	prop='projectLeader'
				  	required
						:rules='{
					     required: true, message: "负责人不能为空！"
					   }'>
					    <el-input v-model="editForm.projectLeader"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row type='flex' justify='end'>
					<el-button @click='handleCloseEditDialog'>取消</el-button>
					<el-button type='info' @click="updateProject('editForm')">保存</el-button>
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

// <style lang="scss" scoped="" type="text/css">

// </style>