<template>
  <div>
    <h1>GRID</h1>
    <h3> {{user}} </h3>
    <Grid/>
  </div>
</template>
<script>
import Grid from '../components/partials/grid.vue'
const user = require('../services/menager').name

export default {
  components:{
    Grid
  },
  data(){
    return{
      user
    }
  }
}
</script>