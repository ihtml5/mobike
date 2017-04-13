<template>
    <li class="am-g">
        <div class="mobike-listLeft">{{lineText}}</div>
            <div class="mobike-listRight">
              <router-link :to="linkTo">
                <i :class="iconCls"></i>
              </router-link>
            </div>
    </li>
</template>

<script>
  export default {
    name: 'line',
    props: ['to', 'text', 'icon'],
    data: function () {
      return {
        linkTo: this.to,
        lineText: this.text,
        lineIcon: this.icon
      }
    },
    computed: {
      iconCls: function () {
        if (this.lineIcon && this.lineIcon.length > 0) {
          return `am-icon-${this.lineIcon}`
        }
      }
    }
  }
  </script>

<style>

</style>
