<script lang="ts" setup>
import { ref } from 'vue';
import TodoComponent from '@/components/TodoComponent.vue';

const todos = ref([

  {
    id: 1,
    text: 'Do the demo',
    completed: false,
  },
]);
</script>

<template>
  <div class="container mx-auto mt-4" data-todo-app>
    <h1 class="p-2 text-center text-3xl font-bold">
       Todo App 
    </h1>
    <TodoComponent :todos="todos" />
  </div>
</template>
