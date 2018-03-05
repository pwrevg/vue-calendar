<template>
  <div
    class="content__shudle-time-zone "
    v-on:click="_reserve"
    v-bind:class="{ blocked: isReserved, blockreserve: oldtime }"
  >{{ value }}</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TableDaysTime',
  props: ['value', 'roomIndex', 'dayIndex'],
  data: function () {
    return {
      isReserved: false,
      oldtime: false,
      nowDate: undefined,
      startWeekDay: this.getCurrentDate,
      timeNow: undefined,
      StorageKey: undefined
    }
  },
  computed: {
    ...mapGetters(['getCurrentDate', 'getRooms'])
  },
  created () {
    this.startWeekDay = new Date(this.getCurrentDate).setDate(new Date(this.getCurrentDate).getDate() - new Date(this.getCurrentDate).getDay() + parseInt(this.dayIndex))
    this.timeNow = new Date(new Date(this.startWeekDay).getFullYear() + '.' + (new Date(this.startWeekDay).getMonth() + 1) + '.' + new Date(this.startWeekDay).getDate() + ' ' + this.value)
    this.StorageKey = this.getRooms[this.roomIndex].type + '_' + new Date(this.startWeekDay).getFullYear() + '_' + new Date(this.startWeekDay).getMonth() + '_' + new Date(this.startWeekDay).getDate() + '_' + new Date(this.startWeekDay).getDay() + '_' + this.value.replace(':', '_')
    this.nowDate = new Date(this.getCurrentDate)
    this.oldtime = this._isOldtime()
    this.isReserved = this._isReserve()
  },
  watch: {
    getCurrentDate: function (event) {
      this.startWeekDay = new Date(this.getCurrentDate).setDate(new Date(this.getCurrentDate).getDate() - new Date(this.getCurrentDate).getDay() + parseInt(this.dayIndex))
      this.timeNow = new Date(new Date(this.startWeekDay).getFullYear() + '.' + (new Date(this.startWeekDay).getMonth() + 1) + '.' + new Date(this.startWeekDay).getDate() + ' ' + this.value)
      this.StorageKey = this.getRooms[this.roomIndex].type + '_' + new Date(this.startWeekDay).getFullYear() + '_' + new Date(this.startWeekDay).getMonth() + '_' + new Date(this.startWeekDay).getDate() + '_' + new Date(this.startWeekDay).getDay() + '_' + this.value.replace(':', '_')
      this.oldtime = this._isOldtime()
      this.isReserved = this._isReserve()
    }
  },
  methods: {
    _reserve () {
      if (!this.oldtime) {
        if (this.isReserved) {
          localStorage.removeItem(this.StorageKey, 1)
          this.isReserved = false
        } else {
          localStorage.setItem(this.StorageKey, 1)
          this.isReserved = true
        }
      }
    },
    _isOldtime () {
      if (+new Date(this.nowDate) > +new Date(this.timeNow)) {
        return true
      } else {
        return false
      }
    },
    _isReserve () {
      if (localStorage.getItem(this.StorageKey)) {
        return true
      } else {
        return false
      }
    }

  }
}
</script>
