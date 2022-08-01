<template>
  <div class="app">
    <todo-input @addTodo="addTodo"></todo-input>
    <todo-list @setStatus="setStatus">
      <todo-item
        @updateTodo="updateTodo"
        @deleteTodo="deleteTodo"
        @checkItem="checkItem"
        v-for="item in items"
        :key="item.id"
        :item="item"
        :status="status"
      />
    </todo-list>
    <div class="footer">
      <p>Jens Rosendal Andersen - 10397811</p>
    </div>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";
import TodoList from "./components/TodoList.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      items: [],
      status: null,
    };
  },
  mounted() {
    this.db.collection("todos").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          this.items.push({
            id: change.doc.id,
            ...change.doc.data(),
          });
        } else if (change.type == "removed") {
          this.items = this.items.filter((item) => item.id !== change.doc.id);
        } else if (change.type === "modified") {
          this.items = this.items.map((item) => {
            if (item.id === change.doc.id) {
              return { ...change.doc.data(), id: change.doc.id };
            }
            return item;
          });
        }
      });
    });
  },
  computed: {
    itemsLength() {
      return this.items.length;
    },
    getId() {
      if (this.itemsLength) {
        return this.items[this.itemsLength - 1].id + 1;
      }
      return 1;
    },
    db() {
      return firebase.firestore();
    },
  },
  methods: {
    addTodo(todo) {
      let todoItem = {
        todo,
        completed: false,
      };
      this.db.collection("todos").add(todoItem);
    },
    checkItem(Id) {
      let item = this.items.find((item) => item.id === Id);
      item.completed = !item.completed;
      this.updateTodo({ completed: item.completed, todo: item.todo });
    },
    deleteTodo(Id) {
      this.db.collection("todos").doc(Id).delete();
    },
    updateTodo(todo) {
      this.db.collection("todos").doc(todo.id).update(todo);
    },
    setStatus(value) {
      this.status = value;
    },
  },
  components: { TodoInput, TodoItem, TodoList },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

.app {
  margin: 50px auto;
  width: 500px;
  padding: 100px;
  border: 2px solid grey;
}

html,
body {
  font-family: "Roboto", sans-serif;
  background-color: #939393;
  top: 50px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(71, 195, 104);
  color: white;
  text-align: center;
}
</style>
