<template>

  <div class="content__shudle-table">
      <div
        v-for="(item, index) in daykeys"
        :key="item.index"
        class="content__shudle-time"
      >
          <div class="content__shudle-block-title" >{{days[index]}}</div>
            <div class="content__shudle-row">
                <TableDaysTime
                  v-for="dayKey in item.am"
                  :key="dayKey.index"
                  :dataKey="type+'_'+dayKey.key"
                  :value="dayKey.value"
                />
            </div>
            <div class="content__shudle-row">
                <TableDaysTime
                  v-for="dayKey in item.pm"
                  :key="dayKey.index"
                  :dataKey="type+'_'+dayKey.key"
                  :value="dayKey.value"
                />
            </div>
      </div>
  </div>

</template>
<script>
import TableDaysTime from './TableDaysTime'
export default {
  name: 'TableDays',
  components: {
    TableDaysTime
  },
  props: ['days', 'daykeys', 'type', '_reserve']
}
</script>
