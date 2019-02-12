<template>
    <div :class="[btnClass, cname]">
        <!-- 这里传入响应的按钮文本 -->
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        cname: {
            type: String,
            default: ''
        }
    },
    data() {
        return{
            btnClass: 'btn'
        }
    }
}
</script>
