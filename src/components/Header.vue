<template>
  <header data-am-widget="header"
          class="am-header am-header-default">
      <div class="am-header-left am-header-nav" v-if="headerIconLeft">
          <a @click.preventDefault="iconLeftClicker">
            <i :class="headerIconLeft"></i>
           </a>
      </div>
      <h1 class="am-header-title">
          <img :src="src" alt="摩拜单车"/>
      </h1>
      <div class="am-header-right am-header-nav" v-if="headerIconRight">
          <a @click.preventDefault = "iconRightClicker">
            <i :class="headerIconRight"></i>
           </a>
      </div>
  </header>
</template>

<script>
import Util from '../utils'
export default {
  name: 'moheader',
  props: ['icons', 'title', 'logo'],
  data: function () {
    return {
      headerIconLeft: `am-header-icon am-icon-${this.icons.left.name ? this.icons.left.name : ''}`,
      headerIconRight: `am-header-icon am-icon-${this.icons.right.name ? this.icons.right.name : ''}`,
      leftTo: Util.hasIconClicker(this.icons, 'left', 'to'),
      iconLeftClicker: Util.hasIconClicker(this.icons, 'left', 'click'),
      iconRightClicker: Util.hasIconClicker(this.icons, 'right', 'click'),
      src: this.logo
    }
  }
}
</script>
<style>
.mobike .am-header-default {
  color: #fff;
  background-color: #262930;
}
.mobike .am-header-default i {
  font-weight:400;
}
.mobike .am-header .am-header-title {
    margin: 0;
}
</style>
