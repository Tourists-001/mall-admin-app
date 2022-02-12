<template>
  <div class="category-container">
     <a-form-model
    :model="form"
    ref="ruleForm"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="类目ID" required prop="id">
        <a-input v-model="form.id" />
      </a-form-model-item>
      <a-form-model-item label="类目名称" required prop="name">
      <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="子类目" required prop="c_items">
      <a-select mode="tags"
                :default-value="['苹果']"
                v-model="form.c_items">
      <a-select-option value="苹果">
       苹果
      </a-select-option>
  </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit" class="btn"> 提交 </a-button>
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
      rules: [],
      form: {
        id: '',
        name: '',
        c_items: [],
      },
    };
  },
  methods: {
    onSubmit() {
      // eslint-disable-next-line consistent-return
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          api.editCategory(this.form).then(() => {
            this.$message.success('提交成功');
          });
        } else {
          this.$message.error('请输入内容');
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.category-container {
  width: 600px;
  margin: 200px auto;
  .btn {
    margin-left: 100px;
  }
}
</style>
