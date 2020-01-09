<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" class="swiper">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commongallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_r_800x800_d3eb324d.jpg']
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    z-index 99
    position fixed
    display flex
    flex-direction column
    justify-content center
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      height 0
      width 100%
      background #fff
      padding-bottom 65%
      .gallary-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem
</style>
