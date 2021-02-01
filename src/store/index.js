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
  },
  actions: {
  },
  modules: {
  }
})
