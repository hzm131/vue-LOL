import Vue from 'vue'
import axios from 'axios'
import store from 'store'


axios.login = (name,password)=>{
  axios.post("/api/v1/login",{
    name,
    password
  }).then((res)=>{
    store.set('token', res.data.data);
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data}`;
    alert(res.data.data)
  });
};

axios.register = (name,password)=>{
  axios.post("/api/v1/registered",{
    name,
    password
  }).then((res)=>{
    store.set('token', res.data.data);
    var token = store.get('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    alert(res.data.data)
  })
};



Vue.prototype.$axios = axios;

export default axios


