<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          12
        </div>
      </div>
    </div>
    <commongallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></commongallary>
  </div>
</template>

<script>
import commongallary from 'common/gallary/Gallary'
export default {
  name: 'detailbanner',
  components: {
    commongallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_r_800x800_d3eb324d.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      display flex
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        margin-top .14rem
        padding 0 .4rem
        line-height .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        text-align center
        font-size .26rem
        .banner-icon
          font-size .26rem
</style>
