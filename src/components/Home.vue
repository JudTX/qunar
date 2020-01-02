<template>
  <div>
    <homeheader></homeheader>
    <homeswiper></homeswiper>
  </div>
</template>

<script>
import homeheader from './Header'
import homeswiper from './Swiper'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper
  }
}
</script>

<style scoped>

</style>
