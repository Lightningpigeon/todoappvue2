<template>
  <div class="todo-input">
    <input v-model="todo" placeholder="Add task" @keydown.enter="addTodo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.todo !== "") {
        this.$emit("addTodo", this.todo);
        this.todo = "";
      }
    },
  },
  components: {},
};
</script>

<style scoped>
.todo-input {
  width: 100%;
  padding: 0 10px;
}

input {
  width: 100%;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

input:focus {
  outline: none;
}
</style>
