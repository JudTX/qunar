<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
    <homeicons></homeicons>
  </div>
</template>

<script>
import homeheader from './Header'
import homeswiper from './Swiper'
import homeicons from './Icons'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper,
    homeicons
  }
}
</script>

<style scoped>

</style>
