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
              :date="currWeek"
              v-on:prev="PrevWeek"
              v-on:next="NextWeek"
            />
            <RoomShudle
              v-for="cRoom in rooms"
              :key="cRoom.index"
              :type="cRoom"
              :date="currWeek"
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
      rooms: {
        1: {label: 'Зелёная', notice: '(до 5 персон)', type: 'green'},
        2: {label: 'Красная', notice: '(до 15 персон)', type: 'red'},
        3: {label: 'Синяя', notice: '(до 25 персон)', type: 'blue'},
        4: {label: 'Фиолетовая', notice: '(до 35 персон)', type: 'purpure'}
      },
      secondInDay: 86400000,
      currentDate: new Date(),
      currMonth: this.FormatMonth(new Date().getMonth()),
      currDayInt: new Date().getDay(),
      currWeek: undefined
    }
  },
  created () {
    this.currWeek = this.CurrentWeek(new Date().getTime())
    this.$emit('prev', event)
    this.$emit('next', event)
  },
  methods: {
    CurrentWeek (day) {
      let secondInDay = this.secondInDay
      let funcDate = new Date(day)
      let numbDay = funcDate.getDay() - 1
      let countDays = 0
      let resultMath = 0
      let arKey = 0
      let weekObject = {
        currentTime: day,
        monthTitle: this.FormatMonth(funcDate.getMonth()) + ' ' + funcDate.getFullYear(),
        days: {},
        daykeys: {},
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

        weekObject.days[countDays] = new Date(day + resultMath).getDate() + ' ' + this.FormatDay(new Date(day + resultMath).getDay() - 1)

        weekObject.daykeys[countDays] = {
          am: [],
          pm: []
        }

        arKey = new Date(day + resultMath)

        weekObject.times.am.forEach(function (item, index) {
          let arItemKey = Object.keys(item)[0]
          let arItemVal = Object.values(item)[0]

          weekObject.daykeys[countDays].am.push({
            key: arKey.getFullYear() + '_' + arKey.getMonth() + '_' + arKey.getDate() + '_' + arKey.getDay() + '_' + arItemKey,
            value: arItemVal
          })
        })

        weekObject.times.pm.forEach(function (item, index) {
          let arItemKey = Object.keys(item)[0]
          let arItemVal = Object.values(item)[0]

          weekObject.daykeys[countDays].pm.push({
            key: arKey.getFullYear() + '_' + arKey.getMonth() + '_' + arKey.getDate() + '_' + arKey.getDay() + '_' + arItemKey,
            value: arItemVal
          })
        })

        countDays++
      }

      this.currWeek = weekObject
      return weekObject
    },
    FormatMonth (month) {
      let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      return arr[month]
    },
    FormatDay (day) {
      let arrDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
      return arrDays[day]
    },
    PrevWeek (day) {
      let time = day - (this.secondInDay * 7)
      return this.CurrentWeek(time)
    },
    NextWeek (day) {
      let time = day + (this.secondInDay * 7)
      return this.CurrentWeek(time)
    }
  }
}
</script>

<style src="../static/style.css"></style>
