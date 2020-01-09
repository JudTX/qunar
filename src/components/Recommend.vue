<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
      tag="li"
      class="item border-bottom"
      v-for="item in recommendlist"
      :key="item.id"
      :to="'/detail/' + item.id"
      >
          <img class="item-img" :src="item.imgUrl" alt="景点图片">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homerecommend',
  props: {
    recommendlist: Array
  },
  data () {
    return {
      // recommendList: [{
      //   id: '001',
      //   title: '故宫',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
      //   desc: '东方宫殿建筑代表，世界宫殿建筑典范'
      // },
      // {
      //   id: '002',
      //   title: '八达岭长城',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
      //   desc: '不到长城非好汉'
      // },
      // {
      //   id: '003',
      //   title: '北京欢乐谷',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/29/29d9b9078000774fa3.img.jpg_200x200_3621a35a.jpg',
      //   desc: '亚洲唯一飞行式过山车等你来挑战'
      // },
      // {
      //   id: '004',
      //   title: '古北水镇',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
      //   desc: '14611条评论'
      // },
      // {
      //   id: '005',
      //   title: '北京海洋馆',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_200x200_ce3d2658.jpg',
      //   desc: '9202条评论'
      // },
      // {
      //   id: '006',
      //   title: '北京杜莎夫人蜡像馆',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1910/6a/6a22d154133b1422a3.water.jpg_200x200_eebf77fd.jpg',
      //   desc: '听说能遇到杰伦哟'
      // },
      // {
      //   id: '007',
      //   title: '北京野生动物园',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
      //   desc: '敢与森林之王近距离接触吗？'
      // },
      // {
      //   id: '008',
      //   title: '北京乐多港万豪酒店汤乐宫温泉',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/3d/3dcbea373cb752e4a3.img.jpg_200x200_be1cab05.jpg',
      //   desc: '132条评论'
      // },
      // {
      //   id: '009',
      //   title: '南山滑雪场',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_200x200_69e4a80d.jpg',
      //   desc: '北京专业级滑雪圣地'
      // },
      // {
      //   id: '010',
      //   title: '太平洋海底世界',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg',
      //   desc: '漫步海底，欣赏五彩缤纷的海底生物'
      // }]
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #f5f5f5
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        margin-top .08rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
