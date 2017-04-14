<template>
  <div class="mobike-mobile-home">
    <mo-header :icons='headerIcon' :logo="logo" :headerTitle="headerTitle" :fixed="fixed"></mo-header>
    <div class="mobike-form-group">
        <label>手机号</label>
        <input type="tel" class="mobike-input" placeholder="请输入手机号" @input="telChange" v-model="tel"/>
    </div>
    <div class="mobike-form-group">
        <label>验证码</label>
        <input type="tel" class="mobike-input mobike-inputCode" placeholder="请输入验证码" v-model="code"/>
        <button :class="btnCls" type="button" @click="getCode">{{codeText}}</button>
    </div>
    <p class="mobike-tipText">收不到短信,试试语音验证码</p>
    <div class="mobike-form-group">
      <button :class="submitBtnCls" @click="login" type="button">确定</button>
      <p class="mobike-tip">点击-确定,即表示已阅读并同意 <router-link to="/usecar">《用车服务条款》</router-link></p>
    </div>
    <mo-loading :lconStyle="loadingConStyle" :lcntStyle="loadingCntStyle" @stopInterval="stopIntervalHandler"></mo-loading>
  </div>
</template>

<script>
import Header from '../components/Header'
import auth from '../utils/auth'
import Loading from '../components/Loading'
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
      codeText: '获取验证码',
      loadingConStyle: {
        display: 'none'
      },
      loadingCntStyle: {
        top: '15rem',
        width: '16rem',
        height: '5rem',
        backgroundColor: '#262930',
        border: '1px solid #fff',
        lineHeight: '5rem',
        left: '-8rem'
      },
      tel: '',
      code: '',
      count: 60,
      intervalId: () => {},
      headerTitle: '手机验证',
      fixed: 'false',
      src: 'http://mobike.com/wp-content/themes/mobike/img/mobike-home-bg.jpg',
      logo: 'http://mobike.com/wp-content/themes/mobike/img/mobike-logo-white.png'
    }
  },
  computed: {
    btnCls: function () {
      return this.tel.length > 0 && !isNaN(Number(this.tel)) ? `mobike-btn mobike-codeBtn` : `mobike-btn mobike-codeBtn mobike-codeBtn-default`
    },
    submitBtnCls: function () {
      return this.tel.length > 0 && this.code.length > 0 && !isNaN(Number(this.tel)) ? `mobike-btn mobike-sureBtn` : `mobike-btn mobike-sureBtn mobike-codeBtn-default`
    }
  },
  created: function () {
    this.$http.get('http://ac-OnsG2j7w.clouddn.com/ce149995a591ed215346.json').then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    telChange ($event) {
      this.tel = $event.target.value
    },
    login () {
      auth.login(this.tel, this.code, loggedIn => {
        console.log('loggedIn', this.tel, this.code)
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.push({
            path: this.$route.query.redirect || '/'
          })
        }
      })
    },
    stopIntervalHandler () {
      this.codeText = '获取验证码'
      this.count = 60
      clearInterval(this.intervalId)
    },
    getCode () {
      let self = this
      this.loadingConStyle = Object.assign(this.loadingConStyle, {display: 'inline-block'})
      this.codeText = `还剩${this.count}秒`
      this.intervalId = setInterval(() => {
        self.count = self.count - 1 >= 0 ? self.count - 1 : 0
        self.codeText = `还剩${self.count}秒`
      }, 1000)
    }
  },
  components: {
    'mo-header': Header,
    'mo-loading': Loading
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
    text-indent: 6rem;
    height: 4rem;
    outline: none;
    border: 1px solid #eee;
    background-color: #eee;
    /*border-radius: 0.5rem;*/
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
  width: 100%;
  outline: none;
  border: none;
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
.mobike-sureBtn {
  height: 4.5rem;
}
.mobike-tipText {
  font-size: 1.2rem;
  padding-left: 1rem;
  text-align: left;
  color: #f05b48;
}
</style>
