<template>
  <div>
    <h1>UsersDetail</h1>
    <p>유저 번호 {{ userId }}</p>
    <v-btn small @click="edit">수정</v-btn>
  </div>
</template>
<script>
export default {
  computed: {
    userId(){
      return this.$route.params.id
    }
  },
  methods: {
    edit() {
      //this.$router.push({ path: `${this.userId}/edit` }) path를 사용하면 경로에 따른 차이가 있을 수 있지만 name은 직관적이다.
      this.$router.push({ name: "users-edit" })
    }
  }
}
</script>
<style>
  
</style>