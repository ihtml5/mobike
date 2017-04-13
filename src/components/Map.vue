<template>
    <div id="vueMap" :style="mapStyle"></div>
</template>

<script>
import { winInfo } from '../utils'
export default {
  name: 'vuemap',
  data: function () {
    return {
      lnt: 116.404,
      lag: 39.915,
      mapscript: null,
      mapStyle: {
        width: '100%',
        height: '500px'
      }
    }
  },
  created: function () {
    this.mapStyle = {
      height: `${winInfo().height}px`
    }
  },
  mounted: function () {
    let _map = new window['BMap'].Map('vueMap')
    _map.centerAndZoom(new window['BMap'].Point(116.404, 39.915), 14)
    let _local = new window['BMap'].LocalSearch(_map, {
      renderOptions: {
        map: _map
      }
    })
    _local.searchInBounds('银行', _map.getBounds())
    _map.addEventListener('dragend', function () {
      _map.clearOverlays()
      _local.searchInBounds('银行', _map.getBounds())
    })
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize: function () {
      this.mapStyle = {
        height: `${winInfo().height - 60}px`
      }
    }
  }
}
</script>

