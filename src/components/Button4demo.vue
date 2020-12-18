<template>
<div class="demo">
  <h2>支持disabled</h2>
   <div class="demo-component">
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
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