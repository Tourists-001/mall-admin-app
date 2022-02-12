<template>
  <div class="step-container">
      <a-steps :current="current" class="product-step">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <BasicDetail v-if="current === 0" @next="nextStep" :form="form"/>
      <SaleDetail  v-else-if="current === 1" @pre="preStep" :form="form" @onSubmit="onSubmits"/>
    </div>
  </div>
</template>

<script>
import BasicDetail from '@/components/basicDetail.vue';
import SaleDetail from '@/components/saleDetail.vue';
import api from '@/api/product';

export default {
  components: {
    BasicDetail,
    SaleDetail,
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
      form: {
        title: '',
        desc: '',
        category: '',
        c_items: [],
        tags: [],
        price: 0,
        price_off: 0,
        unit: '',
        inventory: 0,
        images: [],
      },
    };
  },
  mounted() {
    const { id } = this.$route.params;
    if (id) {
      // api.detail(id).then((res) => {
      //   console.log(res);
      // });
    }
  },
  methods: {
    nextStep(form) {
      this.form = {
        ...this.form,
        ...form,
      };
      if (this.current === 1) {
        // console.log(this.form);
      } else {
        this.current = 1;
      }
    },
    preStep() {
      this.current = 0;
    },
    onSubmits(data) {
      api.addProduct(data).then(() => {
        this.$message.success('添加成功');
        this.$router.push({
          name: 'ProductList',
        });
      });
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
