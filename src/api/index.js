/**
 * @author <a href="mailto:shanhuashuiqing11@163.com">SHSQ</a>
 * @version V1.0, 2018/8/4 15:12
 */
import axios from 'axios'
import qs from 'qs'
import { BaseUri } from './uris'
import { axiosUtil } from '../utils'

axios.defaults.timeout = 8000

function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = axiosUtil.filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: BaseUri,
    withCredentials: false
  })
    .then(function(res) {
      if (res.data.success === true) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
          // window.alert('error: ' + JSON.stringify(res.data))
          this.$message.error('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function(err) {
      let res = err.response
      if (err) {
        failure(res.data)
        // window.alert('api error, HTTP CODE: ' + res.status)
        // this.$message.error('error: ' + JSON.stringify(res.data))
      }
    })
}
export const API = {
  doGet: (url, params) => {
    return axios.get(url, { params: params })
  },
  doPost: (url, params, config) => {
    return axios.post(url, params, config)
  },
  doPostQs: (url, params, config) => {
    return axios.post(url, qs.stringify(params), config)
  },
  checkGeoJson: params => {
    return axios.post(`${BaseUri}/rest/analysis/checkGeoJson`, params)
  },
  get: (url, params, success, failure) => {
    return apiAxios('GET', url, params, success, failure)
  },
  post: (url, params, success, failure) => {
    return apiAxios('POST', url, params, success, failure)
  },
  put: (url, params, success, failure) => {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: (url, params, success, failure) => {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
export default API
