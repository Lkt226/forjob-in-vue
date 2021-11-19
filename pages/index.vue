<template>
  <div>
    <h1>GRID</h1>
    <h3> {{user().name}} </h3>
    <Grid/>
  </div>
</template>
<script>
import Grid from '../components/partials/grid.vue'
const api = require('../assets/services/menager')

export default {
  components:{
    Grid
  },
  data(){
    return{
      update: this.$forceUpdate(),
      api(){ 
        return api.user 
      },
      user(){
        api.getUser().then(res =>{
          if(res !== this.api()) {
            // this.$forceUpdate()
            console.log(res, this.api())
          }
        })
        return this.api()
      }
    }
  },
  computed:{
   
  }
}
</script>