<template>
  <div>
    <v-card class="pa-3 mb-3"
      v-for="(list, index) in todolist"
      :key="index"
      :class="{'done': list.status === 'done'}"
    >
      <p>{{list.memo}}</p>

      <v-btn fab small color="green"
        v-if="list.status === 'created'"
        @click="$emit('statusControl', index, 'done')"
      >
        <i class="fas fa-check"></i>
      </v-btn>

      <v-btn fab small color="blue"
        v-else
        @click="$emit('statusControl', index, 'created')"
      >
        <i class="fas fa-redo-alt"></i>
      </v-btn>

      <v-btn fab small color="red"
        @click="$emit('listDelete', index)"
      >
        <i class="fas fa-trash-alt"></i>
      </v-btn>

      <v-btn fab small color="yellow"
        @click="listEdit(list.memo, index)"
        v-if="list.status === 'created'"
      >
        <i class="fas fa-edit"></i>
      </v-btn>
    </v-card>
  </div>
</template>
<script>
import { eventBus } from "../main"
export default {
  props: ["todolist", "textarea"],
  methods:{
    listEdit(memo, index){
      eventBus.listEdit(memo, index)
      this.textarea.focus()
    }
  },
}
</script>
<style scoped>
  .pa-3.done {background-color: rgba(0,0,0,0.3);}
  .pa-3.done p {text-decoration: line-through;color:rgba(0,0,0,0.5);}
  .v-btn + .v-btn {margin-left:5px;}
</style>