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
.footer {
  bottom: 0;
  align-items: center;
  display: flex;
  font-size: 2rem;
  height: 4rem;
  justify-content: center;
  position: sticky;
  width: 100%;
}

form {
  width: 99%;
}

input {
  background-color: rgb(28, 28, 30);
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
  color: #fff;
  font-size: 80%;
  outline: none;
  padding: 0.4vw;
  transition: 0.4s;
  width: 100%;
}
input:hover {
  box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
}
input:focus {
  box-shadow: 0 0 0 0.15vw #42b983;
}
input[type="text"]::placeholder {
  text-indent: 5px;
}

@media (width: 412px) {
  form {
    width: 95%;
  }
  input {
    font-size: 90%;
  }
}
</style>