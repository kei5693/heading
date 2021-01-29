<template>
  <div>
    <v-textarea
      outlined
      v-model="memo"
      label="todo-list 입력"
      value=""
      ref="textarea"
    ></v-textarea>
    <v-btn v-if="mode === 'add'" @click="listAdd">리스트 추가</v-btn>
    <v-btn v-else @click="listEdit">리스트 수정</v-btn>
  </div>
</template>
<script>
import { eventBus } from "../main"
export default {
  data() {
    return {
      memo: null,
      index: null,
      mode: "add",
      textarea: null
    }
  },
  created(){
    eventBus.$on('listEdit', (memo, index) =>{
      this.memo = memo
      this.index = index
      this.mode = "edit"
    })
  },
  mounted() {
    this.textarea = this.$refs.textarea
  },
  methods:{
    listAdd() {
      if (this.memo === null) {
        alert("할일을 입력해주세요.")
      } else {
        this.$emit("listAdd", this.memo, this.textarea)
        this.memo = null
      }
    },
    listEdit(){
      if (this.memo === null) {
        alert("할일을 입력해주세요.")
      } else {
        this.$emit("listEdit", this.memo, this.index)
        this.memo = null
        this.mode = "add"
      }
    },
  }
}
</script>
<style>
  
</style>