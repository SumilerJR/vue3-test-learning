<template>
	<h1>当前求和为：{{sum}}</h1>
	<button @click="sum++">点我加1</button>
	<hr>
	<h1>当前的信息为：{{msg}}</h1>
	<button @click="msg+='!!'">修改信息</button>
	<h1>姓名：{{person.name}}</h1>
	<h1>年龄：{{person.age}}</h1>
	<h1>薪资{{person.job.salary}}K</h1>
	<button @click="person.name += '~'">修改姓名</button>
	<button @click="person.age++">修改年龄</button>
	<button @click="person.job.salary++">涨薪</button>

</template>

<script>
	import { reactive, ref, watch } from "vue";
	export default {
		name: "App",
		watch: {
			//vue2中精简写法
			// sum(newValue, oldValue) {
			// 	console.log("sum的值变化了", newValue, oldValue);
			// },
			// 完整写法
			// sum: {
			// 	immediate: true, //未变化前也立即执行一次
			// 	deep: true, //开启深层监视
			// 	handler(newValue, oldValue) {
			// 		console.log("sum的值变化了", newValue, oldValue);
			// 	},
			// },
		},
		setup(props, context) {
			//数据
			let sum = ref(0);
			let msg = ref("你好啊");
			let person = ref({
				name: "张三",
				age: 18,
				job: {
					salary: 20,
				},
			});

			watch(sum, (newValue, oldValue) => {
				console.log("sum的值变化了", newValue, oldValue);
			});

			watch(person.value, (newValue, oldValue) => {
				console.log("person的值变化了", newValue, oldValue);
			});

			//返回一个对象（常用）
			return {
				sum,
				msg,
				person,
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