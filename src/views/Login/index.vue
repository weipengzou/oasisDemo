<template>
  <div>
    <div class="logo">
      <p>绿洲</p>
      <p>分享美好生活</p>
    </div>
    <div>
      <input type="button" value="登录/注册" class="login" />
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
</template>
<style lang="scss" scoped>
* {
  font-size: 0.36rem;
  color: white;
  background: saddlebrown;
  justify-content: center;
  height: 100vh;
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    p:last-child {
      font-size: 0.16rem;
      letter-spacing: 0.08rem;
    }
  }
  ul {
    width: 100%;
    display: flex;
    text-align: center;
    li {
      width: 0.5rem;
    }
  }
}
.login {
  font-size: 0.16rem;
  width: 1.5rem;
  height: 0.28rem;
  color: black;
  background: whitesmoke;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>