<template>
    <div class="tab">
      <router-link to="/rank" class="tab-item">
         <span class="tab-link">排行</span>
      </router-link>
      <router-link to="/recommend" class="tab-item">
         <span  class="tab-link">推荐</span>
      </router-link>
      <router-link to="/singer" class="tab-item">
         <span class="tab-link">歌手</span>
      </router-link>
    </div>
</template>
<style lang="less" scoped>
.tab {
    display: flex;
    .tab-item {
        flex: 1;
        .tab-link {
            padding-bottom: 10px;
        }
         
    }
}
</style>

<script>
export default {

}
</script>
