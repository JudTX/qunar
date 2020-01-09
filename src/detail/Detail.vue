<template>
  <div>
    <detailbanner></detailbanner>
    <detailheader></detailheader>
    <div class="conter"></div>
  </div>
</template>

<script>
import detailbanner from './components/Banner'
import detailheader from './components/Header'
export default {
  name: 'detail',
  components: {
    detailbanner,
    detailheader
  }
}
</script>

<style scoped lang="stylus">
  .conter
    height 15rem
</style>
