<template>
    <div class="content">

    <div class="content__title">
      Бронирование переговорок
    </div>

    <div class="content__logo">
    </div>

    <div class="content__shudle">

      <div class="content__shudle-month">

        <monthComp :date="currWeek" :_prevWeek="_prevWeek" :_nextWeek="_nextWeek"></monthComp>

        <roomComp v-for="cRoom in rooms" :key="cRoom.index"  :type="cRoom" :date="currWeek" ></roomComp>

      </div>
    </div>
    </div>
</template>

<script>
import monthComp from "./components/monthComp";
import roomComp from "./components/roomComp";

export default {
  components: {
    monthComp,
    roomComp,
  },
  name: 'App',
  data: function() {
    return {
      rooms: {
        1: {label: "Зелёная", notice: "(до 5 персон)", type: "green"},
        2: {label: "Красная", notice: "(до 15 персон)", type: "red"},
        3: {label: "Синяя", notice: "(до 25 персон)", type: "blue"},
        4: {label: "Фиолетовая", notice: "(до 35 персон)", type: "purpure"}
      },
      secInDay: 86400000,
      currentDate: new Date(),
      currMonth: this.formatMonth(new Date().getMonth()),
      currDayInt: new Date().getDay(),
      currWeek: undefined,
    }
  },
  created () {
    this.currWeek = this.returnCurrentWeek(new Date().getTime());
  },
  methods: {
    returnCurrentWeek(day) {

      let secInDay = this.secInDay;
      let funcDate = new Date(day);
      let numbDay = funcDate.getDay()-1;
      let countDays = 0;
      let resultMath = 0;
      let arKey = 0;
      let weekObject = {
        currentTime: day,
        monthTitle: this.formatMonth(funcDate.getMonth())+' '+funcDate.getFullYear(),
        days: {},
        daykeys: {},
        times: {
          am: [
            { '9_00': '9:00'},
            { '10_00': '10:00'},
            { '11_00': '11:00'},
            { '12_00': '12:00'},
            { '13_00': '13:00'}
          ],
          pm: [
            { '14_00': '14:00'},
            { '15_00': '15:00'},
            { '16_00': '16:00'},
            { '17_00': '17:00'},
            { '18_00': '18:00'}
          ]
        }
      };

      while(countDays <= 4){

        if(numbDay > countDays){
          resultMath = (countDays - numbDay) * secInDay;
        }else if(numbDay == countDays){
          resultMath = 0;
        }else if(numbDay < countDays){
          resultMath = (countDays - numbDay) * secInDay;
        }

        weekObject.days[countDays] = new Date(day + resultMath).getDate() +' '+ this.formatDay(new Date(day + resultMath).getDay()-1);

        weekObject.daykeys[countDays] = {
          am: [],
          pm: [],
        };

        arKey = new Date(day + resultMath);

        weekObject.times.am.forEach(function(item, index){
          let arItemKey = Object.keys(item)[0];
          let arItemVal = Object.values(item)[0];

          weekObject.daykeys[countDays].am.push({
            key: arKey.getFullYear()+'_'+arKey.getMonth()+'_'+arKey.getDate()+'_'+arKey.getDay()+'_'+arItemKey,
            value: arItemVal
          });
        });

        weekObject.times.pm.forEach(function(item, index){
          let arItemKey = Object.keys(item)[0];
          let arItemVal = Object.values(item)[0];

          weekObject.daykeys[countDays].pm.push({
            key: arKey.getFullYear()+'_'+arKey.getMonth()+'_'+arKey.getDate()+'_'+arKey.getDay()+'_'+arItemKey,
            value: arItemVal
          });
        });

        countDays++;
      }

      this.currWeek = weekObject;
      return weekObject;
    },
    formatMonth(month){
      let arr = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
      return arr[month];
    },
    formatDay(day){
      let arrDays = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
      return arrDays[day];
    },
    _prevWeek(day) {
      let time = day - (this.secInDay * 7);
      return this.returnCurrentWeek(time);
    },
    _nextWeek(day) {
      let time = day + (this.secInDay * 7);
      return this.returnCurrentWeek(time);
    }

  }
}
</script>

<style src="../static/style.css"></style>
