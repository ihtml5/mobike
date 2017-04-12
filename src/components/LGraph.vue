<template>
  <div class="mobike-lgraph" :style="lgraphStyle">
      <a class="am-icon-btn am-icon-user mobike-lgraph-user"></a>
      <button type="button" class="am-btn am-btn-primary  mobike-loginwill-btn" @click="goLogin">登录 / 注册</button>
  </div>
  </div>
</template>
<script>
import { winInfo } from '../utils'
export default {
  name: 'lgraph',
  data: function () {
    return {
      lgraphStyle: {
        height: '350px'
      }
    }
  },
  methods: {
    goLogin: function () {
      this.$router.push({
        path: '/login'
      })
    }
  },
  mounted: function () {
    this.lgraphStyle = {
      height: `${parseInt(winInfo().height * 0.35, 10)}px`
    }
  }
}
</script>
<style>
    .mobike-lgraph {
        margin-top: 4.95rem;
        position: relative;
        width: 100%;
        background-image: url('http://mobike.com/wp-content/themes/mobike/img/mobike-home-bg.jpg');
        background-size: 100% 100%;
    }
    .mobike-lgraph-user {
        position: absolute;
        top: 2.5rem;
        margin-left: 50%;
        left: -3rem;
        width: 6.5rem;
        height: 6.5rem;
        line-height: 7rem;
        text-align: center;
    }
    .mobike .am-icon-btn {
      background-color: #fff;
      color: #999;
    }
    .mobike-loginwill-btn {
        position: absolute;
        bottom: 2rem;
        margin-left: 50%;
        left: -5rem;
        width: 10rem;
        height: 3.5rem;
        text-align: center;
        vertical-align: middle;
        line-height: 1.5rem;
        font-weight: 600;
        color: #fff;
        font-size: 1.3rem;
        background-color: #f05b48;
        border-radius: 5rem;
        outline: none;
        border: none;
    }
</style>

