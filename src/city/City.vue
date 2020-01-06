<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist :cities="cities" :hotcities="hotcities" :letter="letter"></citylist>
    <cityalphabet :cities="cities" @change="handleLetterChange"></cityalphabet>
  </div>
</template>

<script>
import cityheader from './components/Header'
import citysearch from './components/Search'
import citylist from './components/List'
import cityalphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    cityheader,
    citysearch,
    citylist,
    cityalphabet
  },
  data () {
    return {
      cities: {},
      hotcities: [],
      letter: ''
    }
  },
  methods: {
    getCity () {
      axios.get('/api/city.json').then(
        this.handleGetCity
      )
    },
    handleGetCity (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotcities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style scoped lang="stylus">
</style>
