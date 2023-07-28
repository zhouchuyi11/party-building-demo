<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="goHome">Back Home</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: '404',
  data() {
    return {}
  },
  methods: {
    goHome() {
      //路由跳转
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped> //scoped表示当前页面样式只作用于当前页面，防止样式污染

</style>