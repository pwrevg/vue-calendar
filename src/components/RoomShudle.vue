<template>
  <div class="content__shudle-month-room-block">
    <div class="content__shudle-month-item item_type " >
      {{ room.label }}
      <span class="content__shudle-item-notice">{{ room.notice }}</span>
    </div>
    <TableDays
      :type="room.type"
      :roomIndex="index"
    />
  </div>
</template>
<script>
import TableDays from './TableDays'

export default {
  name: 'RoomShudle',
  components: {
    TableDays
  },
  props: ['room', 'index']
}
</script>
