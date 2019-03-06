/* eslint-disable key-spacing,no-multi-spaces */
import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue'

const baseUrl = ''

export const urlKey = {}

export default function Fetch(
  url,
  data = {},
  method = 'post',
  responseType = 'json',
  showLoading = false
) {
  // 开启loding
  const token = sessionStorage.getItem('token')
  if (!token) {
    Vue.prototype.$message.error('token不存在')
    return
  }
  let loading
  if (showLoading) {
    loading = Vue.prototype.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  if (method === 'get') {
    data = { params: { ...data } }
  } else {
    data = { ...data }
  }
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000000,
    headers: {
      'x-auth': token
    },
    validateStatus: function (status) {
      return status >= 200 && status < 300
    },
    responseType: responseType
  })
  const defer = new Promise((resolve, reject) => {
    instance[method](urlKey[url], data)
      .then(response => response.data)
      .then(response => {
        showLoading && loading.close()
        resolve(response)
      })
      .catch(error => {
        reject(error, false)
        showLoading && loading.close()
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          Vue.prototype.$message.error('网络响应错误')
        } else if (error.message.indexOf('timeout') > -1) {
          Vue.prototype.$message.error('网络请求超时')
        } else {
          // this.$message.error('接口异常').then(action => {
          //   window.location.href = '#/'
          // })
          Vue.prototype.$message.error(error.message)
        }
        console.log(error.config)
      })
  })
  return defer
}