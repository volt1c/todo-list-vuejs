<script setup lang="ts">
import GithubCorner from './components/GithubCorner.vue'
import TaskItem from './components/TaskItem.vue'
import AddTask from './components/AddTask.vue'
import { getCookiesObject } from './utils/cookies'
import { ref } from 'vue'

const tasks = ref(getCookiesObject().tasks)

function reloadTasks() {
  tasks.value = getCookiesObject().tasks
}
</script>

<template>
  <div class="container">
    <h1 class="title">Get Sh*t Done:</h1>
    <ul class="list">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
    <AddTask @reload="reloadTasks()" />
    <GithubCorner href="https://github.com/volt1c/todo-list-vuejs" />
  </div>
</template>
