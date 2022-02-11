<template>
  <div class="step-container">
      <a-steps :current="current" class="product-step">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <basicDetail v-if="current === 0" @next="nextStep"/>
      <saleDetail  v-else-if="current === 1" />
    </div>
  </div>
</template>

<script>
import basicDetail from '@/components/basicDetail.vue';
import saleDetail from '@/components/saleDetail.vue';

export default {
  components: {
    basicDetail,
    saleDetail,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '基本商品信息',
          content: 'First-content',
        },
        {
          title: '商品销售信息',
          content: 'Second-content',
        },
      ],
    };
  },
  methods: {
    nextStep(data) {
      console.log(data);
    },
  },

};
</script>

<style lang="less" scoped>
.step-container{
  .product-step{
    width: 50%;
    margin: 20px auto;
  }
  .steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 20px;
  padding-left: 90px;
}

.steps-action {
  margin-top: 24px;
}
}

</style>
