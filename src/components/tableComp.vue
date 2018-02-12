<template>

  <div class="content__shudle-table">

    <div v-for="(item, index) in daykeys" :key="item.index" class="content__shudle-time">

      <div class="content__shudle-block-title" >{{days[index]}}</div>

      <div class="content__shudle-row">

        <timeComp v-for="dayKey in item.am" :key="dayKey.index" :dataKey="type+'_'+dayKey.key" :value="dayKey.value" ></timeComp>

      </div>

      <div class="content__shudle-row">

        <timeComp v-for="dayKey in item.pm" :key="dayKey.index" :dataKey="type+'_'+dayKey.key" :value="dayKey.value" ></timeComp>

      </div>

    </div>

  </div>

</template>

<script>
import timeComp from "./timeComp";

export default {
  name: 'tableComp',
  components: {
    timeComp,
  },
  props: ['days','daykeys','type','_reserve'],
}
</script>
