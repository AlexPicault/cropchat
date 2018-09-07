import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import CameraView from '@/components/CameraView'
import FileView from '@/components/FileView'
import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView
    },
    {
      path: '/file',
      name: 'file',
      component: FileView
    }
  ]
})
