<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeicons></homeicons>
    <homerecommend></homerecommend>
    <homeweekend></homeweekend>
  </div>
</template>

<script>
import homeheader from './Header'
import homeswiper from './Swiper'
import homeicons from './Icons'
import homerecommend from './Recommend'
import homeweekend from './Weekend'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    homerecommend,
    homeweekend
  }
}
</script>

<style scoped>

</style>
