<template>
  <div>
    <div id="page">
      <transition name="fade">
        <div class="logo" v-show="!isclick">
          <router-link tag="p" to="home">绿洲</router-link>
          <transition name="fade">
            <div v-if="istip" class="tip">
              <p>点击可回首页</p>
              <p>↓</p>
            </div>
          </transition>
          <p>分享美好生活</p>
        </div>
      </transition>
      <div class="login">
        <transition name="fade">
          <div class="loginTxtBox" v-show="isclick">
            <p>输入账号密码</p>
            <input type="text" class="loginTxt" placeholder="acc" v-model="account" />
            <input type="password" class="loginTxt" placeholder="pwd" v-model="password" />
          </div>
        </transition>
        <input type="button" value="登录/注册" class="loginBtn" @click="loginShow" />
        <ul>
          <li>
            <i class="iconfont icon-icon-test72"></i>
          </li>
          <li>
            <i class="iconfont icon-icon-test80"></i>
          </li>
          <li>
            <i class="iconfont icon-alipay"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      isclick: false,
      istip: false,
      account: "",
      password: ""
    };
  },
  methods: {
    //登录按钮
    loginShow() {
      //判断是否输入
      if ((this.account != "", this.password != "")) {
        Axios.get("json/user.json").then(res => {
          var account = this.account;
          var password = this.password;
          //判断账号
          if (res.data.data[account]) {
            console.log("账号存在");
            if (res.data.data[account].pwd == password) {
              //判断密码
              console.log("密码正确", res.data.data[account]);
              //设置store状态
              this.$store.commit("loginIn", true);
              // this.$store.state.isUserPageShow=true;
              //路由跳转,传递user.json参数
              this.$router.push("account");
              // if(this.$store.state.userList=="")
              //   console.log("user是空的")
            } else console.log("密码错误");
          } else console.log("账号不存在");
        });
      } else {
        this.isclick = !this.isclick;
        this.account = "";
        this.password = "";
      }
    }
  },
  mounted() {
    if (window.location) {
      this.istip = true;
      setTimeout(() => {
        this.istip = false;
      }, 10000);
    }
  }
};
</script>
<style lang="scss" scoped>
#page {
  height: 100vh;
  background: saddlebrown;
}
* {
  font-size: 0.16rem;
  color: white;
  input: {
    font-size: 0.1rem;
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    p:first-child {
      font-size: 0.36rem;
      margin: 1rem 0;
    }
    .tip {
      position: absolute;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      p {
        font-size: 0.16rem;
        margin: 0;
      }
    }
    p:last-child {
      font-size: 0.16rem;
      letter-spacing: 0.08rem;
    }
  }
  ul {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    li {
      width: 0.5rem;
    }
  }
  .login {
    margin: 1rem 0;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    .loginBtn {
      font-size: 0.16rem;
      width: 2rem;
      height: 0.36rem;
      color: whitesmoke;
      background: none;
      border: 2px solid whitesmoke;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      margin: 0.36rem auto;
    }
    .loginTxtBox {
      width: 2rem;
      height: 0.5rem;
      background: none;
      text-align: center; //左右居中
      display: flex;
      flex-direction: column;
      align-items: center; //上下居中
      position: absolute;
      left: 50%;
      top: -100%;
      transform: translateX(-50%);
      // top: -100%;
      transition: 1s;
      p {
        font-size: 0.24rem;
      }
      .loginTxt {
        width: 2rem;
        margin: 0.2rem 0;
        border-radius: 0;
        border-bottom: 2px solid whitesmoke;
      }
    }
  }

  .iconfont {
    font-size: 0.36rem;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
