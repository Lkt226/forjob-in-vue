<template>
  <pre>{{todolist()}}</pre>
</template>

<script>
export default {
    data(){
        return{
            todolist(){
                const list = {
                    item1: 1,
                    item2: 2,
                    item3: 3,

                }

                return list
            }
        }
    }
}
</script>

<style>

</style>