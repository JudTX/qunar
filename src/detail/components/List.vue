<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index" @click="itemclick(index)">
      <div class="item-title border-bottom">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children" v-show="show == index">
        <detaillist :list="item.children"></detaillist>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detaillist',
  data () {
    return {
      show: -1
    }
  },
  props: {
    list: Array
  },
  methods: {
    itemclick (index) {
      this.show = index
      console.log(index)
    }
  }
}
</script>

<style scoped lang="stylus">
  .item-icon
    position relative
    left .06rem
    top .06rem
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem
</style>
