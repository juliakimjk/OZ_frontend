import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import EditionsPage from '@/pages/EditionsPage'
import EditionPage from '@/pages/EditionPage'
import SearchPage from '@/pages/SearchPage'
import ContactsPage from '@/pages/ContactsPage'
import LoginPage from '@/pages/LoginPage'
import NotFoundPage from '@/pages/NotFoundPage'
import RedactPage from '@/pages/RedactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/editions',
      name: 'EditionsPage',
      component: EditionsPage
    },
    {
      path: '/edition/:id',
      name: 'EditionPage',
      component: EditionPage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/contacts',
      name: 'ContactsPage',
      component: ContactsPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/redact',
      name: 'RedactPage',
      component: RedactPage
    },
    {
      path: "*",
      component: NotFoundPage
    }
  ]
})
