<template>

  <div class="content__shudle-table">
      <div
        v-for="(times, index) in StorageKeyObject"
        :key="times.index"
        class="content__shudle-time"
      >
          <div class="content__shudle-block-title" >{{days[index]}}</div>
            <div class="content__shudle-row">
                <TableDaysTime
                  v-for="time in times.am"
                  :key="time.index"
                  :StorageKey="type+'_'+time.key"
                  :value="time.value"
                />
            </div>
            <div class="content__shudle-row">
                <TableDaysTime
                  v-for="time in times.pm"
                  :key="time.index"
                  :StorageKey="type+'_'+time.key"
                  :value="time.value"
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
  props: ['days', 'StorageKeyObject', 'type', '_reserve']
}
</script>
