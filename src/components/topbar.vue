<template>
  <div>
    <div id="topbar">
      <router-link to="/home" tag="div" class="content">
        <h2 class="title">{{title}}</h2>
        <slot></slot>
      </router-link>
    </div>
    <div class="topLine">——到顶了——</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "绿洲demo"
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#topbar {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0 -10px 20px black;
  background: white;
  .content {
    width: 100%;
    display: flex;
    line-height: 0.5rem;
    justify-content: center;
  }
  h2 {
    font-size: 0.18rem;
    position:absolute;
  }
}
.topLine {
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.16rem;
  text-align: center;
}
</style>
// topbar有两个需要传递的属性
// 一个titile 设置标题
// 一个插槽 如果有需要可以放iconfont
//自带一个顶线div