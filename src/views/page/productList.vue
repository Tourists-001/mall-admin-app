<template>
  <div class="product-list-container">
    <!-- 搜索区域 -->
    <div class="search-area">
      <Search @submit="searchList"/>
    </div>
    <!-- 产品列表 -->
    <div class="product-list"></div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  components: {
    Search,
  },
  methods: {
    searchList(val) {
      console.log(val);
    },
  },
};
</script>

<style>

</style>
