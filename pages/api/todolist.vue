<template>
  <pre>{{todolist()}}</pre>
</template>

<script>
export default {
    data(){
        return{
            todolist(request, response){
                const list = {
                    item1: 1,
                    item2: 2,
                    item3: 3,
                }

                response = JSON.stringify(list)
                return response
            }
        }
    }
}
</script>

<style>

</style>