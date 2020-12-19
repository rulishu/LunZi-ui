<template>
  <div>
    <!-- <Switch v-model:value ="bool"/> -->
    <div>
      <h1>Switch 示例</h1>
      <div class="demo">
        <h2>常规用法</h2>
        <div class="demo-component">
            <Switch1Demo/>
        </div>
        <div class="demo-actions">
          <Button>查看代码</Button>
        </div>
        <div class="demo-code">
<article class="markdown-body">
<pre>
  &lt;template&gt;
    &lt;Switch v-model:value="bool"&gt;
  &lt;/template &gt;

  &lt;script lang='ts'&gt;
  import Switch from '../lib/Switch.vue'
  import {ref} from 'vue'

  export default {
      components:{Switch},
      setup() {
        const bool = ref(false)
        return {bool}
      }
    }
  &lt;/script&gt;
</pre>
</article>
        </div>
      </div>
      <div class="demo">
        <h2>支持 disabled </h2>
        <div class="demo-component">
          <Switch2Demo/>
        </div>
        <div class="demo-actions">
          <Button>查看代码</Button>
        </div>
        <div class="demo-code" >
<article class="markdown-body">
<pre>
  <code>
  &lt;template&gt;
   &lt;Switch v-model:value="bool" disabled&gt;
  &lt;/template&gt;

  &lt;script lang='ts'&gt;
  import Switch from '../lib/Switch.vue'
  import {ref} from 'vue'

  export default {
    components:{Switch},
    setup() {
      const bool = ref(false)
      return {bool}
    }
  }
  &lt;/script&gt;
  </code>
</pre>
</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

export default {
    components:{Switch,Button,},
    setup() {
      const bool = ref(false)
      return {bool,Prism}
    }
}
</script>

<style lang='scss'>
    $border-color: #d9d9d9;
    .demo{
      border: 1px solid $border-color;
      margin: 16px 0 32px;
      h2{
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
      }
      &-component{
        padding: 16px;
      }
      &-actions{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
      }
      &-code{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
         >pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
        }
      }
    }
</style>