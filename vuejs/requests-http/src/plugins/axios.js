import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://cursos-e5eab-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})