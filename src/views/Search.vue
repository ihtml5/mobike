<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :logo="logo" :headerTitle="headerTitle" :fixed="fixed">
      <input type="search" v-model="searchVal" class="mobike-input-normal" placeholder="请输入查询关键词"/>
    </mo-header>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'search',
  data () {
    return {
      headerIcon: {
        left: {
          name: 'bars',
          to: '/user',
          on: {
            click: function () {
              this.$router.push({
                path: '/user'
              })
            }
          }
        },
        right: {
          name: 'remove',
          to: '/search',
          on: {
            click: function () {
              this.$router.back()
            }
          }
        }
      },
      searchVal: '',
      fixed: 'true',
      headerTitle: '',
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png'
    }
  },
  methods: {
  },
  components: {
    'mo-header': Header
  }
}
</script>

<style>
  .map {
    max-width: 100%;
    min-height: 500px;
  }
  .mobike-input-normal {
    width: 60%;
    text-indent: 2rem;
    height: 3.3rem;
    line-height: 1.5rem;
    outline: none;
    border: 1px solid #eee;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    color: #333;
}
input::-webkit-input-placeholder {
  font-size: 1.2rem;
  color: #999;
}
input:-ms-input-placeholder {
  font-size: 1.2rem;
	color: #999;
}
input:-moz-placeholder {
  font-size: 1.2rem;
	color: #999;
}
input::-moz-placeholder {
  font-size: 1.2rem;
	color: #999;
}
</style>
