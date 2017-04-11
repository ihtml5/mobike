<template>
  <header data-am-widget="header"
          class="am-header am-header-default">
      <div class="am-header-left am-header-nav">
          <a @click.preventDefault="iconLeftClicker">
            <i :class="headerIconLeft"></i>
           </a>
      </div>
      <h1 class="am-header-title">
          <img :src="src" alt="摩拜单车"/>
      </h1>
      <div class="am-header-right am-header-nav" v-if="headerIconRight">
          <i :class="headerIconRight"></i>
      </div>
  </header>
</template>

<script>
export default {
  name: 'moheader',
  props: ['icons', 'title', 'logo'],
  data: function () {
    return {
      headerIconLeft: `am-header-icon am-icon-${this.icons.left.name ? this.icons.left.name : ''}`,
      headerIconRight: `am-header-icon am-icon-${this.icons.right.name ? this.icons.right.name : ''}`,
      leftTo: this.icons.left.to,
      title: this.title,
      iconLeftClicker: this.icons.left.on.click,
      src: this.logo
    }
  },
  created: function () {
    console.log('created', this.icons, this.title)
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
