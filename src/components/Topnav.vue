<template>
    <div class="topnav">
        <router-link to="/" class="logo" >
            <svg class="icon">
                <use xlink:href="#icon-huaduo"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <router-link to='/doc'>文档</router-link>
        </ul>
        <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
            <use xlink:href="#icon-caidan"></use>
        </svg>
        <!-- <span v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu"></span> -->
    </div>
</template>

<script lang='ts'>
import { inject ,Ref} from 'vue'
    export default {
        props:{
            toggleMenuButtonVisible:{
                type:Boolean,
                default:false,
            }
        },
        setup(){
            const menuVisible = inject<Ref<boolean>>('menuVisible') //get
            const toggleMenu = ()=>{
                menuVisible.value = !menuVisible.value
            }
            return {toggleMenu}
        }
    }
</script>

<style lang='scss' scoped>
$color: #007974;

.topnav{
    color: $color;
    display: flex;
    padding: 16px;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px){
        >.menu{display: none;}
        // >.logo{margin:0 auto;}
        >.toggleAside{display: inline-block;}
    }
    > .logo {
        max-width: 6em;
        margin-right: auto;
          >svg {
            width: 32px;
            height: 32px;
        }
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
        margin: 0 20em;
        }
      }
    > .toggleAside{
        width: 24px;
        height: 24px;
        // background:$color;
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        }
    }
</style>