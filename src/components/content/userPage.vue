<template>
  <div>
    <keep-alive>
      <div id="user">
        <!-- 用户信息 -->
        <div v-show="this.$store.state.isUserPageShow" class="userContent">
          用户信息
          <span>名字：{{myname}}</span>
          <span>年龄：{{myage}}</span>
          <span>性别：{{mysex}}</span>
          <span class="btn">
            <input @click="loginOut" type="button" value="退出" />
          </span>
        </div>
        <!-- 判断是否登录 -->
        <div v-show="!this.$store.state.isUserPageShow" class="loginDiv">
          <p>尚未登录</p>
          <router-link tag="p" to="login">点击登录&注册</router-link>
        </div>
      </div>
    </keep-alive>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      islogin: false,
      userlist: [],
      account: "",
      pwd: "",
      myname: "默认名字",
      mynumber: "默认账号",
      myage: "0",
      mysex: "none"
    };
  },
  methods: {
    logIn(account, pwd) {
      this.ispass = false;
      axios.get("json/user.json").then(res => {
        if ((account = res.data.users[this.account])) {
          //用提交的账号搜索user.json的账号(下标)
          const data = res.data.users[this.account];
          console.log("有数据", data);
          // 判断密码
          if (pwd === data["pass"]) {
            console.log("密码正确", pwd);
            // 渲染数据
            this.myname = data["name"];
            this.myage = data["age"];
            this.mysex = data["sex"];
            this.islogin = !this.islogin;
          } else {
            this.ispass = true;
          }
        } else this.ispass = true;
      });
    },
    loginOut() {
      this.islogin = !this.islogin;
      
    }
  }
};
</script>
<style lang="scss" scoped>
#user {
  width: 100%;
  height: 100vh;
}
* {
  font-size: 0.16rem;
  background-color: yellowgreen;
  input {
    font-size: 0.18rem;
  }
}

.userContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 0.1rem 0;
    height: 0.32rem;
    font-size: 0.18rem;
    input {
      height: 0.36rem;
      width: 2.2rem;
      background: none;
      border: none;
      border-bottom: 0.02rem black solid;
      outline-style: none;
      transition: 0.5s;
    }
  }
  .btn input {
    margin: 0 0.1rem;
    width: 1rem;
    flex: 1;
  }
}
.loginDiv {
  padding-top: 50vh;
  text-align: center;
}
</style>
