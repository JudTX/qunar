<template>
  <div class="icons">
    <swiper class="swiper-icon" :options="swiperOptionicon" v-if="showSwiper">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.name}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'homeicons',
  props: {
    iconlist: Array
  },
  data () {
    return {
      swiperOptionicon: {
        pagination: '.swiper-pagination'
      }
      // iconlist: [{
      //   id: '1',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //   name: '景点门票'
      // },
      // {
      //   id: '2',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
      //   name: '故宫'
      // },
      // {
      //   id: '3',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
      //   name: '陶然亭冰雪'
      // },
      // {
      //   id: '4',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
      //   name: '静之湖滑雪'
      // },
      // {
      //   id: '5',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //   name: '一日游'
      // },
      // {
      //   id: '6',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
      //   name: '古北水镇'
      // },
      // {
      //   id: '7',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
      //   name: '北京滑雪'
      // },
      // {
      //   id: '8',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
      //   name: '颐和园'
      // },
      // {
      //   id: '9',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
      //   name: '泡温泉'
      // },
      // {
      //   id: '10',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      //   name: '北京必游'
      // }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.iconlist.length
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 55%
  .icon
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    overflow hidden
    .icon-img
      position absolute
      top 0
      left 0
      bottom .44rem
      right 0
      box-sizing border-box
      padding: .1rem
      .icon-img-content
        height 100%
        display block
        margin 0 auto
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
