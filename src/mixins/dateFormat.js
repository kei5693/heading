// 믹스인에서 뷰 인스턴스의 속성값(computed, data) 사용 가능
export const dateFormat = {
  // 믹스인을 사용하는 컴포넌트가 나중에 실행되므로 컴포넌트의 값이 최종값이 된다.
  created(){
    console.log('믹스인');
  },
  data(){
    return {
      mixinDate: '나는 믹스인~'
    }
  },
  methods:{
    getDateAneTime(date){
      if( date !== null ){
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        return `${fullDate} ${hour}:${minutes}`
      } else {
        return null
      }
    }
  }
}