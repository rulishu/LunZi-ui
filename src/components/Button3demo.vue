<template>
<div class="demo">
  <h2>支持level</h2>
   <div>
    <div class="demo-component">
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="demo-component">
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div class="demo-component">
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <div class="demo-actions">
    <Button>查看代码</Button>
  </div>
</div>
</template>

<script>
import Button from '../lib/Button.vue'

export default {
  components:{Button},
}
</script>

<style>

</style>