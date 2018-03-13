<template>
  <div
    class="content__shudle-time-zone "
    v-on:click="_reserve"
    v-bind:class="{ blocked: isReserved, blockreserve: dontReserve }"
  >{{ value }}</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TableDaysTime',
  props: {
    value: String,
    room: Object,
    dayIndex: String
  },
  data: function () {
    return {
      isReserved: false,
      dontReserve: false,
      nowDate: undefined,
      currentDay: this.getCurrentDate,
      timeItem: undefined,
      Date: undefined,
      storageObject: {}
    }
  },
  created () {
    this.Date = new Date(this.getCurrentDate)
    this.currentDay = this.Date.setDate(this.Date.getDate() - this.Date.getDay() + parseInt(this.dayIndex))
    this.timestampItem = +new Date(this.Date.getFullYear() + '.' + (this.Date.getMonth() + 1) + '.' + this.Date.getDate() + ' ' + this.value)
    this.nowDate = +new Date(this.getCurrentDate)
    this.dontReserve = this._isOldtime()
    this.isReserved = this._isReserve()
  },
  computed: {
    ...mapGetters(['getCurrentDate'])
  },
  watch: {
    getCurrentDate: function (event) {
      this.Date = new Date(this.getCurrentDate)
      this.currentDay = this.Date.setDate(this.Date.getDate() - this.Date.getDay() + parseInt(this.dayIndex))
      this.timestampItem = +new Date(this.Date.getFullYear() + '.' + (this.Date.getMonth() + 1) + '.' + this.Date.getDate() + ' ' + this.value)
      this.dontReserve = this._isOldtime()
      this.isReserved = this._isReserve()
    }
  },
  methods: {
    _reserve () {
      if (localStorage.getItem('vue-calendar')) {
        this.storageObject = JSON.parse(localStorage.getItem('vue-calendar'))
      } else {
        this.storageObject = {}
      }

      if (!this.dontReserve) {
        if (this.isReserved) {
          delete this.storageObject[this.room.type + '_' + this.timestampItem]
          localStorage.setItem('vue-calendar', JSON.stringify(this.storageObject))
          this.isReserved = false
        } else {
          this.storageObject[this.room.type + '_' + this.timestampItem] = true
          localStorage.setItem('vue-calendar', JSON.stringify(this.storageObject))
          this.isReserved = true
        }
      }
    },
    _isOldtime () {
      if (this.nowDate > this.timestampItem) {
        return true
      } else {
        return false
      }
    },
    _isReserve () {
      this.storageObject = JSON.parse(localStorage.getItem('vue-calendar'))
      if (this.storageObject[this.room.type + '_' + this.timestampItem]) {
        return true
      } else {
        return false
      }
    }

  }
}
</script>
