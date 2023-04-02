<template>
  <div>
    <h1>{{ homeTitle }}</h1>
    <!-- AppStatus는 전역에서 선언해서 사용중 -->
    <AppStatus />
  </div>
</template>
<script>
export default {
  data(){
    return {
      homeTitle: '홈 입니다.'
    }
  }
}
</script>