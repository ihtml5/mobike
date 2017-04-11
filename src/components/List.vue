<template>
  <div class="am-list-news am-list-news-default" >
    <div class="am-list-news-bd">
        <ul class="am-list mobike-list">
            <li class="am-g">
                <div class="mobike-listLeft">我的钱包</div>
                <div class="mobike-listRight">
                    <span>0.5元</span>
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
            <li class="am-g">
                <div class="mobike-listLeft">我的钱包</div>
                <div class="mobike-listRight">
                    <span>0.5元</span>
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
            <li class="am-g">
                <div class="mobike-listLeft">我的钱包</div>
                <div class="mobike-listRight">
                    <span>0.5元</span>
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
 export default {
   name: 'list'
 }
</script>
<style>
    .mobike {
        margin: 0;
        padding: 0;
    }
    .mobike li:nth-of-type(1) {
        boder-top: none;
    }
    .mobike .am-list-news-default {
        margin: 0;
    }
    .mobike-list li {
        border: 1px solid #eee;
        color: rgb(102,102,102);
        overflow: hidden;
        height: 35px;
        line-height: 35px;
    }
    .mobike-listLeft {
        padding-left: 0.5rem;
        font-size: 1.4rem;
        float: left;
        color: #555;
        font-weight: 600;
    }
    .mobike-listRight {
        float: right;
        margin-right: 1rem;
    }
    .mobike-listRight icon {
        font-weight: 200;
        font-size: 0.8rem;
        color: rgb(102,102,102)
    }
</style>
