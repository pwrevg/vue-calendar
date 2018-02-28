<template>

    <div class="content">
    <div class="content__title">
      Бронирование переговорок
    </div>
    <div class="content__logo">
    </div>
    <div class="content__shudle">
        <div class="content__shudle-month">
            <MonthSwitcher
              :date="ThisWeek"
              v-on:prev="PrevWeek"
              v-on:next="NextWeek"
            />
            <RoomShudle
              v-for="room in Rooms"
              :key="room.index"
              :room="room"
              :date="ThisWeek"
            ></RoomShudle>
        </div>
    </div>
    </div>

</template>
<script>
import MonthSwitcher from './components/MonthSwitcher'
import RoomShudle from './components/RoomShudle'

export default {
  components: {
    MonthSwitcher,
    RoomShudle
  },
  name: 'App',
  data: function () {
    return {
      Rooms: {
        1: {label: 'Зелёная', notice: '(до 5 персон)', type: 'green'},
        2: {label: 'Красная', notice: '(до 15 персон)', type: 'red'},
        3: {label: 'Синяя', notice: '(до 25 персон)', type: 'blue'},
        4: {label: 'Фиолетовая', notice: '(до 35 персон)', type: 'purpure'}
      },
      secondInDay: 86400000,
      currentDate: +new Date(),
      //currentTime: undefined,
      ThisWeek: undefined
    }
  },
  created () {
    this.ThisWeek = this.CurrentWeek(new Date().getTime())
    this.$emit('prev', event)
    this.$emit('next', event)
    //window.setInterval(() => { this.currentTime = +new Date() }, 1000)
  },
  watch: {

  },
  methods: {
    CurrentWeek (day) {
      let secondInDay = this.secondInDay
      let funcDate = new Date(day)
      let numbDay = funcDate.getDay() - 1
      let countDays = 0
      let resultMath = 0
      let StorageKey = 0
      let ThisWeekCalculate = {
        currentTime: day,
        monthTitle: this.FormatMonth(funcDate.getMonth()) + ' ' + funcDate.getFullYear(),
        dayOfMonth: funcDate.getDate(),
        days: {},
        StorageKeyObject: {},
        times: {
          am: [
            {'9_00': '9:00'},
            {'10_00': '10:00'},
            {'11_00': '11:00'},
            {'12_00': '12:00'},
            {'13_00': '13:00'}
          ],
          pm: [
            {'14_00': '14:00'},
            {'15_00': '15:00'},
            {'16_00': '16:00'},
            {'17_00': '17:00'},
            {'18_00': '18:00'}
          ]
        }
      }

      while (countDays <= 4) {
        if (numbDay > countDays) {
          resultMath = (countDays - numbDay) * secondInDay
        } else if (numbDay === countDays) {
          resultMath = 0
        } else if (numbDay < countDays) {
          resultMath = (countDays - numbDay) * secondInDay
        }

        ThisWeekCalculate.days[countDays] = new Date(day + resultMath).getDate() + ' ' + this.FormatDay(new Date(day + resultMath).getDay() - 1)
        ThisWeekCalculate.StorageKeyObject[countDays] = {
          am: [],
          pm: []
        }

        StorageKey = new Date(day + resultMath)
        ThisWeekCalculate.times.am.forEach(function (item, index) {
          let arItemKey = Object.keys(item)[0]
          let arItemVal = Object.values(item)[0]

          ThisWeekCalculate.StorageKeyObject[countDays].am.push({
            key: StorageKey.getFullYear() + '_' + StorageKey.getMonth() + '_' + StorageKey.getDate() + '_' + StorageKey.getDay() + '_' + arItemKey,
            value: arItemVal
          })
        })

        ThisWeekCalculate.times.pm.forEach(function (item, index) {
          let arItemKey = Object.keys(item)[0]
          let arItemVal = Object.values(item)[0]

          ThisWeekCalculate.StorageKeyObject[countDays].pm.push({
            key: StorageKey.getFullYear() + '_' + StorageKey.getMonth() + '_' + StorageKey.getDate() + '_' + StorageKey.getDay() + '_' + arItemKey,
            value: arItemVal
          })
        })

        countDays++
      }

      this.ThisWeek = ThisWeekCalculate
      return ThisWeekCalculate
    },
    FormatMonth (MonthIndex) {
      let MonthFormatName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      return MonthFormatName[MonthIndex]
    },
    FormatDay (DayIndex) {
      let DaysFormatName = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
      return DaysFormatName[DayIndex]
    },
    PrevWeek (TimeStamp) {
      let time = new Date(TimeStamp).setDate(new Date(TimeStamp).getDate() - 7)
      return this.CurrentWeek(time)
    },
    NextWeek (TimeStamp) {
      let time = new Date(TimeStamp).setDate(new Date(TimeStamp).getDate() + 7)
      return this.CurrentWeek(time)
    }
  }
}
</script>

<style src="../static/style.css"></style>
