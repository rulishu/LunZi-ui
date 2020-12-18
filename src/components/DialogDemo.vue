<template>
 <h1>Dialog 示例</h1>
    <div >
        <div class="demo">
            <h2>常规用法</h2>
            <div class="demo-component">
            <Button @click="toggle">toggle</Button>
            <Dialog v-model:visible="x"                     :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2">

            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>

            <template v-slot:content>
                <strong>内容</strong>
                <div>文字</div>
            </template>
            </Dialog>
            </div>
        <div class="demo-actions">
           <Button>查看代码</Button>
        </div>
        </div>
    <div class="demo">
        <h2>示例2</h2>
        <div class="demo-component">
        <Button @click="showDialog">show</Button>
        </div>
    <div class="demo-actions">
          <Button>查看代码</Button>
        </div>
    </div>

</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref, h} from 'vue'
import {openDialog} from '../lib/openDialog'

export default {
    components:{
        Dialog,
        Button
        },
    setup() {
        const x = ref(false)
        const toggle = ()=>{
            x.value = !x.value
        }
        const f1 = ()=>{
            return false
        }
        const f2 = ()=>{}
        const showDialog = ()=>{
            openDialog({
                title: h('strong',{},'标题'),
                content:'你好',
            })
        }
        return {x,toggle,f1,f2,showDialog}
    }
} 
</script>