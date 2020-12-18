<template>
<h1>Tabs 示例</h1>
<div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
    <Tabs v-model:selected='x'>
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
   </Tabs>
   </div>
    <div class="demo-actions">
        <Button>查看代码</Button>
    </div>
</div>

</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
import {ref} from 'vue'

export default {
    components:{Tab,Tabs},
    setup(){
        const x = ref('导航1')
        return {x}
    }
}
</script>

<style>

</style>