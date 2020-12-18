<template>
 <div class="demo">
   <h2>常规使用</h2>
   <div class="demo-component">
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
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

<style lang='scss'>

</style>