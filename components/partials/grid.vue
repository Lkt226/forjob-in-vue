<template>
  <section>
    <component v-for="(module, index) in user.modules" :key="index" 
      :is="module.typeId" :api="module"/>
  </section>
</template>

<script>
const user = require('../../assets/services/menager')

export default {
  data(){
    return{
      user,
    }
  },
  components:{
  },
}
</script>

<style></style>
