<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :logo="logo"></mo-header>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'Home',
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
          name: 'search',
          to: '/search',
          on: {
            click: function () {
              this.$router.back()
            }
          }
        }
      },
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
</style>
