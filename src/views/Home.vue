<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :title="title" :logo="logo"></mo-header>
      <baidu-map class="map" :center="center" @ready="handler" :style="mapStyle">
      </baidu-map>
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
      mapStyle: {
        height: '400px'
      },
      center: {
        lng: 0,
        lat: 0
      },
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png'
    }
  },
  mounted () {
    this.lng = 116.404
    this.lat = 39.915
    this.mapStyle = {
      height: document.body.offsetHeight + 67 + 'px'
    }
  },
  methods: {
    handler: function () {
      this.lng = 116.404
      this.lat = 39.915
    }
  },
  components: {
    'mo-header': Header,
    'mo-list': List
  }
}
</script>

<style>
  .map {
    max-width: 100%;
    min-height: 500px;
  }
</style>
