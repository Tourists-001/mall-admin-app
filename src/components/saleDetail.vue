<template>
  <div class="sale-detail-container">
    <a-form-model
    :model="form"
    ref="ruleForm"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="商品价格" required prop="price">
        <a-input v-model="form.price" />
      </a-form-model-item>
      <a-form-model-item label="折扣价格" prop="price_off">
      <a-input v-model="form.price_off" />
      </a-form-model-item>
      <a-form-model-item label="商品库存" required prop="unit">
      <a-input v-model="form.unit" />
      </a-form-model-item>
      <a-form-model-item label="计量单位" required prop='inventory'>
      <a-input v-model="form.inventory" />
      </a-form-model-item>
      <a-form-model-item label="图片上传"  prop="images">
      <a-upload
        :action="'https://mallapi.duyiedu.com/upload/images?appkey=' + $store.state.user.appkey"
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
        name= 'avatar'
    >
      <div v-if="fileList.length < 8">
        <a-icon :type="loading ? 'loading' : 'plus' " />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="preHandle" style="marginRight:30px"> 上一步 </a-button>
        <a-button type="primary" @click="onSubmit"> 确认添加 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  props: ['form'],
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      loading: false,
      fileList: [
      ],
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const obj = file;
      if (!file.url && !file.preview) {
        obj.preview = await getBase64(obj.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      if (file.status === 'done') {
        this.form.images.push(fileList[0].response.data.url);
      } else if (file.status === 'removed') {
        const { url } = file.response.data;
        this.form.images = this.form.images.filter((item) => item !== url);
      }
      this.fileList = fileList;
    },
    onSubmit() {
      // eslint-disable-next-line consistent-return
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('onSubmit', this.form);
        } else {
          this.$message.error('请输入内容');
          return false;
        }
      });
    },
    preHandle() {
      this.$emit('pre', this.form);
    },
  },
};
</script>
<style scoped>

</style>
