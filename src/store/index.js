import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // 通过控制actions来改变数据，但项目数据逻辑简单可直接通过组件操控Mutations更改数据
  // actions: {
  //   changeCity (ctx, city) {
  //     // console.log(ctx, city)
  //     ctx.commit('changecity', city)
  //   }
  // },
  mutations
})
