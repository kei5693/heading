<template>
  <div>
    <!-- <h1>All Users({{$store.state.allUsers.length}})</h1> -->
    <!-- <h1>All Users({{$store.getters.allUsersCount}})</h1> -->
    <!-- <h1>All Users({{allUsersCount}})</h1> -->
    <h1>All Users({{count}})</h1>
    <!-- <h3>Seoul Users : {{$store.getters.countOfSeoul}}({{$store.getters.persentOfSeoul}}%)</h3> -->
    <!-- <h3>Seoul Users : {{countOfSeoul}}({{persentOfSeoul}}%)</h3> -->
    <h3>Seoul Users : {{seouls}}({{percent}}%)</h3>
    <v-list two-line>
      <div
        v-for="(user, index) in allUsers"
        :key="index"
      >
        <img :src="user.src" class="user_img">
        <span>
          <p v-html="user.name"></p>
          <span>id:#{{index}} / {{user.address}} 거주</span>
        </span>
      </div>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        
      }
    },
    computed: {
      // ...mapGetters(['allUsersCount', 'countOfSeoul', 'persentOfSeoul'])
      ...mapGetters({
        count: 'allUsersCount',
        seouls: 'countOfSeoul',
        percent: 'persentOfSeoul'
      }),
      ...mapState(['allUsers']) // $store.state.allUsers에서 allUsers로 축약 가능
    },
    mounted() {
      // signUp이라는 신호가 오면 같이 오는 데이터 users를 allUsers에 추가한다.
      EventBus.$on('signUp', users => {
        //this.allUsers.push(users)
        this.$store.state.allUsers.push(users)
      })
    }
  }
</script>

<style scoped>
.v-list--two-line > div + div {margin-top:20px;}
.user_img {max-width:50px;min-width:50px;min-height:50px;vertical-align: middle;border:1px solid #000;background: antiquewhite;border-radius: 50%;}
.user_img + span {display:inline-block;margin-left:15px;vertical-align: middle;}
.user_img + span p {margin:0;}
</style>
