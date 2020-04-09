import {
 	getTaskList,
 	removeTaskById,
 	addTask,
 	updateTask
} from '../../api/task'
import axios from 'axios';
import moment from 'moment';
export default {
	// 查询
  	handleSearch() {
      this.pagination.current = 1;
      this.getTableData()
    },
    //设置分页大小
    handlePageSizeChange(pageSize) {
      this.pagination.pageSize = pageSize;
      this.getTableData();
    },
    //设置页码
    handleCurrentChange(current) {
      this.pagination.current = current;
      this.getTableData();
    },
	handleCloseAddDialog() {
	    // this.classFrom = Object.assign({}, this.defaultClassFrom);
	    this.dialogCreateTesttask = false;
	    this.$refs.testtaskForm.resetFields();
    },
    getTableData() { //---------------------获取列表数据
      let para = {
        pageNum: this.pagination.current,
        pageSize: this.pagination.pageSize,
        projectName: this.$route.params.proName,
          // ...this.filter
      };
      console.log(para);
      getTaskList(para).then((res) => {
        // console.log(res);
        this.testtaskData = res.data;
        this.pagination.total = res.data[0].total;
      });
    },
    // 日期格式处理
    dateFormat: function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = Object.assign({projectName: this.$route.params.proName,}, this.testtaskForm);
          // console.log(params);
          addTask(params).then((res) => {
            console.log(res.data);
            this.$message({
              message: '新建成功！',
              type: 'success'
            });
            this.dialogCreateTesttask = false;
            this.$refs[formName].resetFields();
            this.getTableData();
          }).catch((err) => {
            this.$message({
              type: 'warning',
              message: '新建失败'
            });
            this.dialogCreateTesttask = false;
            this.$refs[formName].resetFields();
            console.log(err);
          });
          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    delTesttask(scope) { //---------------------删除操作
      this.$confirm('此操作将删除选中项, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.removeTask(scope);
      }).catch(() => {
        this.$message({
          type: 'warning',
          message: '已取消删除'
        });
      });
    },
    enterinTask(scope) {
      console.log(scope);
    },
    removeTask(scope) {
      const params = {
        id: scope.row.id
      };
      console.log(scope);
      removeTaskById(params).then((res) => {
        this.getTableData();
        this.$message({
          type: 'info',
          message: '删除成功'
        });
      }).catch((err) => {
        console.log(err);
      })
    },

}
