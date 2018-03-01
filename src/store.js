import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  state: 'Title',
  ThisWeek: undefined
}

export default new Vuex.Store({
  state
})
