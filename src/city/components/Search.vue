<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list"
        :key="item.id"
        class="item border-bottom"
        @click="handlechangeCity(item.name)"
        >
          {{item.name}}
        </li>
        <li class="item border-bottom" v-show="noData">没有找到相关内容</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
export default {
  name: 'citysearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  methods: {
    handlechangeCity (city) {
      // console.log(city)
      // 通过控制actions来改变数据，但项目数据逻辑简单可直接通过组件操控Mutations更改数据
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changecity', city)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const resutl = []
        for (let i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              resutl.push(val)
            }
          })
        }
        this.list = resutl
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Scroll(this.$refs.search)
  }
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
  .search-content
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    bottom 0
    right 0
    z-index 1
    background #eeeeee
    .item
      line-height .62rem
      padding-left .2rem
      background #ffffff
      color #666
</style>
