<template>
  <div>
    <div class="navbar">
      <router-link to="/home" tag="i" class="iconfont icon-icon-test40"></router-link>
      <router-link to="/search" tag="i" class="iconfont icon-icon-test12"></router-link>
      <router-link to="/message" tag="i" class="iconfont icon-icon-test22"></router-link>
      <router-link to="/account" tag="i" class="iconfont icon-icon-test35"></router-link>
    </div>
    <div class="bottomLine">——到底了——</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px black;
  background: white;
  justify-content: space-around;
  .iconfont {
    font-size: 0.32rem;
  }
  .router-link-active {
    color: brown;
    font-size: 0.4rem;
    transition: 1s;
  }
}
.bottomLine {
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.16rem;
  text-align: center;
}
</style>
// navbar
// 四个iconfont
// 一个底线div