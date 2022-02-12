<template>
  <div style="background-color: #ececec; padding: 20px; display: flex;">
    <a-row :gutter="18" style="display: flex;">
        <a-card title="商品类目" :bordered="false" class="card">
        <ShowCategory />
        </a-card>
      <a-col :span="8">
        <a-card title="用户总览" :bordered="false" class="cardItem">
        <UerCategory />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="销售总览" :bordered="false" class="card" style="padding-left: -9px">
          <SelaCategory />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import ShowCategory from './showCategory.vue';
import UerCategory from './userCategory.vue';
import SelaCategory from './selaCategory.vue';

export default {
  components: {
    ShowCategory,
    UerCategory,
    SelaCategory,
  },
};
</script>
<style scoped>
.card {
  width: 470px;
  height: 500px;
  margin-left: -9px
}
.cardItem {
  height: 500px;
}
</style>
