import axios from 'axios'
// 封装拦截器
export function request(config) {
  // 1.注册实例
  const axiosA = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  // 拦截
  axiosA.interceptors.request.use(config => { //请求拦截 config：配置信息 
    console.log(config);
    return config;
  }, err => {
    console.log(err);
  })
  axiosA.interceptors.response.use(res => {   //响应拦截  res:响应的结果信息  
    console.log(res.data);
    return res;
  }, error => {
    console.log(error);
  }

  )
  // axiosA(config)
  //   .then(res => {
  //     success(res)
  //   })
  //   .catch(err => {
  //     faliure(err)
  //   })
  return axiosA(config);
}