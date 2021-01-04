import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b6457d68 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _51f25b81 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _26dd45f2 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _3255f072 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _f5e7fc76 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _cde330e2 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _64c169d8 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _b6457d68,
    children: [{
      path: "",
      component: _51f25b81,
      name: "home"
    }, {
      path: "/login",
      component: _26dd45f2,
      props: () => {
                  return {
                    isLogin: true,
                  }
                },
      name: "login"
    }, {
      path: "/register",
      component: _26dd45f2,
      props: () => {
                  return {
                    isLogin: false,
                  }
                },
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3255f072,
      name: "profile"
    }, {
      path: "/settings",
      component: _f5e7fc76,
      name: "settings"
    }, {
      path: "/editor",
      component: _cde330e2,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _64c169d8,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
