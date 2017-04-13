<template>
  <div class="mobike-mobile-user">
    <mo-header :icons="headerIcons" :logo="logo" :fixed="fixed" :headerTitle="headerTitle"></mo-header>
    <mo-list :list="propList"></mo-list>
    <div class="mobike-form-group">
      <button class="mobike-btn mobike-sureBtn" @click="loginout" type="button">退出登录</button>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import List from '../components/List'
const propList = [
  {
    to: '/address',
    text: '常用地址'
  },
  {
    to: '/checkupdate',
    text: '检查新版本'
  },
  {
    to: '/agreement',
    text: '用户协议'
  },
  {
    to: '/memony',
    text: '押金说明'
  },
  {
    to: '/topup',
    text: '充值协议'
  }
]
export default {
  name: 'setting',
  data () {
    return {
      headerIcons: {
        left: {
          name: 'chevron-left',
          on: {
            click: function () {
              this.$router.back()
            }
          }
        },
        right: {
        }
      },
      propList: propList,
      fixed: 'false',
      headerTitle: '设置',
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png',
      src: 'http://mobike.com/wp-content/themes/mobike/img/mobike-home-bg.jpg'
    }
  },
  components: {
    'mo-header': Header,
    'mo-list': List
  },
  methods: {
    loginout: function () {
      this.$router.push({
        path: '/logout'
      })
    }
  }
}
</script>
<style>
  .mobike-road {
    margin-top: 0.1rem;
  }
  .mobike-road li {
    padding: 1rem 0;
    border: 1px solid #eee;
  }
  .mobike-road li:nth-of-type(2) {
    border-left:none;
    border-right: none;
  }
  .mobike-road li:nth-of-type(4) {
    border-left: none;
  }
  .mobike-road-count {
    font-size: 1.7rem;
    font-weight: 600;
    color: #f05b48;
  }
  .mobike .am-figure-default img {
    margin: 0;
    padding: 0;
  }
  .mobike figure {
    margin: 0;
    padding: 0;
  }
  .mobike-tip {
    color: rgb(102, 102, 102);
    font-size: 1.2rem;
  }
  .mobike .am-gallery {
    padding:0;
  }
</style>
