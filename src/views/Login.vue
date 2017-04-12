<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :logo="logo" :headerTitle="headerTitle" :fixed="fixed"></mo-header>
    <div class="mobike-form-group">
        <label>手机号</label>
        <input type="tel" class="mobike-input" placeholder="请输入手机号" @input="telChange" v-model="tel"/>
    </div>
    <div class="mobike-form-group">
        <label>验证码</label>
        <input type="tel" class="mobike-input mobike-inputCode" placeholder="请输入验证码"/>
        <button :class="btnCls">获取验证码</button>
    </div>
    {{tel}}
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'login',
  data () {
    return {
      headerIcon: {
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
      tel: '',
      headerTitle: '手机验证',
      fixed: 'false',
      src: 'http://mobike.com/wp-content/themes/mobike/img/mobike-home-bg.jpg',
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png'
    }
  },
  computed: {
    btnCls: function () {
      return this.tel.length > 0 && !isNaN(Number(this.tel)) ? `mobike-btn mobike-codeBtn` : `mobike-btn mobike-codeBtn mobike-codeBtn-default`
    }
  },
  methods: {
    telChange: function ($event) {
      this.tel = $event.target.value
    }
  },
  components: {
    'mo-header': Header
  }
}
</script>

<style>
.mobike-form-group {
    position: relative;
    margin: 1rem 0.5rem;
    text-align: left;
}
.mobike-form-group label {
    position: absolute;
    left: 1rem;
    top: 1.3rem;
    font-size: 1.3rem;
}
.mobike-input {
    width: 100%;
    text-indent: 5.5rem;
    height: 4rem;
    outline: none;
    border: 1px solid #eee;
    border-radius: 0.5rem;
}
.mobike-inputCode {
  width: 60%;
}
input::-webkit-input-placeholder {
  font-size: 1.2rem;
  color: #999;
}
input:-ms-input-placeholder {
  font-size: 1.2rem;
	color: #999;
}
input:-moz-placeholder {
  font-size: 1.2rem;
	color: #999;
}
input::-moz-placeholder {
  font-size: 1.2rem;
	color: #999;
}
.mobike-btn {
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #f05b48;
} 
.mobike-codeBtn {
  margin-left: 5%;
  width: 33%;
  height: 3.8rem;
}
.mobike-codeBtn-default {
  background-color: #ccc;
}
</style>
