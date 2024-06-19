<template>
  <div class="add-task">
    <input class="add-task-input" type="text" placeholder="add sh*t to list" v-model="newTask" />
    <button class="add-task-btn" type="button" @click="addTodo()">
      <plus-icon size="1.5x" />
    </button>
  </div>
</template>

<script>
import { PlusIcon } from 'vue-feather-icons';
import { getCookiesObject, setCookiesObject } from '../assets/js/cookies';

export default {
  name: 'add-task',
  data: () => ({
    newTask: '',
  }),
  methods: {
    addTodo() {
      if (this.newTask.trim() == '')
        return console.warn('> newTask is empty...');

      const obj = getCookiesObject();
      if (!obj.todos) obj.todos = [];
      obj.todos.push({
        id: Date.now(),
        value: this.newTask.trim(),
        isDone: false,
      });
      setCookiesObject(obj);
      this.newTask = '';
      this.$emit('reload');
    },
  },
  components: {
    PlusIcon,
  },
};
</script>