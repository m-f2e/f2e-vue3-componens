<template>
  <div>
    测试
    <MButton>button</MButton>
    <MButton type="primary">primary button</MButton>
    <MSelect />
    <MInput />
  </div>
</template>

<script lang="ts" setup>
  // 按需引入
  import { MButton, MSelect, MInput } from '@m-f2e/vue3-ui';
  import '@m-f2e/vue3-ui/es/button/style/index.css'
</script>

<style lang="less" scoped>
</style>