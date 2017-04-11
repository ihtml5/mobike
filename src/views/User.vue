<template>
  <div class="mobike-mobile-user">
    <mo-header :icons="headerIcons" :title="title" :logo="logo"></mo-header>
     <figure data-am-widget="figure" class="am am-figure am-figure-default "   v-bind:data-figure="pureview">
       <img :src="src" :data-rel="src" alt="春天的花开秋天的风以及冬天的落阳"/>
      </figure>
      <ul class="am-gallery am-avg-sm-3 am-avg-md-3 am-avg-lg-3 am-gallery-default mobike-road">
        <li>
          <div class="mobike-road-count">
            23.2
          </div>
          <div class="mobike-tip">
            累计骑行(公里)
          </div>
        </li>
        <li>
            <div class="mobike-road-count">
              2.8
            </div>
            <div class="mobike-tip">
              节约碳排放(千克)
            </div>
        </li>
        <li>
            <div class="mobike-road-count">
              1250.0
            </div>
            <div class="mobike-tip">
              运动成就(大卡)
            </div>
        </li>
      </ul>
      <mo-list></mo-list>
  </div>
</template>

<script>
import Header from '../components/Header'
import List from '../components/List'
export default {
  name: 'user',
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
      title: '个人中心',
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png',
      author: 'ihtml5',
      pureview: {pureview: 'true'},
      src: 'http://mobike.com/wp-content/themes/mobike/img/mobike-home-bg.jpg'
    }
  },
  components: {
    'mo-header': Header,
    'mo-list': List
  },
  methods: {
    goBack: function () {
      this.$router.push({
        path: '/'
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
    font-size: 14px;
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
