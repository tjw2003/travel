<template>
    <div>
      <h2>Welcome to your dashboard, User {{ userId }}</h2>
      <p>Here you can view your personalized data.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userId: this.$route.params.id  // 获取路由中的用户 id
      };
    },
  
    watch: {
      // 如果路由变化，更新 userId
      '$route'(to, from) {
        this.userId = to.params.id;
      }
    }
  };
  </script>
  