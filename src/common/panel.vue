<template>
    <div :class="[panelClass, cname]">
        <h4>-{{title}}-</h4>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="less" scoped>
.panel {
    h4 {
        text-align: center;
    }
}
</style>



<script>
export default {
    props:{
        cname: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            panelClass: 'panel'

        }
    }
}
</script>
