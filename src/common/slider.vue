<template>
    <div :class="cname">
       <swiper :options="swiperOption" >
          <swiper-slide v-for="item in items" :key="item.src">
              <router-link :to="{name: item.href}">
                  <img :src="item.src" alt/>
              </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
       </swiper>
    </div>
</template>
<style lang="less" scoped>
.swiper {
    .slide {
        color: red;
        background: #ff0;
    }

}

</style>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {},
    props: {
        cname: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: []
        },
        swiperOption: {
            type: Object,
            default() {
                return {
                    notNextTick:false,
                    autoplay: true,
                    loop:true, 
                    pagination: {
                        el: '.swiper-pagination'
                    }   
                }
            }
        }
    },
    data(){
        return{
            // swiperOption: {
            //   notNextTick:true,
            //   autoplay: true,
            //   loop:true,     
            // }
        }
    }
}
</script>
