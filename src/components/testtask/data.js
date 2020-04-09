export default {
  init: function () {
    return {
      testtaskData: [],
      filter: '', //查询条件
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10
      },
      dialogCreateTesttask: false,
      testtaskForm: {
        taskName: '',
        module: '',
        taskFunc: '',
        describe: '',
        taskLevel: '',
        expectation: '',
        datetime: '',
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
    }
  }
}
