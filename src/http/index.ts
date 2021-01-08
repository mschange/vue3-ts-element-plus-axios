export function inject(service: any) {
  // request拦截器
  service.interceptors.request.use(
    (config: any) => {
      console.log(config, 'config')
      // 可以进行token验证
      return config;
    },
    (error: any) => {
      Promise.reject(error);
    }
  );
  // response拦截器
  service.interceptors.response.use(
    (response: any) => {
      console.log(response, 'response')
      // 对返回的数据进行错误码处理
      return response.data
    },
    (error: any) => {
      console.log(JSON.stringify(error));
    }
  );
}
  
export default inject;