<template>
	<!--vue3的组件模版结构可以没有根标签-->
	<h1>我是app组件</h1>
	<h1>我叫{{ person.name }}</h1>
	<h1>{{ person.age }}岁</h1>
	<button @click="test">测试触发一下Demo组件的hello事件</button>

</template>

<script>
	import { reactive } from "vue";
	export default {
		name: "App",
		beforeCreate() {
			console.log("---beforeCreate---");
		},
		props: ["name", "msg"],
		emits: ["hello"],
		setup(props, context) {
			console.log("----setup----");
			console.log("props", props);
			console.log("context", context.slots);
			let person = reactive({
				name: "Sumiler",
				age: 20,
			});

			function test() {
				context.emit("hello", 666);
			}

			//返回一个对象
			return {
				person,
				test,
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