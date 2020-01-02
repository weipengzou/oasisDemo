<template>
  <div>
    <ul>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test37"></i>新关注
      </router-link>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test54"></i>你被赞了
      </router-link>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test33"></i>好友私信
      </router-link>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test33"></i>懒得打了
      </router-link>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
div {
  ul {
    height: 100vh;
  }
  li {
    display: flex;
    height: 0.5rem;
    font-size: 0.16rem;
    align-items: center;
    margin: 0.1rem 0;
  }
  .iconfont {
    font-size: 0.32rem;
    margin: 0 0.1rem;
  }
  span,
  .right {
    position: absolute;
    right: 0;
    align-items: center;
  }
}
</style>