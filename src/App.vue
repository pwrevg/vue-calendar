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
                  :date="ThisWeek"
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
  data: function () {
    return {
      Rooms: {
        1: {label: 'Зелёная', notice: '(до 5 персон)', type: 'green'},
        2: {label: 'Красная', notice: '(до 15 персон)', type: 'red'},
        3: {label: 'Синяя', notice: '(до 25 персон)', type: 'blue'},
        4: {label: 'Фиолетовая', notice: '(до 35 персон)', type: 'purpure'}
      },
      secondInDay: 86400000,
      currentDate: +new Date(),
      ThisWeek: undefined
    }
  },
  created () {
    this.ThisWeek = this.CurrentWeek(new Date().getTime())
  },
  methods: {
    ...mapMutations(['changeDate']),
    ...mapGetters(['getRooms'])
  }
}
</script>

<style src="../static/style.css"></style>
