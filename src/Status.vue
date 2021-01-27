<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title: '전역 컴포넌트.'
    }
  },
}
</script>

<style scoped>
  h1{text-align: center;}
</style>