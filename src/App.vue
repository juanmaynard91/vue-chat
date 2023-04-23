<template>
  <header>
    <nav class="navbar bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <img src="./assets/logo.png" alt="logo de vue.js" loading="lazy" />
        <div>
          <button class="btn-app" @click="iniciarConGoogle" v-if="!userGoogle">Acceder</button>
          <button class="btn-app" @click="salirConGoogle" v-else>Salir</button>
        </div>
      </div>
    </nav>
  </header>

  <!-- para que ocupe el 100% de la pagina-->
  <main class="container">
    <Chat v-if="userGoogle" />

    <div v-else>
      <h1 class="session-title">Iniciar sesion para ver los chats</h1>
    </div>
  </main>

  <Form v-if="userGoogle" />
</template>

<script setup>
import Form from "../src/components/Form.vue";
import Chat from "../src/components/Chat.vue";
import { ref, provide } from "vue";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const userGoogle = ref(false);

provide("userGoogle", userGoogle);

const iniciarConGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    //console.log(user);
  } catch (error) {
    console.log(error);
  }
};

const salirConGoogle = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, (user) => {
  //console.log(user);
  userGoogle.value = user; // es un observador con esto verifico que el usuario este registrado o no
});
</script>

<style>
@import "./assets/estilos.css";
</style>
