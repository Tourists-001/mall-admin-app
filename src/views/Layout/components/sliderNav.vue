<template>
  <div class="main-header">
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item><router-link to="">首页</router-link></a-breadcrumb-item>
        <a-breadcrumb-item><router-link to="">统计</router-link></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <ul class="user-info">
      <li>欢迎,{{this.$store.state.user.username}} <a-icon type="down" /></li>
      <li @click="handleClick">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    handleClick() {
      this.$store.dispatch('changeLogin');
      this.$router.push({
        name: 'Login',
      });
      this.$message.success('退出成功');
    },
  },
};
</script>
