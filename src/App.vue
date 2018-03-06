<template>
    <div class="content">
        <div class="content__title">
          Бронирование переговорок
        </div>
        <div class="content__logo"></div>
        <div class="content__shudle">
            <div class="content__shudle-month">
                <MonthSwitcher />
                <RoomShudle
                  v-for="(room, index) in this.getRooms()"
                  :key="index"
                  :index="index"
                  :room="room"
                />
            </div>
        </div>
    </div>
</template>
<script>
import MonthSwitcher from './components/MonthSwitcher'
import RoomShudle from './components/RoomShudle'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    MonthSwitcher,
    RoomShudle
  },
  methods: {
    ...mapMutations(['changeDate']),
    ...mapGetters(['getRooms'])
  }
}
</script>

<style src="./assets/style.css"></style>
