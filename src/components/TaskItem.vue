<script setup lang="ts">
import VueFeather from 'vue-feather'
import { getCookiesObject, setCookiesObject } from '../utils/cookies'
import { ref, watch } from 'vue'

const props = defineProps<{
  task: {
    id: number
    value: string
    isDone: boolean
  }
}>()

const isDone = ref(props.task.isDone)
const isDeleted = ref(false)

function remove() {
  const cookies = getCookiesObject()
  cookies.tasks = cookies.tasks.filter((task) => {
    return task.id != props.task.id
  })
  setCookiesObject(cookies)

  isDeleted.value = true
}

watch(isDone, async (curr) => {
  const cookies = getCookiesObject()
  cookies.tasks = cookies.tasks.map((task) => {
    if (task.id == props.task.id) task.isDone = curr
    return task
  })
  setCookiesObject(cookies)
})
</script>

<template>
  <li v-if="!isDeleted" class="task-li">
    <input type="checkbox" :checked="isDone" v-model="isDone" />
    <label class="task-label" :class="isDone ? 'strike' : ''">{{ props.task.value }}</label>
    <button type="button" class="task-btn-del" @click="remove()">
      <VueFeather type="trash-2" size="1.25em" />
    </button>
  </li>
</template>
