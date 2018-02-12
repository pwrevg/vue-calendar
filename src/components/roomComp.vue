<template>

  <div class="content__shudle-month-room-block">

    <div class="content__shudle-month-item item_type " >
      {{ type.label }}
      <span class="content__shudle-item-notice">{{ type.notice }}</span>
    </div>

    <tableComp :type="type.type" :daykeys="date.daykeys" :days="date.days" ></tableComp>

  </div>

</template>

<script>
import tableComp from "./tableComp";

export default {
  name: 'roomComp',
  components: {
    tableComp,
  },
  props: ['date','type','_reserve'],
}
</script>
