<template>
  <div class="container">
    <h1 class="title">Get Sh*t Done:</h1>
    <ul class="list">
      <task-item v-for="todo in todos" :key="todo.id" v-bind:task="todo" />
    </ul>
    <add-task v-on:reload="reloadTasks()" />
    <github-corner href="https://github.com/volt1c/todo-list-vuejs" />
  </div>
</template>

<script>
import GithubCorner from './components/GithubCorner';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';
import { getCookiesObject } from './assets/js/cookies';

export default {
  name: 'App',
  data: () => ({
    todos: getCookiesObject().todos,
    newTask: '',
  }),
  methods: {
    reloadTasks() {
      this.todos = getCookiesObject().todos;
    },
  },
  components: {
    TaskItem,
    GithubCorner,
    AddTask,
  },
};
</script>

<style src="./assets/global.css"/>