<template>
  <div class="">
    <header class="">
      <h3 class="text-x1">To do list</h3>
    </header>

    <input type="text">
    <button class="bg-purple">
      <img class="icon-button" src="https://firebasestorage.googleapis.com/v0/b/for-ambient.appspot.com/o/icons%2FAdd.svg?alt=media&token=d254e46d-dfd3-4529-8767-432df4bfb188" 
      alt="adicionar item" srcset="../static/Add.svg">
    </button>

    <ul class="m-1">
      <h2 class="text-2xl font-medium">{{name}}</h2>
      <li v-for="item in content" :key="item.id" class="flex m-1">
        <input class="hidden" type="checkbox" id="completeItem">
        <label class="text-lg font-bold border-b-2 min-w-max" for="completeItem">{{item.text}}</label>
      
        <button class="bg-red">
          <img class="icon-button" src="https://firebasestorage.googleapis.com/v0/b/for-ambient.appspot.com/o/icons%2FPen.svg?alt=media&token=d245be53-4b09-4a61-93c4-787a2f662a47" 
          alt="editar seu item" srcset="../static/Pen.svg"> 
        </button>
        <button class="bg-red-dark">
          <img class="icon-button" src="https://firebasestorage.googleapis.com/v0/b/for-ambient.appspot.com/o/icons%2FTrash.svg?alt=media&token=ec743ca2-f6b6-4962-a838-2976d540501b" 
          alt="deletar seu item" srcset="../static/Trash.svg">
        </button>
      </li>
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