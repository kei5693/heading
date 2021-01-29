<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 text-xs-center>
        <h1>TodoList</h1>
        <p>전체 할일: {{todoList.length}} / 완료된 할일: {{countDone}} / 남은 할일: {{todoList.length - countDone}}</p>
      </v-flex>
      <v-flex xs6 pa-2>
        <TodoList
          :todolist="todoList"
          :textarea="textarea"
          @statusControl="statusControl"
          @listDelete="listDelete"
        />
      </v-flex>
      <v-flex xs6 pa-2>
        <TodoListAdd
          @listAdd="listAdd"
          @listEdit="listEdit"
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
      todoList:[],
      textarea: null
    }
  },
  computed:{
    countDone(){
      let count = 0
      this.todoList.forEach(list =>{
        if(list.status === 'done') count++
      })
      return count
    },
  },
  methods:{
    listAdd(memo, textarea){
      this.todoList.push({memo: memo, status: 'created'})
      this.textarea = textarea
    },
    statusControl(index, status){
      this.todoList[index].status = status
    },
    listDelete(index){
      this.todoList.splice(index,1)
    },
    listEdit(memo, index){
      this.todoList[index].memo = memo
    }
  },
}
</script>

<style scoped>
  .layout {background: antiquewhite;}
</style>