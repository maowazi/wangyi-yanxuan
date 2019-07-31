<template>
    <div class="serch">
        <h1>网易严选</h1>
        <div><i class="iconfont icon-fangdajing"></i><p>搜索商品,共21616件好物品</p></div>
        <div>登录</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.serch{
    position: fixed;
    width: 100%;
    height: .4rem;
    background: #fff;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 3;
}
.serch div:nth-of-type(1){
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
    width: 1.8rem;
    height: 70%;
    border-radius: .06rem;
}
.serch h1{
    color: #000;
    font-weight: bold;
    font-size: .14rem;
}
.serch div:last-child{
    border: 1px solid #f40;
    padding: .02rem;
    border-radius: .06rem;
}
</style>
