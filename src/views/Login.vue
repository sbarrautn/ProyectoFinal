<template>
<!--nuevoi login-->
    <section class="gradient-custom">
      <div class="ml-3 mr-3 mt-2">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <form @submit.prevent="handleSumit">

              <h2 class="fw-bold mb-2">Iniciar Sesión</h2>
              <h4 class="text-white-50 mb-5">Ingrese su correo y contraseña</h4>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Correo Electrónico" v-model.trim="email"/>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="password" class="form-control form-control-lg" placeholder="Contraseña" name="password" autocomplete="on" v-model.trim="password"/>
              </div>


              <button class="btn btn-outline-light btn-lg px-5" :disabled="!email || !password || password.length < 6" type="submit">Login</button>

            </form>
          </div>
        </div>
      </div>

    </section>
<!--Viejo login
    <h1>
      Login
    </h1>
    <form @submit.prevent="handleSumit">
      <input type="email" placeholder="Email" v-model.trim="email">
      <input type="password" placeholder="Contraseña" v-model.trim="password">
      <button class="sumit" :disabled="userStore.loadingUser"> Iniciar Sesión</button>
    </form>
    -->

</template>

<script setup>
  import { ref, computed} from 'vue';
  import {useUserStore} from '../stores/user';


  const email = ref('');
  const password = ref('');
  const userStore = useUserStore();


  const handleSumit = () => {
    if(!email.value || !password.value || password.value.length < 6){
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