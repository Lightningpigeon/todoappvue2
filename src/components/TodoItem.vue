<template>
  <div class="todo-item" v-show="status == null || status == item.completed">
    <div class="controls">
      <div class="edit" @click="editMode = !editMode">
        <i class="fa fa-edit"></i>
      </div>
      <div class="delete" @click="deleteTodo"><i class="fa fa-trash"></i></div>
    </div>
    <div v-if="editMode">
      <input @keydown.enter="updateTodo" v-model="todo.todo" />
    </div>
    <div v-else :class="{ throw: item.completed }">
      {{ item.todo }}
    </div>
    <div>
      <input type="checkbox" :checked="item.completed" @click="check()" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "status"],
  data() {
    return {
      todo: this.item,
      editMode: false,
    };
  },
  methods: {
    check() {
      this.$emit("checkItem", this.item.id);
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.item.id);
    },
    updateTodo() {
      if (this.todo.todo !== "") {
        this.$emit("updateTodo", this.todo);
        this.editMode = false;
      }
    },
  },
  components: {},
};
</script>

<style>
.todo-item {
  padding: 20px 20px;
  margin: 5px 0;
  font-size: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
}

.throw {
  text-decoration: line-through;
}

.controls {
  display: flex;
  align-items: center;
}

.controls div {
  margin: 0 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.controls div:hover {
  cursor: pointer;
}

.delete {
  color: #ff0000;
}

.edit {
  color: #f2ff00;
}
</style>
