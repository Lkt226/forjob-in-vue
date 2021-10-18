<template>
  <pre>
    <h1>Home</h1>
    <p>{{todoJson()}}</p>
    <NuxtLink to="/api/todolist"> teste </NuxtLink>
  </pre>
</template>
<script>
export default {
  data(){
    return{
      async todoJson(){
        const response = await fetch('http://localhost:3000/api/todoList') // 'https://forjob.vercel.app/api/todolist'
        //const data = await response.json()
        console.log(response)
        return data
      },
    }
  }
}
</script>