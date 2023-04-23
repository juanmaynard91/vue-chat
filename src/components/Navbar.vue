<template>
  <header>
    <nav class="navbar bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <img src="../assets/logo.png" alt="" width="30" height="30" />
        <div class="botones">
          <button class="btn" @click="iniciarConGoogle" v-if="!userGoogle">Acceder</button>
          <button class="btn" @click="salirConGoogle" v-else>Salir</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase";

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const userGoogle = ref(false);

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
.btn {
  background-color: transparent;
  border: 2px solid #42b983;
  color: #fff;
  font-family: inherit;
  font-size: 16px;
  overflow: hidden;
  padding: 0.8em 1.8em;
  position: relative;
  text-align: center;
  transition: 0.3s;
  z-index: 1;
}
.btn::before {
  background: #42b983;
  content: "";
  display: block;
  height: 300%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: 0.5s ease;
  width: 0;
  z-index: -1;
}
.btn:hover::before {
  width: 105%;
}
.btn:hover {
  color: #fff;
}
</style>