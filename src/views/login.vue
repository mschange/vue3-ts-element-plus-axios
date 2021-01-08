<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleFormsss" label-width="60px">
      <el-form-item label="用户" prop="username">
        <el-input v-model="ruleForm.username" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" style="width: 300px"></el-input>
      </el-form-item>
      <div class="btn-box">
        <el-button type="primary" size="medium" @click="submitForm" style="width: 200px">登录</el-button>
      </div>
    </el-form>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router';
import {
  getCurrentInstance,
  reactive,
  ref
} from 'vue'
interface ModelRef {
  username: string;
  password: string;
}
export default {
  setup() {
    const router = useRouter();
    const { ctx }: any = getCurrentInstance();
    const ruleFormsss = ref<any>(null);
    // 定义变量
    const ruleForm: ModelRef = reactive<ModelRef>({
      username: '',
      password: '',
    })

    // 定义验证规则
    const rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 20, message: '用户名长度不能小于5位', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '密码长度不能小于6位', trigger: 'blur' }
      ]
    }

    // 确认
    const submitForm = () => {
      try {
        (ruleFormsss.value as any).validate((valid: boolean) => {
          if (valid) {
            console.log(ruleForm)
            const { username, password } = ruleForm
            if (username === 'admin' && password === '123456') {
              ctx.$message.success('登录成功了~');
              router.push('home')
            } else {
              ctx.$message.error('账户或密码有误~');
            }
          }
        });
      } catch (error){
        console.log(error);
      }
    }
    return {
      ruleForm,
      rules,
      submitForm,
      ruleFormsss
    }
  },
};
</script>
<style lang="less">
  .login {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #2f3447;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn-box {
      display: flex;
      justify-content: center;
      padding: 0 30px;
      box-sizing: border-box;
    }
  }
</style>
