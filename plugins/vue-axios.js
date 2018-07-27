import Vue from 'vue'
// import Auth from '../assets/js/auth.js'
// const _auth = new Auth()
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { getPath } from '../assets/js/path-check'

// 初期設定 axiosを使えるように
var instance = axios.create({
  timeout: 30000
})

// export default ({ store, redirect, route, error }) => {
//   instance.interceptors.request.use(
//     (config) => {
//       // pathによって判断(ログイン、リセット、再設定はtokenのcheckを行わない為)
//       var path = location.pathname
//       if (getPath(path)) {
//         const loginShop = _auth.getLoginShop()
//         var token = _auth.getCookieToken()
//         config.headers.Authorization = 'Bearer ' + token.accessToken
//         // loginShop === undefinedの時は問答無用でリダイレクト(refreshTokenはuser_idがないと叩けないから)
//         if ((token.accessToken === undefined && token.refreshToken === undefined) || loginShop === undefined) {
//           store.commit('resetState')
//           _auth.resetCookie()
//           _auth.clearStorage()
//           return redirect('/')

//         } else if (token.accessToken === undefined && token.refreshToken !== undefined) {
//           const loginShop = _auth.getLoginShop()
//           const refresh = {
//             accountID: loginShop.id,
//             refreshToken: token.refreshToken
//           }
//           return axios.post(process.env.NUTS_API_URL + '/admin/auth/refresh', refresh)
//           .then((response) => {
//             _auth.setToken(response.data)
//             store.commit('setToken', response.data)
//             store.commit('setHeaders')
//             store.commit('setClaim')
//             config.headers.Authorization = 'Bearer ' + response.data.accessToken
//             return config
//           })
//           .catch(() => {
//             store.commit('resetState')
//             _auth.resetCookie()
//             _auth.clearStorage()
//             return redirect('/')
//           })
//         }
//       }
//       return config
//     },
//     (error) => Promise.reject(error)
//   )
//   instance.interceptors.response.use(
//     response => response,
//     (error) => {
//       if (error.response.status === 401) {
//         store.commit('resetState')
//         _auth.resetCookie()
//         _auth.clearStorage()
//         return redirect('/')
//       }
//       return Promise.reject(error)
//     }
//   )
// }

Vue.use(VueAxios, instance)
