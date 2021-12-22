<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Get Sh*t Done:</h1>
      <ul class="list">
        <task-item v-for="todo in todos" :key="todo.id" v-bind:task="todo" />
      </ul>
      <div class="add-task">
        <input
          class="add-task-input"
          id="input"
          type="text"
          placeholder="add sh*t to list"
          v-model="newTask"
        />
        <button class="add-task-btn" type="button" v-on:click="() => {addTodo();reloadTodos()}">
          <plus-icon size="1.5x" />
        </button>
      </div>
    </div>
    <a class="fixed-link right-1" href="https://github.com/volt1c/todo-list-vuejs">
      <github-icon size="1.75x" />
    </a>
  </div>
</template>

<script>
import TaskItem from './components/TaskItem.vue';
import { GithubIcon } from 'vue-feather-icons';
import { PlusIcon } from 'vue-feather-icons';
import { getCookiesObject, setCookiesObject } from './assets/js/cookies';

export default {
  name: 'App',
  data: function () {
    return {
      todos: getCookiesObject().todos,
      newTask: '',
    };
  },
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
    },
    reloadTodos() {
      this.todos = getCookiesObject().todos;
    },
  },
  components: {
    TaskItem,
    GithubIcon,
    PlusIcon,
  },
};
</script>

<style src="./assets/global.css">