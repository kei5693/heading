<template>
  <v-layout
    row wrap pt-5 text-xs-center
    style="max-width:500px;margin:0 auto;"
  >
    <v-flex xs12>
      <h1>Users</h1>
      <p>유저를 검색해 주세요</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        label="유저 번호를 입력하세요."
      >

      </v-text-field>
    </v-flex>
    <!-- <p>현제 유저 번호 {{ dataUserId }}</p> -->
    <!-- <p>현제 유저 이름 {{ $route.params.name }}</p> -->
    <!-- <p>그룹 : {{ $route.query.group }}</p> -->
    <!-- <p>카테고리 : {{ $route.query.category }}</p> -->
    <!-- query string은 직관적이고 간단하지만 params처럼 값을 숨겨서 전달 할 수 없어 보안 문제가 있다. : TestRouter/4321?name=hdk236p&address=seoul -->
    <!-- <p>이름 : {{ $route.query.name }}</p> -->
    <!-- <p>주소 : {{ $route.query.address }}</p> -->
  </v-layout>
</template>
<script>
export default {
  computed:{
    dataUserId(){
      return this.$route.params.userId
    }
  },
  created(){
    console.log('router', this.$router) // router > index.js
    console.log('route', this.$route)   // 현제 router의 내용 (name: "TestRouter", params: {userId: "test"}, path: "/TestRouter/test")
  }
}
</script>