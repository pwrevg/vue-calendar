<template>

  <div v-on:click="_reserve" class="content__shudle-time-zone " v-bind:class="{ blocked: isReserved, blockreserve: oldtime }">{{ value }}</div>

</template>
<script>
export default {
  name: 'TableDaysTime',
  props: ['value', 'StorageKey'],
  data: function () {
    return {
      isReserved: false,
      oldtime: false,
      arrDateKey: [],
      currTime: ''
    }
  },
  created () {
    this.oldtime = this._isOldtime()
    this.isReserved = this._isReserve()
  },
  watch: {
    StorageKey () {
      this.isReserved = this._isReserve()
      this.oldtime = this._isOldtime()
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
      this.arrDateKey = this.StorageKey.split('_')
      this.currTime = this.arrDateKey[1] + '.' + (parseInt(this.arrDateKey[2]) + 1) + '.' + this.arrDateKey[3] + ' ' + this.arrDateKey[5] + ':' + this.arrDateKey[6]
      if (+new Date() > +new Date(this.currTime)) {
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
