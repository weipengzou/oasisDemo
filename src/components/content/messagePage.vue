<template>
  <div id="messbox">
    <ul>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test37"></i>新关注
        <i class="iconfont icon-icon-test61 right"></i>
      </router-link>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test54"></i>你被赞了
        <i class="iconfont icon-icon-test61 right"></i>
      </router-link>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test33"></i>好友私信
        <i class="iconfont icon-icon-test61 right"></i>
      </router-link>
      <router-link to="/message" tag="li">
        <i class="iconfont icon-icon-test33"></i>懒得打了
        <i class="iconfont icon-icon-test61 right"></i>
      </router-link>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
* {
  font-size: 0.16rem;
}
#messbox {
  min-height: 90vh;
}
.iconfont {
  font-size: 0.32rem;
  margin: 0 0.1rem;
}
li {
  height: 0.5rem;
  display: flex;
  align-items: center;
}
.right {
  position: absolute;
  right: 0;
}

// div {
//   ul {
//     height: 100vh;
//   }
//   li {
//     display: flex;
//     height: 0.5rem;
//     line-height: 0.5rem;
//     font-size: 0.16rem;
//     margin: 0.1rem 0;
//   }
//   .iconfont {
//     font-size: 0.32rem;
//     align-items: center;
//     margin: 0 0.1rem;
//   }
//   span,
//   .right {
//     display: block;
//     position: absolute;
//     right: 0.1rem;
//     span {
//       font-size: 0.16rem;
//     }
//   }
// }
</style>