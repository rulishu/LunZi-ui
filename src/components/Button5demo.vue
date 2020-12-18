<template>
<div class="demo">
    <h2>支持显示加载中</h2>
   <div class="demo-component">
    <Button loading>加载中</Button>
    <Button>加载中</Button>
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