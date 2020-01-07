<template>
  <div>
    <homeheader></homeheader>
    <homeswiper :list="swiperlist"></homeswiper>
    <homeicons :iconlist="iconlist"></homeicons>
    <homerecommend :recommendlist="recommendlist"></homerecommend>
    <homeweekend :weekendlist="weekendlist"></homeweekend>
  </div>
</template>

<script>
import homeheader from './Header'
import homeswiper from './Swiper'
import homeicons from './Icons'
import homerecommend from './Recommend'
import homeweekend from './Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    homerecommend,
    homeweekend
  },
  data () {
    return {
      lastcity: '',
      swiperlist: [],
      iconlist: [],
      recommendlist: [],
      weekendlist: []
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getinfosucc)
    },
    getinfosucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperlist = data.swiperList
        // console.log(this.swiperlist)
        this.iconlist = data.iconList
        this.recommendlist = data.recommendList
        this.weekendlist = data.weekendList
      }
    }
  },
  mounted () {
    this.lastcity = this.city
    this.getInfo()
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    if (this.lastcity !== this.city) {
      this.lastcity = this.city
      this.getInfo()
    }
  }
}
</script>

<style scoped>

</style>
