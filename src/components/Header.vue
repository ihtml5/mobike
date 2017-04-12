<template>
  <header data-am-widget="header"
          :class="headerClass">
      <div class="am-header-left am-header-nav" v-if="headerIconLeft">
          <a @click.preventDefault="iconLeftClicker">
            <i :class="headerIconLeft"></i>
           </a>
      </div>
      <h1 class="am-header-title">
          <img :src="src" alt="摩拜单车" v-if="!title"/>
          <span>{{title}}</span>
          <slot>
            This will only be displayed if there is no content to be distributed.
          </slot>
      </h1>
      <div class="am-header-right am-header-nav" v-if="headerIconRight">
          <a @click.preventDefault = "iconRightClicker">
            <i :class="headerIconRight"></i>
           </a>
      </div>
  </header>
</template>

<script>
import { hasIconProperty } from '../utils'
export default {
  name: 'moheader',
  props: ['icons', 'headerTitle', 'logo', 'fixed'],
  data: function () {
    return {
      headerIconLeft: `am-header-icon am-icon-${this.icons.left.name ? this.icons.left.name : ''}`,
      headerIconRight: `am-header-icon am-icon-${this.icons.right.name ? this.icons.right.name : ''}`,
      iconLeftClicker: hasIconProperty(this.icons, 'left', 'click'),
      iconRightClicker: hasIconProperty(this.icons, 'right', 'click'),
      src: this.logo,
      title: this.headerTitle,
      headerClass: `am-header am-header-default ${this.fixed === 'true' ? 'am-header-fixed' : ''}`
    }
  },
  created: function () {
    console.log('created', this.title)
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
