<template>
  <a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
    <template #extra>
      <a-button type="primary" @click="goHome">Back Home</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: '500',
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