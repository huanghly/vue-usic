<template>
    <div :class="[panelClass, cname]">
        <h4>{{title}}</h4>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
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
