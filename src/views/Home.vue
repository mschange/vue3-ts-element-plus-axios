<template>
  <div class="Home">
    <p>{{ from }}</p>
    <p>{{ name }}</p>
  </div>
</template>
<script lang="ts">
import * as Api from '../api/index';
import {
  onBeforeMount,
  reactive,
  getCurrentInstance,
  toRefs
} from 'vue';

interface Results {
  name: string;
  from: string;
}

export default {
  setup() {
    const { ctx }: any = getCurrentInstance();
    // 定义变量
    const result: Results = reactive({
      name: '',
      from: ''
    });
    const getCouponLists = async () => {
      try {
        const data: any = await Api.getCouponList();
        if (data.code === 200) {
          const { name, from } = data.result;
          result.name = name;
          result.from = from;
        } else {
          ctx.$message.success('网络出小差了~');
        }
      } catch (error) {
        console.log(error);
      }
    }
    onBeforeMount(async() => {
      console.log('1111')
      getCouponLists();
    })
    return {
      ...toRefs(result)
    }
  }
}
</script>
<style lang="less">
  .Home {
    padding: 20px;
    p {
      color: red;
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
</style>