import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    monthFormatName: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    daysFormatName: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    tsDate: +new Date(),
    Rooms: {
      1: {label: 'Зелёная', notice: '(до 5 персон)', type: 'green'},
      2: {label: 'Красная', notice: '(до 15 персон)', type: 'red'},
      3: {label: 'Синяя', notice: '(до 25 персон)', type: 'blue'},
      4: {label: 'Фиолетовая', notice: '(до 35 персон)', type: 'purpure'}
    },
    monthTitle: undefined,
    thisWeek: undefined,
    thisWeekDays: {},
    thisWeekDaysCount: 5
  },
  mutations: {
    changeDate (state) {
      setInterval(() => {
        state.tsDate = +new Date()
        console.log(state.tsDate)
      }, 5000)
    },
    changeDatePrevWeek (state) {
      state.tsDate = +new Date(state.tsDate).setDate(new Date(state.tsDate).getDate() - 7)
    },
    changeDateNextWeek (state) {
      state.tsDate = +new Date(state.tsDate).setDate(new Date(state.tsDate).getDate() + 7)
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
    },
    getRooms (state) {
      return state.Rooms
    }
  }
})
