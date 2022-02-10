<template>
  <a-form-model
    layout="inline"
    :model="searchForm"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item label="检索关键字">
      <a-input v-model="searchForm.searchWorld" placeholder="请输入关键字">
      </a-input>
    </a-form-model-item>
    <a-form-model-item label="商品类目">
      <a-select
        show-search
        placeholder="选择商品类目"
        style="width: 200px"
        @change="handleChange"
        allowClear
      >
        <a-select-option v-for="c in data" :key="c.id" :value="c.id">
          {{ c.name }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="searchForm.user === '' || searchForm.password === ''"
      >
        检索
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>

export default {
  data() {
    return {
      searchForm: {
        searchWorld: '',
        category: '',
      },
    };
  },
  props: ['data'],
  methods: {
    handleSubmit() {
      this.$emit('submit', this.searchForm);
    },
    handleChange(val) {
      this.searchForm.category = val;
    },
  },
};
</script>
