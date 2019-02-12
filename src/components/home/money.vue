<template>
    <panel class="panel" title="理财精选">
     <div class="content">
         <dl class="item" v-for="item in items" :key="item.title">
             <dt class="title"></dt>
             <dt>{{item.title}}<span class="subtitle">{{item.subtitle}}</span></dt>
             <dd>{{item.rate}}</dd>
             <dd>{{item.text}}</dd>
         </dl>

     </div>
    </panel>
</template>
<script>
import Panel from '@/common/panel.vue';
export default {
    components: { Panel},
        data(){
            return {
                items: [
                    {
                        title: '长乐盈',
                        subtitle: '180天可质押',
                        rate: '5.80%',
                        text: '近1年历史年化投资回报率'
                    },
                    {
                        title: '京智0号',
                        subtitle: '大数据赋能',
                        rate: '5.7%',
                        text: '近7日年化收益'
                    },
                     {
                        title: '小白基金',
                        subtitle: '超短期',
                        rate: '6.8%',
                        text: '近1月历史年化投资回报率'
                    },
                     {
                        title: '建信养老飞益鑫',
                        subtitle: '1000起投',
                        rate: '6.5%',
                        text: '近7日年化收益'
                    }
                ]

            }
        }

}
</script>
