<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6>
        <TodoList
          :todolist="todoList"
        />
      </v-flex>
      <v-flex xs6>
        <TodoListAdd
          @listAdd="listAdd"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TodoList from "@/components/TodoList.vue"
import TodoListAdd from "@/components/TodoListAdd.vue"

export default {
  components: {
    TodoList,
    TodoListAdd
  },
  data(){
    return {
      todoList:[]
    }
  },
  methods:{
    listAdd(memo){
      console.log(memo, '받음')
      this.todoList.push({memo: memo, status: 'created'})
    }
  }
}
</script>

<style scoped>
  .layout {background: antiquewhite;}
</style>