export default {
  init: function () {
    return {
      tableData: [],
      filter: '', //查询条件
      activeCollapse: 'search', //开关查询折叠面板
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10
      },
      dialogCreateProject: false,
      dialogEditProject: false,
      projectForm: {
        projectName: '',
        datetime: '',
        projectLeader: ''
      },
      editForm: {
        projectName: '',
        datetime: '',
        projectLeader: '',
        id: ''
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
    }
  }
}
