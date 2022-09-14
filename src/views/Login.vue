<template>
  <div>
    <h1>
      Login
    </h1>
    <form @submit.prevent="handleSumit">
      <input tipe="email" placeholder="Email" v-model.trim="email">
      <input tipe="password" placeholder="Contraseña" v-model.trim="password">
      <button class="sumit" :disabled="userStore.loadingUser"> Iniciar Sesión</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import {useUserStore} from '../stores/user'

  const email = ref('');
  const password = ref('');
  const userStore = useUserStore();

  const handleSumit = () => {
    if(!email.value || !password.value > 5){
      return alert('Debe completar los campos Usuario y Contraseña');
    }
    userStore.loginUser(email.value,password.value);

    // console.log('procesando form');
    // console.log(email.value);
    // console.log(password.value);
  }
</script>

<style>

</style>