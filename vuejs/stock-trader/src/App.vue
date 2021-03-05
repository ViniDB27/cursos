<template>
	<v-app>
		<Header />
		<v-content>
			<v-container>
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from "./components/Header";


export default {
	components:{
		Header
	},
	created(){
		this.$store.dispatch('initStocks')
	}
}
</script>

<style>
	@keyframes slide-in {
		from { transition: translateY(-30px); opacity: 0;}
		to { transition: translateY(0px); opacity: 1;}
	}

	@keyframes slide-out {
		from { transform: translateY(0px); opacity: 1;}
		to { transform: translateY(-30px); opacity: 0;}
	}

	.slide-enter-cative {
		animation: slide-in 0.3s ease;
	}

	.slide-leave-cative {
		animation: slide-out 0.3s ease;
	}

</style>

