<template>
  <div class="content__shudle-month-room-block nostyle">
    <div class="content__shudle-item" >Комната</div>
    <div class="content__shudle-month-title">{{ this.getMonthTitle }}</div>
    <div class="content__shudle-month-prev"></div>
    <div @click="_prev" class="content__shudle-month-prev-area"></div>
    <div class="content__shudle-month-next"></div>
    <div @click="_next" class="content__shudle-month-next-area"></div>
    <div class="content__shudle-month-days">
      <div v-for="dayTitle in this.getWeekDays" :key="dayTitle.index" class="content__shudle-month-day">
        {{ dayTitle }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'MonthSwitcher',
  created () {
    this.calculateWeekDays()
  },
  computed: {
    ...mapGetters(['getMonthTitle', 'getWeekDays']),
  },
  methods: {
    ...mapMutations(['changeDatePrevWeek', 'changeDateNextWeek', 'calculateWeekDays']),
    _prev () {
      this.changeDatePrevWeek()
      this.calculateWeekDays()
    },
    _next () {
      this.changeDateNextWeek()
      this.calculateWeekDays()
    }
  }
}
</script>
