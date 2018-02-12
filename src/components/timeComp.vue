<template>

  <div v-on:click="_reserve" class="content__shudle-time-zone " v-bind:class="{ blocked: isReserved, blockreserve: oldtime }">{{ value }}</div>

</template>

<script>
export default {
  name: 'timeComp',
  props: ['value','dataKey'],
  data: function () {
    return {
      isReserved: false,
      oldtime: false,
      arrDateKey: [],
      currTime: '',
    }
  },
  created () {

    this.oldtime = this._isOldtime();
    this.isReserved = this._isReserve();

  },
  watch: {
    dataKey () {
      this.isReserved = this._isReserve();
      this.oldtime = this._isOldtime();
    },
  },
  methods: {
    _reserve(){


      if(!this.oldtime){

        if (this.isReserved) {

          localStorage.removeItem(this.dataKey, 1);
          this.isReserved = false;

        } else {

          localStorage.setItem(this.dataKey, 1);
          this.isReserved = true;

        }

      }
    },
    _isOldtime(){

      this.arrDateKey = this.dataKey.split('_');
      this.currTime = this.arrDateKey[1]+'.'+(parseInt(this.arrDateKey[2]) + 1) +'.'+this.arrDateKey[3]+' '+this.arrDateKey[5]+':'+this.arrDateKey[6];


      if (+new Date() > +new Date(this.currTime)) {
        return true;
      } else {
        return false;
      }

    },
    _isReserve(){

        if (localStorage.getItem(this.dataKey)) {
            return true;
        } else {
            return false;
        }

    },

  }
}
</script>
