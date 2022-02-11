<template>
  <div class="basic-detail-container">
    <a-form-model
    :model="form"
    ref="ruleForm"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="标题" required prop="title">
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="描述" prop="desc">
      <a-input v-model="form.desc" />
      </a-form-model-item>
      <a-form-model-item label="商品类目" required prop="category">
      <a-select v-model="form.category" @change="changeCategory">
        <a-select-option :value="c.id" v-for="c in categoryList" :key="c.id">
        {{c.name}}
        </a-select-option>
      </a-select>
        <a-select v-model="form.c_items">
        <a-select-option :value="c" v-for="c in categoryItems" :key="c">
        {{c}}
        </a-select-option>
      </a-select>
      </a-form-model-item>
      <a-form-model-item label="商品标签" required prop='tags'>
        <a-select
          mode="tags"
          :default-value="['包邮，最晚次日到达']"
          v-model="form.tags"
    >
      <a-select-option value="包邮，最晚次日到达">
       包邮，最晚次日到达
      </a-select-option>
    </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit"> 下一步 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import api from '@/api/category';

export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      categoryList: [],
      categoryItems: [],
      rules: [],
      form: {
        title: '',
        desc: '',
        category: '',
        c_items: [],
        tags: [],
      },
    };
  },
  created() {
    api.getCategory().then((res) => {
      this.categoryList = res.data;
    });
  },
  methods: {
    changeCategory(category) {
      for (let i = 0; i < this.categoryList.length; i += 1) {
        if (this.categoryList[i].id === category) {
          this.categoryItems = this.categoryList[i].c_items;
        }
      }
    },
    onSubmit() {
      // eslint-disable-next-line consistent-return
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
        } else {
          this.$message.error('请输入内容');
          return false;
        }
      });
    },
    handleChange() {},
  },

};
</script>

<style>

</style>
