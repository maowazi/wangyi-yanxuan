<template>
    <div class="leftnav">
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
    name:"leftnav"
}
</script>
<style scoped>
.leftnav{
    height: 100%;
}
.scroll{
    height: 100%;
}
</style>
