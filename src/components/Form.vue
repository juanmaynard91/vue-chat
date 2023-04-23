<template>
  <footer class="navbar navbar-expand-lg bg-dark footer">
    <form @submit.prevent="enviarMensaje">
      <input type="text" placeholder="Mensaje" spellcheck="true" v-model.trim="mensaje" />
    </form>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { db, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

const mensaje = ref("");

const enviarMensaje = async () => {
  try {
    if (mensaje.value === "") {
      Swal.fire({
        text: "No puedes ingresar un mensaje vacio!",
        icon: "error",
      });
    } else {
      // currentUser : trae la session activa del usuario (para no andar haciendo props, firebase tiene el currentUser)
      await addDoc(collection(db, "chats"), {
        text: mensaje.value,
        time: new Date().toLocaleTimeString(),
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
      });
    }
  } catch (error) {
    console.log(error);
  }
  mensaje.value = "";
};
</script>

<style>
@import "../assets/estilos.css";
</style>