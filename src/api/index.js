import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'  //设置默认请求的路径前缀
axios.interceptors.response.use(res=>{
  return res.data;
})

//获取轮播图的数据
export let getSliders = () => {//请求localhost:3000/slider接口数据，并导出一个promise对象
  return axios.get('/sliders')
};

export let getHomeData=()=>{
  return axios.get("/hot");
}

export let getBooks=()=>{
  return axios.get('/book')
}

export let removeBook=(id)=>{
  return axios.delete(`/book?id=${id}`)
}

export let getOneBook=(id)=>{
  return axios.get(`/book?id=${id}`)
}

export let reviseBook=(id,data)=>{
  return axios.put(`/book?id=${id}`,data)
}

export let pagination=(offset)=>{
  return axios.get(`/page?offset=${offset}`)
}