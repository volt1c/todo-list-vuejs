<script setup lang="ts">
import VueFeather from 'vue-feather'
import { getCookiesObject, setCookiesObject } from '../utils/cookies'
import { ref } from 'vue'

const emit = defineEmits(['reload'])
const newTask = ref('')

function addTask() {
  if (newTask.value.trim() == '') return console.warn('> newTask is empty...')

  const obj = getCookiesObject()
  if (!obj.tasks) obj.tasks = []
  obj.tasks.push({
    id: Date.now(),
    value: newTask.value.trim(),
    isDone: false
  })
  setCookiesObject(obj)
  newTask.value = ''
  emit('reload')
}
</script>

<template>
  <div class="add-task">
    <input class="add-task-input" type="text" placeholder="add sh*t to list" v-model="newTask" />
    <button class="add-task-btn" type="button" @click="addTask()">
      <VueFeather type="plus" size="1.5em" />
    </button>
  </div>
</template>
