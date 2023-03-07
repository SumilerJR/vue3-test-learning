<template>
	<Demo @hello="showHelloMsg" name="张三" msg="你好">
		<template v-slot:qwe>
			<span>插槽1</span>
		</template>
		<template v-slot:asd>
			<span>插槽2</span>
		</template>
	</Demo>
</template>

<script>
	import Demo from "./components/Demo";
	export default {
		name: "App",
		components: {
			Demo,
		},
		setup() {
			function showHelloMsg(value) {
				alert(`你好啊，你触发了hello事件，我收到的参数是：${value}！`);
			}
			return {
				showHelloMsg,
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