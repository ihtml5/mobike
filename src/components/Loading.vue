<template>
  <div class="mobike-mask-container" :style="loadingConStyle" @click="hideMask">
    <div class="mobike-mask" :style="loadingStyle">
        <span class="mobike-loading-text">加载中</span>
        <i class="am-icon-spinner am-icon-spin mask-loading"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['lcntStyle', 'lconStyle'],
  data: function () {
    return {
      loadingStyle: this.lcntStyle,
      loadingConStyle: this.lconStyle
    }
  },
  beforeUpdate () {
    this.loadingConStyle = this.lconStyle
  },
  methods: {
    hideMask: function () {
      this.loadingConStyle = Object.assign(this.loadingConStyle, {display: 'none'})
      console.log('stopInterval')
      this.$emit('stopInterval')
      console.log('stopIntervalEnd')
    }
  }
}
</script>
<style>
  .mobike-mask-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 4.8rem;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .mobike-mask {
    position: absolute;
    text-align: center;
    vertical-align: middle;
    margin-left: 50%;
  }
  .mobike-loading-text {
    margin-right: 0.5rem;
    color: #fff;
  }
  i.mask-loading {
    font-size: 2.5rem;
    color: #f05b48;
  }
</style>
