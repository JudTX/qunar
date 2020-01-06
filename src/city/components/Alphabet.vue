<template>
  <ul class="list">
    <li class="item"
    v-for="item of letters"
    :key="item" @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    :ref="item"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'cityalphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      // console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = !this.touchStatus
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        // console.log(startY)
        const touchY = e.touches[0].clientY - 79
        // console.log(touchY)
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = !this.touchStatus
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .list
    position absolute
    display flex
    top 1.58rem
    bottom 0
    right 0
    width .4rem
    flex-direction column
    justify-content center
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
