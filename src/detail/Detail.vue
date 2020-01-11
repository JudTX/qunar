<template>
  <div>
    <detailbanner></detailbanner>
    <detailheader></detailheader>
    <div class="conter">
      <detaillist :list="list"></detaillist>
    </div>
  </div>
</template>

<script>
import detailbanner from './components/Banner'
import detailheader from './components/Header'
import detaillist from './components/List'
export default {
  name: 'detail',
  components: {
    detailbanner,
    detailheader,
    detaillist
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '【当日全天票+送手机电子讲解】身份证/护照/港澳台快速入园'
          }]
        }, {
          title: '成人五馆联票'
        }]
      }, {
        title: '儿童票'
      }, {
        title: '学生票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .conter
    height 15rem
</style>
