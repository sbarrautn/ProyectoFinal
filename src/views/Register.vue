<template>
   <section class="gradient-custom">
      <div class="ml-3 mr-3 mt-2">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">


            <form @submit.prevent="handleSumit">

              <h2 class="fw-bold mb-4">Registrar Nuevo Usuario</h2>
              
              <div class="form-outline form-white mb-3">
                <input type="text" id="txtNombre" class="form-control form-control-lg" placeholder="Nombre" v-model.trim="nombre"/>
              </div>
              <div class="form-outline form-white mb-3">
                <input type="text" id="txtApellido" class="form-control form-control-lg" placeholder="Apellido" v-model.trim="apellido"/>
              </div>

              <div class="form-outline form-white mb-3">
                <input type="text" id="txtCelular" class="form-control form-control-lg" placeholder="Teléfono Celular" v-model.trim="telefono"/>
              </div>

              <div class="form-outline form-white mb-3">
                <input type="text" id="txtDNI" class="form-control form-control-lg" placeholder="DNI" v-model.trim="dni"/>
              </div>

              <div class="form-outline form-white mb-3">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Correo Electrónico" v-model.trim="email"/>
              </div>

              <div class="form-outline form-white mb-3">
                <input type="password" id="password" class="form-control form-control-lg" placeholder="Contraseña" name="password" autocomplete="on" v-model.trim="password"/>
              </div>

              <div class="form-outline form-white mb-3">
                <input type="password" id="repeatpassword" class="form-control form-control-lg" placeholder="Repetir Contraseña" name="repeatpassword" autocomplete="on" v-model.trim="repeatpassword"/>
                <p v-if="password !== repeatpassword" style="color: red;">Las contraseñas no coinciden</p>
              </div>

              <h6 class="form-check-label " for="exampleRadios1">
                <ins> Selecione su perfil de usuario: </ins>
                </h6>
              <div>
                <div class="form-check ">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="rdoPropietario" v-bind:value=false v-model="rbtPrestador" checked>
                  <label class="form-check-label " for="exampleRadios1">
                    Propietario
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

                  <div class="form-outline form-white mb-3" v-if="rbtAplicador === true">
                    <input type="text" id="txtHabilitacion" class="form-control form-control-lg" placeholder="Ingrese Codigo de Habilitación" v-model.trim="habilitacion"/> 
                  </div>
              </div>

              <div>
                <button class="btn btn-outline-light btn-lg mt-2 px-5" :disabled="classDisableBtn" type="submit" v-bind="handleSumit">Registrar Usuario</button>
              </div>
                          
            </form>

          </div>
        </div>
      </div>
   </section>
  

</template>

<script setup>
  import { ref, computed } from 'vue';
  import {useUserStore} from '../stores/user';

  const email = ref('');
  const password = ref('');
  const repeatpassword = ref('');
  const rbtPrestador = ref(false);
  const rbtAplicador = ref(false);
  
  const nombre = ref('');
  const apellido = ref('');
  const telefono = ref('');
  const dni = ref('');
  const habilitacion = ref('');

  const userStore = useUserStore();


  const classDisableBtn = computed(() => {
     if(password.value !== repeatpassword.value || 
        email.value === 0 || 
        nombre.value === "" ||
        apellido.value === ""||
        dni.value === ""||
        telefono.value === "" 
        ){
       return true;
     }
    //  if(password.value === repeatpassword.value || email.value !== 0){
    //    return false;
    //  }
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
    if(habilitacion.value === "" && rbtAplicador.value === true){
      return alert('Si es aplicados de fitosanitarios debe ingresar su habilitación');
    }
    userStore.registerUser(email.value,password.value);

    // console.log('procesando form');
    // console.log(email.value);
    // console.log(password.value);
  }
  
</script>

<style>

</style>