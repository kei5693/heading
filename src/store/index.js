import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://png.pngtree.com/svg/20170128/avatar_beard_shades_cool_959650.png'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://png.pngtree.com/svg/20170128/avatar_afro_black_man_beard_774214.png'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://png.pngtree.com/svg/20170128/avatar_black_african_american_woman_780239.png'}
    ]
  },
  getters: { // computed
    allUsersCount: state => {
      return state.allUsers.length
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user =>{
        if(user.address === 'Seoul') count++
      })
      return count
    },
    persentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    }
  },
  mutations: {
    // state를 변경 시키는 동일한 기능의 함수를 각각의 컴포넌트에 따로 사용하지 않고
    // mutations 안에 만들어 각각의 컴포넌트에서 실행(commit)해서 코드는 간결하게 할 수 있다.
    // state 값을 변경 시켜야 하기 때문에 인자값 state, 넘겨준 각각의 값을 받을수 있는 인자값 payload
    addUsers: (state, payload) => {
      state.allUsers.push(payload)
    }
  },
  actions: {
    // mutations에 비동기 로직이 포함되면 동일한 값을 여러 컴포넌트에서 변경을 요청했을때 그 순서를 알기 어렵기 때문에 비동기 로직은 actions에서 실행시킨다.
    // state 변경 시키는건 mutations에서 mutations을 동작 시키는것을 actions에서
    /*
    addUsers: context => {
      context.commit('addUsers') // mutations의 addUsers를 실행
    }
    */
    // context 축약 ({context})
    addUsers: ({commit}, payload) => { // function({commit})
      commit('addUsers', payload)
    }
  },
  modules: {
  }
})
