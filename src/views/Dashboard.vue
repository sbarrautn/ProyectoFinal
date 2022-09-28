<template>
   
      <div class="ml-3 mr-3 mt-2">
        <h6 style="text-align:right;" v-if="userStore.userData">
          Bienvenido: {{ userStore.userData.email }}
        </h6>
        <div style="display: flex !important;">

          <div class="card" style="width:300px; height:200px; margin-left:10px; margin-right:10px;">
              <div class="card-body" style="height:70%; background-color: lightsteelblue;">
                  <h5 class="card-title">Lista de Tareas</h5>
                  <p class="card-text">Aqui se pueden observar las tareas pendientes de realizar y ya realizadas </p>
                  <a href="#" class="btn btn-dark">Acceder</a>
              </div>
          </div>
          <div class="card" style="width:300px; height:200px; margin-left:10px; margin-right:10px;">
              <div class="card-body" style="height:70%; background-color: lightsteelblue;">
                  <h5 class="card-title">Lista de Campos</h5>
                  <p class="card-text">Aqui se pueden explorar cada una de las extenciones de tierra trabajadas</p>
                  <a href="#" class="btn btn-dark">Acceder</a>
              </div>
          </div>
        </div>
      </div>

</template>

<script setup>
  import {useUserStore} from '../stores/user'

  const userStore = useUserStore();
</script>

<style>

</style>