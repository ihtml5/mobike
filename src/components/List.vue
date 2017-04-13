<template>
  <div class="am-list-news am-list-news-default" >
    <div class="am-list-news-bd">
        <ul class="am-list mobike-list">
            <mo-line v-for="l in melist" :to="l.to" :text="l.text" :icon="l.icon" :key="l.text"></mo-line>
        </ul>
    </div>
  </div>
</template>
<script>
import Line from './Line'
export default {
  name: 'list',
  data: function () {
    return {
      melist: this.list
    }
  },
  props: ['list'],
  components: {
    'mo-line': Line
  }
}
</script>
<style>
    .mobike-list {
        margin: 0;
        padding: 0;
    }
    .mobike-list li {
        border: 1px solid #eee;
    }
    .mobike-list li:nth-of-type(1) {
        border-top: none;
    }
    .mobike .am-list-news-default {
        margin: 0;
    }
    .mobike-list li {
        border: 1px solid #eee;
        color: rgb(102,102,102);
        overflow: hidden;
        height: 45px;
        line-height: 45px;
    }
    .mobike-listLeft {
        padding-left: 1rem;
        font-size: 1.4rem;
        float: left;
        color: #555;
        font-weight: 600;
    }
    .mobike-listRight {
        float: right;
        margin-right: 1rem;
    }
    .mobike-listRight i {
        margin-left: 0.5rem;
        font-weight: thin;
        color: #999;
    }
    .mobike-list-count {
        color: #ccc;
    }
</style>
