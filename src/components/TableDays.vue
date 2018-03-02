<template>
  <div class="content__shudle-table">
    <div
        v-for="(dayTitle, dayIndex) in this.getWeekDays"
        :key="dayIndex"
        class="content__shudle-time"
      >
            <div class="content__shudle-block-title" >{{ dayTitle }}</div>
            <div class="content__shudle-row">
                <TableDaysTime
                  v-for="(time, timeIndex) in am"
                  :value="time"
                  :key="timeIndex"
                  :roomIndex="roomIndex"
                  :dayIndex="dayIndex"
                />
            </div>
            <div class="content__shudle-row">
                <TableDaysTime
                  v-for="(time, timeIndex) in pm"
                  :value="time"
                  :key="timeIndex"
                  :roomIndex="roomIndex"
                  :dayIndex="dayIndex"
                />
            </div>
      </div>
  </div>
</template>
<script>
import TableDaysTime from './TableDaysTime'
import { mapGetters } from 'vuex'

export default {
  name: 'TableDays',
  data () {
    return {
      TIME: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '19:00', '20:00'],
      am: undefined,
      pm: undefined
    }
  },
  components: {
    TableDaysTime
  },
  props: ['roomIndex'],
  computed: {
    ...mapGetters(['getWeekDays'])
  },
  created () {
    this.am = this.TIME.splice(0, 5)
    this.pm = this.TIME.splice(0, 5)
  }
}
</script>
