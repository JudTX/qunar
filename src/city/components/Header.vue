<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityheader'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl';
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      color #fff
      font-size .4rem
</style>
