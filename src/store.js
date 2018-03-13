import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monthFormatName: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    daysFormatName: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    tsDate: +new Date(),
    thisWeekDays: {},
    thisWeekDaysCount: 5
  },
  mutations: {
    changeDate (state) {
      setInterval(() => {
        state.tsDate = +new Date()
      }, 5000)
    },
    changeDateWeek (state, arg = '') {
      state.tsDate = +new Date(state.tsDate).setDate(new Date(state.tsDate).getDate() + parseInt(arg + '7'))
    },
    calculateWeekDays (state) {
      let count = 1
      let tstamp = 0
      while (count <= state.thisWeekDaysCount) {
        tstamp = new Date(state.tsDate).setDate(new Date(state.tsDate).getDate() - new Date(state.tsDate).getDay() + count)
        state.thisWeekDays[count] = new Date(tstamp).getDate() + ' ' + state.daysFormatName[new Date(tstamp).getDay() - 1]
        count++
      }
    }
  },
  getters: {
    getCurrentDate (state) {
      return state.tsDate
    },
    getMonthTitle (state) {
      state.monthTitle = state.monthFormatName[new Date(state.tsDate).getMonth()] + ' ' + new Date(state.tsDate).getFullYear()
      return state.monthFormatName[new Date(state.tsDate).getMonth()] + ' ' + new Date(state.tsDate).getFullYear()
    },
    getWeekDays (state) {
      return state.thisWeekDays
    }
  }
})
