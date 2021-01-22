<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <!-- <p>{{ nameOfChild }}</p> -->
    <!-- <p>{{ nameOfChild.name }}</p> -->
    <!-- <p>{{ nameOfChild.familyName }}</p> -->
    <!-- <p>{{ sayHello }}</p> -->
    <div>
      <p>이름 {{ name }}</p>
      <p>주소 {{ address }}</p>
      <p>전화번호 {{ phone }}</p>
      <p>반려견유무 {{ hasDogKr }}</p>
      <p>수정일자 {{ getDateAneTime(editedDate) }}</p>
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
    // sayHello(){
    //   return this.nameOfChild + '안녕하세요'
    // },
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
  methods:{
    // getDateAneTime(date){
    //   if( date !== null ){
    //     let hour = date.getHours();
    //     let minutes = date.getMinutes();
    //     let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    //     return `${fullDate} ${hour}:${minutes}`
    //   } else {
    //     return null
    //   }
    // }
  },
  mixins:[dateFormat]
}
</script>
