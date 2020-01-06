<template>
  <div class="asd">
    <!-- <topbar title="用户">
      <i class="iconfont icon-icon-test16"></i>
    </topbar> -->
    <Usercontent></Usercontent>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from "@/components/navbar";
import topbar from "@/components/topbar";
import Usercontent from "@/components/content/userPage";

export default {
  data() {
    return {
      isLogin: true
    };
  },
  components: {
    Nav,
    topbar,
    Usercontent
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
* {
  font-size: 0.16rem;
  
}
.iconfont {
  font-size: 0.32rem;
  position: relative;
  left: 1.5rem;
}
</style>