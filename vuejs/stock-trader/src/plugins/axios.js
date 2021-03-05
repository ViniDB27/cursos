import Vue from 'vue'
import axio from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axio.create({
            baseURL: 'https://cursos-e5eab-default-rtdb.firebaseio.com/'
        })
    }
})