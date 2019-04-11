import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _319d2b67 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _fcf9e4c8 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _6d014c39 = () => interopDefault(import('../pages/photo.vue' /* webpackChunkName: "pages/photo" */))
const _ef74a392 = () => interopDefault(import('../pages/shohada.vue' /* webpackChunkName: "pages/shohada" */))
const _220053fc = () => interopDefault(import('../pages/video.vue' /* webpackChunkName: "pages/video" */))
const _675ee424 = () => interopDefault(import('../pages/video-news.vue' /* webpackChunkName: "pages/video-news" */))
const _6f6ae6d9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/contact",
      component: _319d2b67,
      name: "contact"
    }, {
      path: "/news",
      component: _fcf9e4c8,
      name: "news"
    }, {
      path: "/photo",
      component: _6d014c39,
      name: "photo"
    }, {
      path: "/shohada",
      component: _ef74a392,
      name: "shohada"
    }, {
      path: "/video",
      component: _220053fc,
      name: "video"
    }, {
      path: "/video-news",
      component: _675ee424,
      name: "video-news"
    }, {
      path: "/",
      component: _6f6ae6d9,
      name: "index"
    }],

    fallback: false
  })
}
