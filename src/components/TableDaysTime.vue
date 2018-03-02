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
      currentDay: this.getCurrentDate,
      timeNow: undefined,
      StorageKey: undefined
    }
  },
  computed: {
    ...mapGetters(['getCurrentDate', 'getRooms']),
    refresh () {
      this.currentDay = new Date(this.getCurrentDate).setDate(new Date(this.getCurrentDate).getDate() - new Date(this.getCurrentDate).getDay() + parseInt(this.dayIndex))
      this.timeNow = new Date(new Date(this.currentDay).getFullYear() + '.' + (new Date(this.currentDay).getMonth() + 1) + '.' + new Date(this.currentDay).getDate() + ' ' + this.value)
      this.StorageKey = this.getRooms[this.roomIndex].type + '_' + new Date(this.currentDay).getFullYear() + '_' + new Date(this.currentDay).getMonth() + '_' + new Date(this.currentDay).getDate() + '_' + new Date(this.currentDay).getDay() + '_' + this.value.replace(':', '_')
      console.log('refresh')
    }

  },
  created () {
    this.currentDay = new Date(this.getCurrentDate).setDate(new Date(this.getCurrentDate).getDate() - new Date(this.getCurrentDate).getDay() + parseInt(this.dayIndex))
    this.timeNow = new Date(new Date(this.currentDay).getFullYear() + '.' + (new Date(this.currentDay).getMonth() + 1) + '.' + new Date(this.currentDay).getDate() + ' ' + this.value)
    this.StorageKey = this.getRooms[this.roomIndex].type + '_' + new Date(this.currentDay).getFullYear() + '_' + new Date(this.currentDay).getMonth() + '_' + new Date(this.currentDay).getDate() + '_' + new Date(this.currentDay).getDay() + '_' + this.value.replace(':', '_')
    this.oldtime = this._isOldtime()
    this.isReserved = this._isReserve()

    //setInterval(() => { this.oldtime = this._isOldtime() }, 60000)
  },
  watch: {
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
      if (this.getCurrentDate > +new Date(this.timeNow)) {
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
