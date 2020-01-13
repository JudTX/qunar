<template>
  <div>
    <detailbanner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    ></detailbanner>
    <detailheader></detailheader>
    <detaillist :list="list"></detaillist>
  </div>
</template>

<script>
import detailbanner from './components/Banner'
import detailheader from './components/Header'
import detaillist from './components/List'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    detailbanner,
    detailheader,
    detaillist
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      id: 0
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('http://rap2api.taobao.org/app/mock/242514/detail/data', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    if (this.id !== this.$route.params.id) {
      this.id = this.$route.params.id
      // console.log(this.id)
      this.getDetailInfo()
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
