import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/projects/:companyid',
      name: 'project',
      component: Project
    },
    {
      path: '/projects/:companyid/:projectid',
      name: 'projectPage',
      component: Project
    }
  ]
})
