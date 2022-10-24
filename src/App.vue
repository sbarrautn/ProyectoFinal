<template>
  <div>
    <!-- video con un nav mucho mejor https://www.youtube.com/watch?v=yWJ8bx8uZWE -->
    <div class="bg-dark mt-2" style="border-bottom-left-radius:1rem; border-bottom-right-radius: 1rem; border-top-left-radius:1rem; border-top-right-radius: 1rem;">
      <div class="collapse" id="navbarToggleExternalContent" style="border-top-left-radius:1rem; border-top-right-radius: 1rem;">
        <div class="bg-dark p-2" style="border-top-left-radius:1rem; border-top-right-radius: 1rem;">
        <!--    <div class="h4" ml-2 mr-2>
                  <router-link class="text-white" to="/" v-if="userStore.userData" > Home</router-link>
                </div>
        -->
        <div class="text-white h4" ml-2 mr-2>
          <router-link class="text-white" to="/dashboard" v-if="userStore.userData"> Dashboard</router-link>
        </div> 
        <div class="text-white h4" ml-2 mr-2> 
          <router-link class="text-white" to="/login" v-if="!userStore.userData" ml-2 mr-2> Login</router-link>
        </div>
        <div class="text-white h4" ml-2 mr-2>
          <router-link class="text-white" to="/register" v-if="!userStore.userData" ml-2 mr-2 > Registrar</router-link>
        </div>
          <button @click="userStore.logoutUser()" v-if="userStore.userData" ml-2 mr-2 style=""> Logout</button>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark" style="border-bottom-left-radius:1rem; border-bottom-right-radius: 1rem; border-top-left-radius:1rem; border-top-right-radius: 1rem;">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <h6 style="text-align:right;" v-if="userStore.userData">
          Bienvenido: {{ userStore.userData.email }}
        </h6>
        </div>
      </nav>
      <div class="mt-1"></div>

    </div>
  </div>
<router-view></router-view>
</template>

<script setup>
import { useUserStore } from './stores/user';

const userStore = useUserStore();
</script>