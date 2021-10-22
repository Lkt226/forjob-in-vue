<template>
    <li class="flex m-1 w-full">
        <input class="hidden" type="checkbox" id="completeItem">
        <label class="text-b-line font-bold w-10/12" for="completeItem"
            :contenteditable="edit">{{text}}</label>

        <div class="dbutton w-max">
            <button class="bg-red z-10 relative dinamic-button">
                <img class="icon-button" src="https://firebasestorage.googleapis.com/v0/b/for-ambient.appspot.com/o/icons%2FPen.svg?alt=media&token=d245be53-4b09-4a61-93c4-787a2f662a47"
                    alt="editar seu item" @click="() => {this.editClick()}"> 
            </button>
            <button class="bg-red-dark secbutton">
                <img class="icon-button" src="https://firebasestorage.googleapis.com/v0/b/for-ambient.appspot.com/o/icons%2FTrash.svg?alt=media&token=ec743ca2-f6b6-4962-a838-2976d540501b"
                    alt="deletar seu item" >
            </button>
        </div>
    </li>
</template>

<script>
const user = require('../assets/services/menager')
export default {
    props:['content', 'editable'],
    data(){
        return{
            edit: false,
            text: this.content.text
        }
    },
    methods:{
        editClick(){
            if (this.edit === true) {
                this.edit = false    

            }else{
                this.edit = true
            }
            console.log(this.edit)  
        }
    }
}
</script>

<style scoped>
    .dbutton{
        width: fit-content;
    }
    .secbutton{
        @apply -ml-6 relative opacity-0 z-0;
        border-radius: 0 100% 100% 0;
    }
    .secbutton:hover{
        @apply -ml-4;
    }

    .dbutton:hover .secbutton{
        opacity: 1;
    }
</style>