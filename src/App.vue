<template>
  <header>
    <nav class="navbar bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <img src="./assets/logo.png" alt="" width="50" height="50" loading="lazy"/>
        <div class="botones">
          <button class="btn" @click="iniciarConGoogle" v-if="!userGoogle">Acceder</button>
          <button class="btn" @click="salirConGoogle" v-else>Salir</button>
        </div>
      </div>
    </nav>
  </header>

  <!-- para que ocupe el 100% de la pagina-->
  <main class="container min-vh-100">
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
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,} from "firebase/auth";

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
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
  box-sizing: border-box;
}

html,
body {
  background: #202020;
}

::-webkit-scrollbar {
  width: 15px;
  background: linear-gradient(to top, #8e9eab, #eef2f3);
}
::-webkit-scrollbar-track {
  background: linear-gradient(to top, #8e9eab, #eef2f3);
  border-radius: 15px;
}
::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 15px;
}

header {
  top: 0;
  z-index: 1;
  position: sticky;
}

.session-title {
  text-align: center;
  margin-top: 5%;
  color: #42b983;
}

.btn {
  padding: 0.8em 1.8em;
  border: 2px solid #42b983;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: #fff;
}
.btn::before {
  content: "";
  width: 0;
  height: 300%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: #42b983;
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}
.btn:hover::before {
  width: 105%;
}
.btn:hover {
  color: #fff;
}
</style>
