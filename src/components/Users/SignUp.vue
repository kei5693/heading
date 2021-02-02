<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field
      label="아이디"
      v-model="userId"
    ></v-text-field>
    <v-text-field
      label="비밀번호"
      type="password"
      v-model="password"
    ></v-text-field>
    <v-text-field
      label="이름"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="주소"
      v-model="address"
    ></v-text-field>
    <v-text-field
      label="이미지"
      v-model="src"
    ></v-text-field>
    <v-btn @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
import { EventBus } from '@/main.js'
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        userId: null,
        password: null,
        name: null,
        address: null,
        src: null
      }
    },
    methods: {
      //...mapMutations(['addUsers']),
      ...mapActions(['addUsers']),
      // v-model로 binding 되어 있는 데이터를 signUp()을 실행하면 새로운 객체 userObj에 복사해서 이벤트 버스로 signUp이라는 신호와 같이 복사한 userObj를 보내게 된다.
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        this.addUsers(userObj) // mapMutations의 addUsers와 동일한 이름이지만 여기서는 mapActions의 addUsers
        // this.$store.dispatch('addUsers', userObj) // dispatch로 actions의 함수 실행
        // this.$store.commit('addUsers', userObj) // commit(mutation이름, 인자(payload))으로 mutation 함수 실행
        // this.addUsers(userObj) // ...mapMutations(['addUsers']) vue 인스턴스에 선언된 함수 처럼 사용 할 수 있게 된다.
        // EventBus.$emit('signUp', userObj)
        this.clearForm()
      },
      clearForm() {
        this.userId = null,
        this.password = null,
        this.name = null,
        this.address = null,
        this.src = null
      }
    }
  }
</script>