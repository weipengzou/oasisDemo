<template>
  <div>
    <topbar title="消息"></topbar>
    <message></message>
    <Nav></Nav>
  </div>
</template>
<script>
import topbar from "@/components/topbar";
import Nav from "@/components/navbar";
import message from "@/components/content/messagePage";
export default {
  components: {
    Nav,topbar,
    message
  }
};
</script>
<style lang="scss" scoped>
</style>