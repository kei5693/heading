<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <div>
      <p>이름 <span>{{ name }}</span></p>
      <p>주소 <span>{{ address }}</span></p>
      <p>전화번호 <span>{{ phone }}</span></p>
      <p>반려견유무 <span>{{ hasDogKr }}</span></p>
      <p>수정일자 <span>{{ getDateAneTime(editedDate) }}</span></p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main"
import { dateFormat } from "../mixins/dateFormat"

export default {
  // props:{
  //   'nameOfChild' : Object
  //   nameOfChild: {
  //     type: String,
  //     required : true, // 부모 컴포넌트에서 값을 받지 못하면 에러 발생
  //     default : 'LEGO' // 부모 컴포넌트에서 값을 받지 못할 때 기본값
  //   }
  // },
  data(){
    return {
      editedDate: null
    }
  },
  props: ["name","address","phone","hasDog"],
  computed: {
    hasDogKr(){
      return this.hasDog === true ? '있음' : '없음';
    },
  },
  created(){
    console.log('유저 디테일 컴포넌트');
    eventBus.$on('userWasEdited', (date)=> {
      this.editedDate = date;
    });
  },
  mixins:[dateFormat]
}
</script>

<style>
p {
    display: flex;
    justify-content: space-between;
}
</style>