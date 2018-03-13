<template>
  <div class="content__shudle-table">
    <div
        v-for="(dayTitle, dayIndex) in this.getWeekDays"
        :key="dayIndex"
        class="content__shudle-time">
        <div class="content__shudle-block-title" >{{ dayTitle }}</div>
        <TableDaysTime
          v-for="(time, timeIndex) in timeClocks"
          :value="time"
          :key="timeIndex"
          :dayIndex="dayIndex"
          :room="room"
        />
      </div>
  </div>
</template>
<script>
import TableDaysTime from './TableDaysTime'
import { mapGetters } from 'vuex'

export default {
  name: 'TableDays',
  components: {
    TableDaysTime
  },
  props: {
    room: Object,
    index: String
  },
  data () {
    return {
      timeClocks: ['9:00', '14:00', '10:00', '15:00', '11:00', '16:00', '12:00', '17:00', '13:00', '18:00']
    }
  },
  computed: {
    ...mapGetters(['getWeekDays'])
  }
}
</script>
