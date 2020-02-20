<template>
  <div>
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './header'
import myFooter from './footer'

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
    myHeader,
    myFooter
  }
}
</script>

<style scoped>

</style>
