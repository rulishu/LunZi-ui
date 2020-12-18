<template>
<div class="demo">
  <h2>支持size</h2>
    <div class="demo-component">
      <Button size="big">大按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div class="demo-component">
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div class="demo-component">
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
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