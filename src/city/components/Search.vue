<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input" />
  </div>
</template>

<script>
export default {
  name: 'citysearch'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    touch-action none
    .search-input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      padding 0 .1rem
      box-sizing border-box
</style>
