<template>
  <div class="mobike-mobile-user">
    <mo-header :icons="headerIcons" :logo="logo" :fixed="fixed" :headerTitle="headerTitle"></mo-header>
    {{msg}}
  </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import List from '../components/List'
export default {
  name: 'me',
  data () {
    return {
      headerIcons: {
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
      fixed: 'false',
      headerTitle: '设置',
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png',
      src: 'http://mobike.com/wp-content/themes/mobike/img/mobike-home-bg.jpg',
      msg: ''
    }
  },
  components: {
    'mo-header': Header,
    'mo-list': List
  },
  created: function () {
    let _pathArr = this.$route.path.split('/')
    this.msg = _pathArr[_pathArr.length - 1].replace('/', '').toString()
  },
  methods: {
    loginout: function () {
      this.$router.push({
        path: '/logout'
      })
    }
  }
}
</script>
<style>
  .mobike-road {
    margin-top: 0.1rem;
  }
  .mobike-road li {
    padding: 1rem 0;
    border: 1px solid #eee;
  }
  .mobike-road li:nth-of-type(2) {
    border-left:none;
    border-right: none;
  }
  .mobike-road li:nth-of-type(4) {
    border-left: none;
  }
  .mobike-road-count {
    font-size: 1.7rem;
    font-weight: 600;
    color: #f05b48;
  }
  .mobike .am-figure-default img {
    margin: 0;
    padding: 0;
  }
  .mobike figure {
    margin: 0;
    padding: 0;
  }
  .mobike-tip {
    color: rgb(102, 102, 102);
    font-size: 1.2rem;
  }
  .mobike .am-gallery {
    padding:0;
  }
</style>
