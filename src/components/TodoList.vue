<template>
  <div class="todo-list">
    <slot></slot>
    <div class="filter">
      <button @click="setStatus(null)">All</button>
      <button @click="setStatus(true)">Completed</button>
      <button @click="setStatus(false)">Uncompleted</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setStatus(value){
      this.$emit('setStatus',value)
    }
  }
};
</script>

<style>
.todo-list {
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;

}

.filet{
  padding: 5px 0;
  margin: 5px 0 0 0;

}
button {
  margin: 0 5px;
  background-color: #EEE;
  border:none;
  padding: 5px 10px;
  border-radius: 3px;
}
button:hover{
  cursor: pointer;
}
button:focus{
  outline: none;
}
</style>