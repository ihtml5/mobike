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
                <div class="mobike-listLeft">我的优惠</div>
                <div class="mobike-listRight">
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
            <li class="am-g">
                <div class="mobike-listLeft">我的行程</div>
                <div class="mobike-listRight">
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
            <li class="am-g">
                <div class="mobike-listLeft">我的消息</div>
                <div class="mobike-listRight">
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
            <li class="am-g">
                <div class="mobike-listLeft">邀请好友</div>
                <div class="mobike-listRight">
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
            <li class="am-g">
                <div class="mobike-listLeft">用户指南</div>
                <div class="mobike-listRight">
                    <i class="am-icon-chevron-right"></i>
                </div>
            </li>
            <li class="am-g">
                <div class="mobike-listLeft">设置</div>
                <div class="mobike-listRight">
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
</style>
