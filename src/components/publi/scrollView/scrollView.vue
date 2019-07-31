<template>
    <div class="scroll" ref="scroll">
            <slot/>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
export default {
    name:"scroll",
    mounted() {
        let scroll = new BScroll(this.$refs.scroll,{
            scrollX:true,
            scrollY:true,
            click: true,
            tap:true
        })
    }
}
</script>
<style scoped>
.scroll{
    overflow: hidden;
}
</style>
