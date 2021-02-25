<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="preogress" />
		<NewTask  @newTask="add" />
		<TaskGrid :tasks="tasks" @taskStateChanged="toggleTaskState" @removeTask="remove" />
	</div>
</template>

<script>
import TaskProgress from './components/TaskProgress'
import NewTask from './components/NewTask'
import TaskGrid from './components/TaskGrid'

export default {
	components:{
		TaskProgress,
		NewTask,
		TaskGrid,
	},
	data(){
		return{
			tasks:[]	
		}
	},
	watch:{
		tasks: {
			deep:true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	computed:{
		preogress(){
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	methods:{
		add(task){

			const sameName = t => t.name === task
			
			const reallyNew = (this.tasks.filter(sameName).length == 0)
			
			if(reallyNew && task !== ''){
				this.tasks.push({
					name:task, 
					pending: true
				})
			}

		},
		remove(task){
			this.tasks = this.tasks.filter(t => t.name !== task.name)
		},
		toggleTaskState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created(){
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
	}


}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
		
	}
</style>
