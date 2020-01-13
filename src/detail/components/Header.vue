<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont abs-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/" class="header-back">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailheader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log('scroll')
      const top = document.documentElement.scrollTop
      // console.log(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () { // 页面被展示时执行
    window.addEventListener('scroll', this.handleScroll)
    console.log('start')
  },
  deactivated () { // 页面关闭时执行
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    line-height .8rem
    text-align center
    background rgba(0, 0, 0, .8)
    .abs-icon
      color #ffffff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
    z-index 2
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      color #fff
      font-size .4rem
</style>
