<template>
	<h1>我是app组件</h1>
	<h1>我叫{{ name }}, {{ age }}岁</h1>
	<h1>工作种类：{{job.type}}，薪水：{{job.salary}}</h1>
	<button @click="changeInfo">修改人的信息</button>
</template>

<script>
	import { ref } from "vue";
	export default {
		name: "App",
		setup() {
			let name = ref("张三");
			let age = ref(18);
			let job = ref({
				type: "前端工程师",
				salary: "30k",
			});

			function changeInfo() {
				// name = "李四";
				// age = 48;
				name.value = "李四";
				age.value = 48;
				job.value.type = "Java后端开发";
				job.value.salary = "60k";
			}
			//返回一个对象
			return {
				name,
				age,
				job,
				changeInfo,
			};
		},
	};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>