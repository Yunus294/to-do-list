<script lang="ts" setup>
import { ref, toRef, computed, onMounted } from 'vue';
import NewItem from '@/components/NewItem.vue';
import TodoList from '@/components/TodoList.vue';

export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const props = withDefaults(defineProps<{ todos?: TodoItem[] }>(), {
  todos: () => [],
});

const items = toRef(props, 'todos');
const idCursor = ref(0);

const completed = computed(
  () => items.value.filter((item) => item.completed).length
);
const total = computed(() => items.value.length);

const onToggle = (id: number) => {
  const item = items.value.find((item) => item.id === id);
  if (item) {
    item.completed = !item.completed;
  }
};

const onCreate = (text: string) => {
  if (!text) return;
  idCursor.value += 1;
  items.value.push({
    id: items.value.length + 1,
    text,
    completed: false,
  });
};

onMounted(() => {
  idCursor.value = items.value.length;
});
</script>

<template>
  <div data-todo-app-plugin>
    <p class="mt-2 text-center">{{ completed }} of {{ total }} completed.</p>
    <NewItem @create="onCreate" />
    <TodoList :items="items" @toggle="onToggle" />
  </div>
</template>
