<template>
  <div class="content__shudle-month-room-block nostyle">
    <div class="content__shudle-item" >Комната</div>
    <div class="content__shudle-month-title">{{ date.monthTitle }}</div>
    <div class="content__shudle-month-prev"></div>
    <div @click="$emit('prev', date.currentTime)" class="content__shudle-month-prev-area"></div>
    <div class="content__shudle-month-next"></div>
    <div @click="$emit('next', date.currentTime)" class="content__shudle-month-next-area"></div>
    <div class="content__shudle-month-days">
      <div v-for="item in date.days" :key="item.index" class="content__shudle-month-day">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MonthSwitcher',
  props: ['date'],
  methods: {
    prev: function () {
      this.$emit('prev', this.date.currentTime)
    },
    next: function () {
      this.$emit('next', this.date.currentTime)
    }
  }
}
</script>
