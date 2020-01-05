<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist></citylist>
    <cityalphabet></cityalphabet>
  </div>
</template>

<script>
import cityheader from './components/Header'
import citysearch from './components/Search'
import citylist from './components/List'
import cityalphabet from './components/Alphabet'
export default {
  name: 'city',
  components: {
    cityheader,
    citysearch,
    citylist,
    cityalphabet
  }
}
</script>

<style scoped lang="stylus">
</style>
