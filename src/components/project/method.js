import {
  getProjectList,
  removeProjectById,
  addProject,
  updateProject
} from '../../api/project'
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
    // 新建窗口关闭
    handleCloseAddDialog() {
      // this.classFrom = Object.assign({}, this.defaultClassFrom);
      this.dialogCreateProject = false;
      this.$refs.projectForm.resetFields();
    },
    // 编辑窗口关闭
    handleCloseEditDialog() {
      // this.classFrom = Object.assign({}, this.defaultClassFrom);
      this.dialogEditProject = false;
      this.$refs.editForm.resetFields();
    },
    getTableData() { //---------------------获取列表数据
      let para = {
        pageNum: this.pagination.current,
        pageSize: this.pagination.pageSize
          // ...this.filter
      };
      console.log(para);
      getProjectList(para).then((res) => {
        console.log(res);
        this.tableData = res.data;
        this.pagination.total = res.data[0].total;
      });
    },
    // 日期格式处理
    getTime (date) {
      // var date = this.datetime;
      // console.log(date);
      this.datetime = moment(date).utcOffset(8);
      // console.log(this.datetime);
      console.log(this.datetime);
    },
    dateFormat: function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).utcOffset(0).format("YYYY-MM-DD HH:mm");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = Object.assign({}, this.projectForm);
          // console.log(params);
          addProject(params).then((res) => {
            console.log(res.data);
            this.$message({
              message: '新建成功！',
              type: 'success'
            });
            this.dialogCreateProject = false;
            this.$refs[formName].resetFields();
            this.getTableData();
          }).catch((err) => {
            this.$message({
              type: 'warning',
              message: '新建失败'
            });
            this.dialogCreateProject = false;
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
    editProject(scope) { //--------------------编辑操作
      this.dialogEditProject = true;
      this.editForm = Object.assign({}, {
        projectName: scope.row.projectName,
        datetime: scope.row.datetime,
        projectLeader: scope.row.projectLeader,
        id: scope.row.id
      });
    },
    updateProject(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = Object.assign({}, this.editForm);
          // console.log(params);
          updateProject(params).then((res) => {
            console.log(res.data);
            this.$message({
              message: '修改成功！',
              type: 'success'
            });
            this.dialogEditProject = false;
            this.$refs[formName].resetFields();
            this.getTableData();
          }).catch((err) => {
            this.$message({
              type: 'warning',
              message: '修改失败'
            });
            this.dialogEditProject = false;
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
    delProject(scope) { //---------------------删除操作
      this.$confirm('此操作将删除选中项, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.removeProject(scope);
      }).catch(() => {
        this.$message({
          type: 'warning',
          message: '已取消删除'
        });
      });
    },
    enterinProject(scope) {
      console.log(scope);
    },
    removeProject(scope) {
      const params = {
        id: scope.row.id
      };
      console.log(scope);
      removeProjectById(params).then((res) => {
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