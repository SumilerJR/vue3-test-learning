<template>
	<h1>一个人的信息</h1>
	姓：<input type="text" v-model="person.firstname" /><br>
	名：<input type="text" v-model="person.lastname" /><br>
	<span>全名:{{person.fullName}}</span><br>
	全名：<input type="text" v-model="person.fullName">

</template>

<script>
	import { reactive, computed } from "vue";
	export default {
		name: "App",
		setup(props, context) {
			//数据
			let person = reactive({
				firstname: "张",
				lastname: "三",
			});

			//计算属性——(简写，没有考虑计算属性被修改的情况)
			// person.fullName = computed(() => {
			// 	return person.firstname + "-" + person.lastname;
			// });

			//计算属性——完整写法（考虑读和写）
			person.fullName = computed({
				get() {
					return person.firstname + "-" + person.lastname;
				},
				set(value) {
					const nameArr = value.split("-");
					person.firstname = nameArr[0];
					person.lastname = nameArr[1];
				},
			});

			//返回一个对象
			return {
				person,
				// fullName,
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