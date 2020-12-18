<template>
<h1>
  Button示例
</h1>
  <Button1Demo/>
  <Button2Demo/>
  <Button3Demo/>
  <Button4Demo/>
  <Button5Demo/>
</template>

<script>
import Button from '../lib/Button.vue'
import Button1Demo from '../components/Button1demo.vue'
import Button2Demo from '../components/Button2demo.vue'
import Button3Demo from '../components/Button3demo.vue'
import Button4Demo from '../components/Button4demo.vue'
import Button5Demo from '../components/Button5demo.vue'

export default {
  components:{Button,Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo},
  setup() {
    const onClick = ()=>{
      console.log('hi')
    }
    return {onClick}
  }
}
</script>