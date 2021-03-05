<template>
<div>
	
	<h1 class="display-3 font-weight-light mb-4" >Negocie e Consulte sua Ações</h1>

	<v-sheet :elevation="6" class="primary pa-2" >
		<v-icon class="white--text mr-3" >info</v-icon>
		<span class="white--text headline" >Você pode Salvar & Carregar Dados</span>
	</v-sheet>

	<v-sheet :elevation="6" class="success darken-1 mt-3 pa-2" >
		<v-icon class="white--text mr-3" >info</v-icon>
		<span class="white--text headline" >
			Clique me 'Finalizar o dia' para iniciar um novo dia!
		</span>
	</v-sheet>

	<v-divider class="my-4" ></v-divider>

	<p class="display-1" ><strong>Seu Saldo:</strong> {{ funds | currency}} </p>

</div>
		
</template>
<script>
	

	export default {
		computed:{
			funds(){
				return this.$store.getters.funds
			}
		},
		
	}
</script>

<style>

</style>

