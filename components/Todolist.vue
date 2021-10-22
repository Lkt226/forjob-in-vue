<template>
  <div class="">
    <header class="">
      <h3 class="text-x1">To do list</h3>
    </header>

    <input type="text">
    
    <button class="dinamic-button bg-purple">
      <img class="icon-button" src="https://firebasestorage.googleapis.com/v0/b/for-ambient.appspot.com/o/icons%2FAdd.svg?alt=media&token=d254e46d-dfd3-4529-8767-432df4bfb188" 
      alt="adicionar item" srcset="../static/Add.svg">
    </button>

    <ul class="m-1">
      <h2 class="text-2xl font-medium">{{name}}</h2>
      <TodoItem v-for="item in content" :key="item.id"
        :content="item"/>
    </ul>

  </div>
</template>

<script>
export default {
  props:['api'],
  data(){
    return{
      name: this.api.name,
      content: this.api.content,
    }
  }

}
</script>