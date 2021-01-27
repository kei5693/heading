<template>
    <div>
        <div class="row">
            <!-- you -->
            <div class="small-5 columns text-center">
                <img 
                  :src="myChoiceImg"
                  alt=""
                  class="text-center"
                >
                <!--img 
                  v-if="myChoice !== null"
                  :src="require('@/assets/images/' + myChoice + '.jpg')"
                  alt=""
                  class="text-center"
                >
                <img 
                  v-else
                  src="@/assets/images/question.jpg"
                  alt=""
                  class="text-center"
                -->
                <h1 class="text-center"><strong>YOU</strong></h1>
            </div>
            <!-- //you -->
            <div class="small-2 columns text-center"><h1 style="font-size:100px;"><strong>{{ count }}</strong></h1></div>
            <!-- com -->
            <div class="small-5 columns text-center">
                <img 
                  :src="comChoiceImg"
                  alt=""
                  class="text-center"
                >
                <!--img 
                  v-if="comChoice !== null"
                  :src="require('@/assets/images/' + comChoice + '.jpg')"
                  alt=""
                  class="text-center"
                >
                <img 
                  v-else
                  src="../assets/images/question.jpg"
                  alt=""
                  class="text-center"
                -->
                <h1 class="text-center"><strong>Computer</strong></h1>
            </div>
            <!-- //com -->
        </div>

        <div class="row">
            <div class="small-6 columns text-center">
                <div class="battle-wrap">
                    <img 
                      v-for="(life, i) in lifeOfMe"
                      :key="`life1-${i}`"
                      src="@/assets/images/heart.jpg"
                      class="heart"
                      alt=""
                    >
                    <img 
                      v-for="(life, i) in leftLifeOfMe"
                      :key="`life2-${i}`"
                      src="@/assets/images/broken-heart.jpg"
                      class="heart"
                      alt=""
                    >
                </div>
            </div>
            <div class="small-6 columns text-center">
                <div class="battle-wrap">
                    <img 
                      v-for="(life, i) in lifeOfCom"
                      :key="`life3-${i}`"
                      src="@/assets/images/heart.jpg"
                      class="heart"
                      alt=""
                    >
                    <img 
                      v-for="(life, i) in leftLifeOfCom"
                      :key="`life4-${i}`"
                      src="@/assets/images/broken-heart.jpg"
                      class="heart"
                      alt=""
                    >
                </div>
            </div>
        </div>

        <div class="row">
            <div class="small-6 columns text-center">
                <div class="row">
                    <div class="small-8 small-offset-2 columns text-center">
                        <label
                          v-for="(select, index) in selects"
                          :key="index"
                          class="radio-label"
                        >
                        <input type="radio" v-model="myChoice" :value="select.value"> {{select.name}}</label>
                    </div>
                </div>
                <div class="row">
                    <div class="small-12 columns">
                        <div class="text-center" v-if="isSelectable">
                          <button class="start-btn" @click="startGame()">선택 완료!</button>
                        </div>
                        <div v-else class="loading"> 기다리는 중...</div>
                    </div>
                </div>
            </div>
            <div class="small-6 columns text-center">
                <p>생각 중...</p>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns log">
                <ul>
                    <li 
                      :class="{
                        'win-log': log.winner === 'me',
                        'defeat-log': log.winner === 'com',
                        'draw-log': log.winner === 'no one',
                      }"
                      v-for="(log,i) in logs" :key="i">
                      {{log.messege}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      myChoice: null,
      comChoice: null,
      count: 3,
      winnner: null,
      lifeOfMe: 3,
      lifeOfCom: 3,
      isSelectable: true,
      logs:[],
      selects:[
        {name:'가위', value:'scissor'},
        {name:'바위', value:'rock'},
        {name:'보',   value:'paper'},
      ],
    }
  },
  computed: {
      myChoiceImg(){
        return this.myChoice !== null ? require('@/assets/images/'+`${this.myChoice}`+'.jpg') : require('@/assets/images/question.jpg')
      },
      comChoiceImg(){
        return this.comChoice !== null ? require('@/assets/images/'+`${this.comChoice}`+'.jpg') : require('@/assets/images/question.jpg')
      },
      leftLifeOfMe(){
        return 3 - this.lifeOfMe
      },
      leftLifeOfCom(){
        return 3 - this.lifeOfCom
      },
  },
  watch:{
    count(newVal){
      if(newVal === 0) {
        // 컴퓨터의 선택
        this.selectCom()
        
        // 승패 결정, 몫 차감
        this.whoIsWin()
        
        // 게임 리셋, 
        this.count = 3
        this.isSelectable = true

        // 로그 출력
        this.updateLogs()
      }
    },
    lifeOfMe(newVal){
      if(newVal === 0){
        this.endGame('나의 패배')
      }
    },
    lifeOfCom(newVal){
      if(newVal === 0){
        this.endGame('나의 승리')
      }
    },
  },
  methods:{
    startGame(){
      if(this.myChoice === null){
        alert('가위 바위 보 중 하나를 선택해주세요.')
      } else {
        this.isSelectable = false
        let countDown = setInterval(()=>{
          this.count--
          if(this.count === 0){
            clearInterval(countDown)
          }
        }, 1000);
      }
    },
    selectCom(){
      let number = Math.random();
      if(number < 0.33){
        this.comChoice = 'scissor';
      } else if(number < 0.66) {
        this.comChoice = 'rock';
      } else {
        this.comChoice = 'paper';
      }
    },
    whoIsWin(){
      if(this.myChoice === this.comChoice) this.winner = 'no one'
      else if(this.myChoice === 'rock' &&  this.comChoice === 'scissor') this.winner = 'me'
      else if(this.myChoice === 'scissor' &&  this.comChoice === 'paper') this.winner = 'me'
      else if(this.myChoice === 'paper' &&  this.comChoice === 'rock') this.winner = 'me'
      else if(this.myChoice === 'scissor' &&  this.comChoice === 'rock') this.winner = 'com'
      else if(this.myChoice === 'paper' &&  this.comChoice === 'scissor') this.winner = 'com'
      else if(this.myChoice === 'rock' &&  this.comChoice === 'paper') this.winner = 'com'
      else this.winner = 'error'
      // 몫 차감
      if(this.winner === 'me') {
        this.lifeOfCom --
      } else if(this.winner === 'com'){
        this.lifeOfMe --
      }
    },
    updateLogs(){
      let log = {
        messege: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
        winner: this.winner
      }
      this.logs.unshift(log)
    },
    endGame(msg){
      setTimeout(()=>{
          confirm(msg)
          this.lifeOfMe = 3
          this.lifeOfCom = 3
          this.myChoice = null
          this.comChoice = null
          this.winner = null
          this.logs = []
        }, 500)
    }
  },
}
</script>

<style scoped src="../assets/css/app.css"></style>
<style scoped src="../assets/css/foundation.min.css"></style>
<style scoped>
  .row {margin:0 auto !important;}
</style>