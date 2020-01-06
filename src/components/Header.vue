<template>
  <div class="header">
    <div class="left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="search"><span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题</div>
    <router-link to='/city'>
      <div class="right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeheader',
  props: {
    city: String
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl';
  .header
    height: $headerHeight
    line-height: $headerHeight
    display: flex
    background: $bgColor
    color: #fff
    .left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .search
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #ffffff
      border-radius: .1rem
      color: #ccc
    .right
      width: 1.24rem
      float: right
      text-align: center
      color white
      .arrow-icon
        font-size: .24rem
        margin-left: .1rem
</style>
