<template>
  <li v-if="!isDeleted" class="task-li">
    <input type="checkbox" v-bind:checked="isDone" v-model="isDone" />
    <label class="task-label" v-bind:class="isDone ? 'strike' : ''">{{ value }}</label>
    <button type="button" class="task-btn-del" v-on:click="close()">
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
  data: function () {
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
      cookies.todos = cookies.todos.filter(function (task) {
        return task.id != id;
      });
      setCookiesObject(cookies);

      this.isDeleted = true;
    },
  },
  watch: {
    isDone: function (v) {
      const id = this.id;
      const cookies = getCookiesObject();
      cookies.todos = cookies.todos.map(function (task) {
        if (task.id == id) task.isDone = v;
        return task;
      });
      setCookiesObject(cookies);
    },
  },
};
</script>
