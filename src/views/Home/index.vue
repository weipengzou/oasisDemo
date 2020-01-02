<template>
  <div id="home">
    <Topbar title="主页">
    </Topbar>
    <Navbar></Navbar>
  </div>
</template>
<script>
import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Topbar
  }
};
</script>
