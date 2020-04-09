import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import project from '@/components/project/projects'
import testtask from '@/components/testtask/testtasks'
import improvement from '@/components/improvement/improvements'
import report from '@/components/report/reports'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/project',
      children: [
        {
          path: '/project',
          component: project,
          name: '项目管理',
          // children: []
        },
        {
          path: '/project/:proName',
          // path: '/project/tasktask',
          component: testtask,
          name: '测试任务管理'
        },
        {
          path: '/improvement',
          component: improvement,
          name: '改进任务管理'
        },
        {
          path: '/report',
          component: report,
          name: '报告管理'
        }
      ]
    }
  ]
})
