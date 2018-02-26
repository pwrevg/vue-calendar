<template>

  <div class="content__shudle-month-room-block">
    <div class="content__shudle-month-item item_type " >
      {{ type.label }}
      <span class="content__shudle-item-notice">{{ type.notice }}</span>
    </div>
    <TableDays
      :type="type.type"
      :daykeys="date.daykeys"
      :days="date.days"
    ></TableDays>
  </div>

</template>
<script>
import TableDays from './TableDays'
export default {
  name: 'RoomShudle',
  components: {
    TableDays
  },
  props: ['date', 'type', '_reserve']
}
</script>
