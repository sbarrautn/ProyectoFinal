<template>
  <h1>
    home de
  </h1>
  <p v-if="userStore.userData">
    {{ userStore.userData.email }}
  </p>
</template>

<script setup>
  import {useUserStore} from '../stores/user'
  import { useDatabaseStore } from '../stores/database';
 
  const userStore = useUserStore();
  const databaseStore = useDatabaseStore();

  databaseStore.getRoleUser();

 // databaseStore.getRoleUser();

  // console.log("estos son los usuarios:")
  // console.log(userStore.userData.uid)

  

  // console.log("estos es rel rol:")
  // console.log(databaseStore.user.uid)
//   const timeoutId = setTimeout(function(){
//     console.log(databaseStore.user[0].uid);
// }, 20);

  
  
  
</script>

<style>

</style>