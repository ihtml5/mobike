<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :title="title" :logo="logo"></mo-header>
  </div>
</template>

<script>
import Header from '../components/Header'
import List from '../components/List'
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
  components: {
    'mo-header': Header,
    'mo-list': List
  }
}
</script>

<style>

</style>
