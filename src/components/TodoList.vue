<script lang="ts" setup>
import TodoItem from './TodoItem.vue';

const props = defineProps<{
  items: {
    id: number;
    text: string;
    completed: boolean;
  }[];
}>();

const emit = defineEmits<{
  (e: 'toggle', id: number): void;
}>();

const toggle = (id: number) => {
  emit('toggle', id);
};
</script>

<template>
  <div class="space-y-2">
    <TodoItem
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @toggle="toggle"
    />
  </div>
</template>
