<template>
    <div class="rightnav">
        <scroll class="scroll">
            <ul>
                <li v-for="item in 100">
                    {{item}}
                </li>
            </ul>
        </scroll>
    </div>
</template>
<script>
export default {
    name:"rightnav"
}
</script>
<style scoped>
.rightnav{
    height: 100%;
}
.scroll{
    height: 100%;
}
</style>
