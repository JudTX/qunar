<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
  </div>
</template>

<script>
import cityheader from './components/Header'
import citysearch from './components/Search'
export default {
  name: 'city',
  components: {
    cityheader,
    citysearch
  }
}
</script>

<style scoped lang="stylus">
</style>
