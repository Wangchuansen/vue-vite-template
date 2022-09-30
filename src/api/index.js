import axios from 'axios'
import router from '../router'
import {ref,watch} from 'vue'
import store from '../store/index'
import { ElMessage,ElLoading  } from 'element-plus'


const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  timeout: 5000, // request timeout

})


service.interceptors.request.use(
  config => {
 
    config.headers['Authorization'] = localStorage.getItem('accessToken')
    // config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => {

    const res = response.data
    if (res.code === 200)  {
      return res
    }else if (res.code === '554') {
      service({
        url: 'njydzq-auth/ua/token/refresh',
        data: {
          refreshToken: localStorage.getItem('refreshToken')
        },
        method: 'post'
      }).then(res => {
        // if(response.config.method == 'get'){
          console.log(response)
          service({
            url:response.config.url,
            method:response.config.method,
            data:response.config.data?response.config.data:'',
            headers: { "Content-Type": response.headers['content-type'] },
          })
        // }
        localStorage.setItem('accessToken',res.data.accessToken)
        localStorage.setItem('refreshToken',res.data.refreshToken)
      })
    } else if (res.code === '555' || res.code === 'A00004') {
      ElMessage({
        message: res.msg,
        type: "warning",
      })
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      
      router.push('/login')
    }else if(res.code === 'A00001'){
      ElMessage({
        message: res.msg,
        type: "warning",
      })}
  },
  error => {
    console.log('接口信息报错' + error)
    return Promise.reject(error)
  },
)

export default service