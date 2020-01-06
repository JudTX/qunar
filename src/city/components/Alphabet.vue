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
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
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
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流，提高性能
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          // console.log(touchY)
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
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
