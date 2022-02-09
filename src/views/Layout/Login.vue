/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-alert */
<template>
<div class="login-container">
<a-form-model ref="LoginForm" :model="LoginForm" :rules="rules" v-bind="layout" class="login-form">
    <a-form-model-item has-feedback label="邮箱" prop="email">
      <a-input v-model="LoginForm.email" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model="LoginForm.password" type="password" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('LoginForm')">
        Submit
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('LoginForm')">
        Reset
      </a-button>
    </a-form-model-item>
  </a-form-model>
</div>
</template>
<script>
import api from '@/api/use';

export default {
  data() {
    // ? 邮箱的校验规则
    const emailReg = /^[\w-]+@[\w.-]+.com$/;
    // eslint-disable-next-line consistent-return
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the Email'));
      }
      if (emailReg.test(value)) {
        callback();
      } else {
        return callback(new Error('The mailbox format is incorrect'));
      }
    };

    // ? 密码的校验规则
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        callback();
      }
    };
    return {
      LoginForm: {
        password: '',
        email: '',
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        email: [{ validator: checkEmail, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      // eslint-disable-next-line consistent-return
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.LoginForm).then(() => {
            this.$router.push({
              name: 'Home',
            });
          }).catch((error) => {
            this.$message.error(error);
            this.$router.push({
              name: 'Home',
            });
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.login-container{
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;
  position: relative;
  .login-form {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
}

</style>
