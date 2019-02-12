<template>
    <div>
        <Slider class="swiper1" :items="item"/>
    </div>
</template>
<style lang="less" scoped>
.swiper1 {
    .swiper-container {
        
    }
}
</style>

<script>
import Slider from '@/common/slider.vue'
export default {
    components: {Slider},
    data() {
        return {
            item: [
                {
                    href: 'recommend',
                    src: 'http://img12.360buyimg.com/jrpmobile/jfs/t1/10219/37/10193/38106/5c5258c8Eac6f81e8/8bee6874591b5bf4.jpg?width=750&height=320'
                },
                {
                    href: 'recommend',
                    src: 'http://img12.360buyimg.com/jrpmobile/jfs/t1/29274/25/5216/37518/5c3bf4f7E1a6c67cc/7a4bc2851b53fece.jpg?width=750&height=320'
                },
                {
                    href: 'recommend',
                    src: 'http://img12.360buyimg.com/jrpmobile/jfs/t1/15510/10/5298/69592/5c3bf522E820edd64/de08228d007fbd92.jpg?width=750&height=320'
                }
            ]
        }
    }

}
</script>
