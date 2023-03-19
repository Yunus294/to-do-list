import type { Plugin } from 'vue';
import TodoApp from './TodoApp.vue';
// import './assets/index.css';

const TodoAppPlugin: Plugin = {
  install(app) {
    app.component('TodoApp', TodoApp);
  },
};

export type { TodoItem } from '@/TodoApp.vue';
export { TodoAppPlugin, TodoApp };
