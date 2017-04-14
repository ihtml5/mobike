<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :logo="logo" :fixed="fixed" :headerTitle="headerTitle">
    </mo-header>
    <baidu-map class="map" :center="center" @ready="handler" :style="mapStyle">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"/>
    </baidu-map>
    <mo-loading :lstyle="loadingStyle"></mo-loading>
  </div>
</template>

<script>
import Header from '../components/Header'
import List from '../components/List'
import { winInfo } from '../utils'
export default {
  name: 'home',
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
              this.$router.push({
                path: '/search'
              })
            }
          }
        }
      },
      headerTitle: '',
      fixed: 'true',
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
  beforeMount () {
    this.lng = 116.404
    this.lat = 39.915
    this.mapStyle = {
      height: `${winInfo().height}px`,
      zIndex: 0
    }
    // 动态调整地图高度
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize: function () {
      this.mapStyle = {
        height: `${winInfo().height}px`
      }
    },
    handler: function () {
      this.lng = 116.404
      this.lat = 39.915
      this.mapStyle = {
        height: `${winInfo().height}px`,
        zIndex: 0
      }
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
