<template>
  <div class="hello">
    <vm-header></vm-header>
    <tab/>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from '@/common/tab/tab'
import VmHeader from '@/components/header/vm-header'
export default {
  name: 'HelloWorld',
  components: { Tab, VmHeader },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
