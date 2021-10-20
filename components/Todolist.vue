<template>
  <div class="">
    <header class="">
      <h3 class="text-x1">To do list</h3>
    </header>

    <ul class="m-1">
      <h2 class="text-2xl font-medium">{{name}}</h2>
      <li v-for="item in content" :key="item.id" class="flex m-1">
        <input class="hidden" type="checkbox" id="completeItem">
        <label class="text-lg font-bold border-b-2 min-w-max" for="completeItem">{{item.text}}</label>
      
        <button class="p-1 pl-2 pr-2 bg-yellow-500 text-gray-100 text-lg rounded-full focus:border-4 border-yellow-300">Edit</button>
        <button class="p-1 pl-2 pr-2 bg-red-500 text-gray-100 text-lg rounded-full focus:border-4 border-red-300">Delete</button>
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