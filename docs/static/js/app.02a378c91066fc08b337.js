webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),n=s("Dd8w"),i=s.n(n),o=s("NYxO"),r={name:"MonthSwitcher",created:function(){this.calculateWeekDays()},computed:i()({},Object(o.b)(["getMonthTitle","getWeekDays"])),methods:i()({},Object(o.c)(["changeDatePrevWeek","changeDateNextWeek","calculateWeekDays","changeDateWeek"]),{_prev:function(){this.changeDateWeek("-"),this.calculateWeekDays()},_next:function(){this.changeDateWeek(),this.calculateWeekDays()}})},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content__shudle-month-room-block nostyle"},[s("div",{staticClass:"content__shudle-item"},[e._v("Комната")]),e._v(" "),s("div",{staticClass:"content__shudle-month-title"},[e._v(e._s(this.getMonthTitle))]),e._v(" "),s("div",{staticClass:"content__shudle-month-prev"}),e._v(" "),s("div",{staticClass:"content__shudle-month-prev-area",on:{click:e._prev}}),e._v(" "),s("div",{staticClass:"content__shudle-month-next"}),e._v(" "),s("div",{staticClass:"content__shudle-month-next-area",on:{click:e._next}}),e._v(" "),s("div",{staticClass:"content__shudle-month-days"},e._l(this.getWeekDays,function(t){return s("div",{key:t.index,staticClass:"content__shudle-month-day"},[e._v("\n      "+e._s(t)+"\n    ")])}))])},staticRenderFns:[]},l=s("VU/8")(r,c,!1,null,null,null).exports,h=s("mvHQ"),u=s.n(h),d={name:"TableDaysTime",props:{value:String,room:Object,dayIndex:String},data:function(){return{isReserved:!1,dontReserve:!1,nowDate:void 0,currentDay:this.getCurrentDate,timeItem:void 0,Date:void 0,storageObject:{}}},created:function(){localStorage.getItem("vue-calendar")?this.storageObject=JSON.parse(localStorage.getItem("vue-calendar")):(this.storageObject={},localStorage.setItem("vue-calendar",u()(this.storageObject))),this.Date=new Date(this.getCurrentDate),this.currentDay=this.Date.setDate(this.Date.getDate()-this.Date.getDay()+parseInt(this.dayIndex)),this.timestampItem=+new Date(this.Date.getFullYear()+"."+(this.Date.getMonth()+1)+"."+this.Date.getDate()+" "+this.value),this.nowDate=+new Date(this.getCurrentDate),this.dontReserve=this._isOldtime(),this.isReserved=this._isReserve()},computed:i()({},Object(o.b)(["getCurrentDate"])),watch:{getCurrentDate:function(e){this.Date=new Date(this.getCurrentDate),this.currentDay=this.Date.setDate(this.Date.getDate()-this.Date.getDay()+parseInt(this.dayIndex)),this.timestampItem=+new Date(this.Date.getFullYear()+"."+(this.Date.getMonth()+1)+"."+this.Date.getDate()+" "+this.value),this.dontReserve=this._isOldtime(),this.isReserved=this._isReserve()}},methods:{_reserve:function(){this.storageObject=JSON.parse(localStorage.getItem("vue-calendar")),this.dontReserve||(this.isReserved?(delete this.storageObject[this.room.type+"_"+this.timestampItem],localStorage.setItem("vue-calendar",u()(this.storageObject)),this.isReserved=!1):(this.storageObject[this.room.type+"_"+this.timestampItem]=!0,localStorage.setItem("vue-calendar",u()(this.storageObject)),this.isReserved=!0))},_isOldtime:function(){return this.nowDate>this.timestampItem},_isReserve:function(){return this.storageObject=JSON.parse(localStorage.getItem("vue-calendar")),!!this.storageObject[this.room.type+"_"+this.timestampItem]}}},m={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content__shudle-time-zone ",class:{blocked:this.isReserved,blockreserve:this.dontReserve},on:{click:this._reserve}},[this._v(this._s(this.value))])},staticRenderFns:[]},D={name:"TableDays",components:{TableDaysTime:s("VU/8")(d,m,!1,null,null,null).exports},props:{room:Object,index:String},data:function(){return{timeClocks:["9:00","14:00","10:00","15:00","11:00","16:00","12:00","17:00","13:00","18:00"]}},computed:i()({},Object(o.b)(["getWeekDays"]))},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content__shudle-table"},e._l(this.getWeekDays,function(t,a){return s("div",{key:a,staticClass:"content__shudle-time"},[s("div",{staticClass:"content__shudle-block-title"},[e._v(e._s(t))]),e._v(" "),e._l(e.timeClocks,function(t,n){return s("TableDaysTime",{key:n,attrs:{value:t,dayIndex:a,room:e.room}})})],2)}))},staticRenderFns:[]},v={name:"RoomShudle",components:{TableDays:s("VU/8")(D,_,!1,null,null,null).exports},props:{room:Object,index:String}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content__shudle-month-room-block"},[s("div",{staticClass:"content__shudle-month-item item_type "},[e._v("\n    "+e._s(e.room.label)+"\n    "),s("span",{staticClass:"content__shudle-item-notice"},[e._v(e._s(e.room.notice))])]),e._v(" "),s("TableDays",{attrs:{type:e.room.type,room:e.room,index:e.index}})],1)},staticRenderFns:[]},p={name:"App",components:{MonthSwitcher:l,RoomShudle:s("VU/8")(v,g,!1,null,null,null).exports},data:function(){return{Rooms:{1:{label:"Зелёная",notice:"(до 5 персон)",type:"green"},2:{label:"Красная",notice:"(до 15 персон)",type:"red"},3:{label:"Синяя",notice:"(до 25 персон)",type:"blue"},4:{label:"Фиолетовая",notice:"(до 35 персон)",type:"purpure"}}}},methods:i()({},Object(o.c)(["changeDate"]),Object(o.b)(["getRooms"]))},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("div",{staticClass:"content__title"},[this._v("\n      Бронирование переговорок\n    ")]),this._v(" "),t("div",{staticClass:"content__logo"}),this._v(" "),t("div",{staticClass:"content__shudle"},[t("div",{staticClass:"content__shudle-month"},[t("MonthSwitcher"),this._v(" "),this._l(this.Rooms,function(e,s){return t("RoomShudle",{key:s,attrs:{index:s,room:e}})})],2)])])},staticRenderFns:[]};var b=s("VU/8")(p,y,!1,function(e){s("l5qU")},null,null).exports,f=s("/ocq");a.a.use(f.a);var k=new f.a({routes:[{path:"/"}]});a.a.use(o.a);var C=new o.a.Store({state:{monthFormatName:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],daysFormatName:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],tsDate:+new Date,thisWeekDays:{},thisWeekDaysCount:5},mutations:{changeDate:function(e){setInterval(function(){e.tsDate=+new Date},5e3)},changeDateWeek:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.tsDate=+new Date(e.tsDate).setDate(new Date(e.tsDate).getDate()+parseInt(t+"7"))},calculateWeekDays:function(e){for(var t=1,s=0;t<=e.thisWeekDaysCount;)s=new Date(e.tsDate).setDate(new Date(e.tsDate).getDate()-new Date(e.tsDate).getDay()+t),e.thisWeekDays[t]=new Date(s).getDate()+" "+e.daysFormatName[new Date(s).getDay()-1],t++}},getters:{getCurrentDate:function(e){return e.tsDate},getMonthTitle:function(e){return e.monthTitle=e.monthFormatName[new Date(e.tsDate).getMonth()]+" "+new Date(e.tsDate).getFullYear(),e.monthFormatName[new Date(e.tsDate).getMonth()]+" "+new Date(e.tsDate).getFullYear()},getWeekDays:function(e){return e.thisWeekDays}}});a.a.config.productionTip=!1,new a.a({el:"#app",store:C,router:k,components:{App:b},template:"<App/>"})},l5qU:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.02a378c91066fc08b337.js.map