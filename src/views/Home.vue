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

  const userStore = useUserStore();
</script>

<style>

</style>