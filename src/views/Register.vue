<template>

 <section class="gradient-custom">   
      <div class="ml-3 mr-3 mt-2">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <form @submit.prevent="handleSumit">

              <h2 class="fw-bold mb-3">Registrar Nuevo Usuario</h2>
              <h4 class="text-white-50 mb-4">Ingrese su correo y contraseña</h4>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Correo Electrónico" v-model.trim="email"/>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="password" class="form-control form-control-lg" placeholder="Contraseña" name="password" autocomplete="on" v-model.trim="password"/>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="repeatpassword" class="form-control form-control-lg" placeholder="Repetir Contraseña" name="repeatpassword" autocomplete="on" v-model.trim="repeatpassword"/>
              </div>
              
              

              <div>
                <div class="form-check ">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="rdoPropietario" v-bind:value=false v-model="rbtPrestador" checked>
                  <label class="form-check-label " for="exampleRadios1">
                    Propietario
                    {{rbtPrestador}} ; {{rbtAplicador }}
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="rdoPrestador" v-bind:value=true v-model="rbtPrestador">
                  <label class="form-check-label" for="exampleRadios2">
                    Prestador de Servicio
                  </label>
                  <div class="mb-2 mt-1" v-if="rbtPrestador === true">
                    <input class="form-check-input" type="checkbox" id="chkFitosanitarios" v-bind:value=true v-model="rbtAplicador">
                    <label class="form-check-label" for="flexCheckDefault">
                      ¿Usted es aplicador de fitosanitarios?
                    </label>
                  </div>
                </div>
              </div>


              <button class="btn btn-outline-light btn-lg mt-1 px-5" :disabled="classEnableBtn" type="submit" v-bind="handleSumit">Registrar Usuario</button>
            
            </form>

          </div>
        </div>
      </div>
 
  
</section>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import {useUserStore} from '../stores/user'

  const email = ref('');
  const password = ref('');
  const repeatpassword = ref('');
  const rbtPrestador = ref(false);
  const rbtAplicador = ref(false);

  const userStore = useUserStore();


  const classEnableBtn = computed(() => {
     if(password.value.length < 6 || password.value !== repeatpassword.value || email.value === 0){
       return true;
     }
     if(password.value === repeatpassword.value || email.value !== 0){
       return false;
     }
    })

  const handleSumit = () => {
    if(!email.value || !password.value){
      return alert('Debe completar los campos Usuario y Contraseña');
    }
    if(password.value != repeatpassword.value){
      return alert('Las contraseñas deben ser iguales');
    }
    if(password.value.length < 6){
      return alert('La contraseña debe contener al menos 6 caracteres');
    }
    userStore.registerUser(email.value,password.value);

    // console.log('procesando form');
    // console.log(email.value);
    // console.log(password.value);
  }
  
</script>

<style>

</style>