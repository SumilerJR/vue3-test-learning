// 引入的不再是Vue构造函数（需要new）了，引用的是一个名为createApp的工厂函数（不需要new）
import { createApp } from 'vue';
import App from './App.vue';

// 创建应用实例对象——app（类似于之前Vue2中vm，但app比vm更“轻”）
const app = createApp(App);

// console.log('@@@', app);
// 挂载
app.mount('#app');


// const vm = new Vue({
//     render: h => h(App)
// });
// vm.$mount('#app');