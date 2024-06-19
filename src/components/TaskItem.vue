<template>
  <li v-if="!isDeleted" class="task-li">
    <input type="checkbox" :checked="isDone" v-model="isDone" />
    <label class="task-label" :class="isDone ? 'strike' : ''">{{ value }}</label>
    <button type="button" class="task-btn-del" @click="close()">
      <trash-2-icon size="1.25x" />
    </button>
  </li>
</template>

<script>
import { Trash2Icon } from 'vue-feather-icons';
import { getCookiesObject, setCookiesObject } from '../assets/js/cookies';

export default {
  name: 'task-item',
  props: {
    task: { id: Number, value: String, isDone: Boolean },
  },
  components: {
    Trash2Icon,
  },
  data() {
    return {
      id: this.task.id,
      value: this.task.value,
      isDone: this.task.isDone,
      isDeleted: false,
    };
  },
  methods: {
    close() {
      const id = this.id;
      const cookies = getCookiesObject();
      cookies.todos = cookies.todos.filter(task => {
        return task.id != id;
      });
      setCookiesObject(cookies);

      this.isDeleted = true;
    },
  },
  watch: {
    isDone(value) {
      const id = this.id;
      const cookies = getCookiesObject();
      cookies.todos = cookies.todos.map(task => {
        if (task.id == id) task.isDone = value;
        return task;
      });
      setCookiesObject(cookies);
    },
  },
};
</script>
