<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :logo="logo" :headerTitle="headerTitle" :fixed="fixed"></mo-header>
    <mo-lgraph></mo-lgraph>
  </div>
</template>

<script>
import Header from '../components/Header'
import LGraph from '../components/LGraph'
export default {
  name: 'notlogin',
  data () {
    return {
      headerIcon: {
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
      fixed: 'true',
      headerTitle: '',
      src: 'http://mobike.com/wp-content/themes/mobike/img/mobike-home-bg.jpg',
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png'
    }
  },
  methods: {
  },
  components: {
    'mo-header': Header,
    'mo-lgraph': LGraph
  }
}
</script>

<style>
</style>
