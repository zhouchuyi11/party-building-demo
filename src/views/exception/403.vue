<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
    <template #extra>
      <a-button type="primary" @click="goHome">Back Home</a-button>
    </template>
  </a-result>
</template>

<script>
//v2
export default {
  name: '403',
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
<!--v3-->
<!--<script lang="ts" setup>-->
<!--import {ref} from "vue";-->
<!--const name = ref('')-->
<!--console.log(name.value)-->
<!--</script>-->

<style lang="scss" scoped> //scoped表示当前页面样式只作用于当前页面，防止样式污染

</style>