import Vue from 'vue'
import Axios from 'axios'
// import router from '@/router'


// Axios.defaults.baseURL = 'http://phd.guaguakj.com';

// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// router.replace({path:'/log/login'});

// 添加请求拦截器
Axios.interceptors.request.use(config=> {

    // 在发送请求之前做些什么
    

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
      
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


Vue.prototype.axios = Axios;