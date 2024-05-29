<!-- скрипт -->
<script setup>
import { ref, watch } from "vue";
const text = ref('');
const gender = ref('');

const serverUrl = 'https://api.genderize.io';
// const URL = `${serverUrl}?name=${text}`;


watch(text, (URL) => {
    let URL = `${serverUrl}?name=${text}`; 
})


fetch(URL)
        .then(promise => promise.json())
        .then(result => {
            if (result.gender === 'male') {
                gender.value = 'Мужской'
            } else {
                gender.value = 'Женский'
            }
        })
    
</script>

<!-- шаблон -->
<template>
      <div>
        
          <form><input v-model="text"></form>
          <p>Ваш пол: {{gender}}</p>
          <p>{{ text }}</p>
      </div>
</template>

<!-- стили -->
<style scoped>
button {
  font-weight: bold;
}
</style>
