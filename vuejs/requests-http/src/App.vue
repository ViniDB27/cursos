<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
        <b-card>
            <b-form-group label="Nome">
                <b-form-input 
                    type="text" 
                    size="lg" 
                    v-model="usuario.nome" 
                    placeholder="Informe seu nome"
                ></b-form-input>
            </b-form-group>

             <b-form-group label="Email">
                <b-form-input 
                    type="email" 
                    size="lg" 
                    v-model="usuario.email" 
                    placeholder="Digite seu melhor email"
                ></b-form-input>
            </b-form-group>
            <hr>
            <b-button @click="salvar" class="mx-2" size="lg" variant="primary" >Salvar</b-button>
            <b-button @click="obterUsuarios" class="mx-2" size="lg" variant="success" >Buscar usuário</b-button>
        </b-card>

        <hr>

        <b-list-group>
            <b-list-group-item v-for="(usuario, id) in usuarios" :key="id" > 
                <strong>Nome: </strong> {{ usuario.nome }}<br>
                <strong>Email:</strong> {{ usuario.email }}<br>
                <strong>ID:</strong> {{ id }} <br>
                <b-button variant="warning" class="mx-1" @click="carregar(id)" >Carregar</b-button>
                <b-button variant="danger" class="mx-1" @click="remover(id)" >Deletar</b-button>
            </b-list-group-item>
        </b-list-group>

	</div>
</template>

<script>
export default {
    data(){
        return {
            usuario:{
                nome:'',
                email:'',
            },
            usuarios:[],
            id:'',
        }
    },
    methods:{
        salvar(){

            const metodo = this.id ? 'patch' : 'post'
            const finalUrl = this.id ? `/usuarios/${this.id}.json` : '/usuarios.json'

            this.$http[metodo](finalUrl, this.usuario)
            .then(() => {  
               this.clearForm()
               this.obterUsuarios()
            })
        },
        clearForm(){
            this.usuario.nome = ''
            this.usuario.email = ''
            this.id = null
        },
        obterUsuarios(){
            this.$http.get('usuarios.json').
            then(res=>{
                this.usuarios = res.data
            })
        },
        carregar(id){
            this.id = id
            this.usuario = {... this.usuarios[id]}
        },
        remover(id){
            this.$http.delete(`/usuarios/${id}.json`)
            .then(()=>{
                this.obterUsuarios()
                alert('usuário excluido')
            })
        }
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
