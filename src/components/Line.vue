<template>
    <li class="am-g">
      <router-link :to="linkTo">
        <div class="mobike-listLeft">{{lineText}}</div>
            <div class="mobike-listRight">
                <i :class="iconCls"></i>
            </div>
      </router-link>
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
   .mobike-list a {
     overflow: hidden;
     height: 4rem;
     line-height: 2.5rem;
   }
</style>
