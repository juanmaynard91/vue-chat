<template>
  <div ref="chatRef">
    <div v-for="item in mensajes" :key="item.id" class="card mb-3 mt-3" :class="item.uid === userChat.uid ? 'mi-mensaje' : 'otro-mensaje'">
      <div class="card-body">
        <h5 class="card-title">{{ item.displayName }}</h5>
        <p class="card-text">{{ item.text }}</p>
        <p class="card-text"><small>{{ item.time }}</small></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, watchEffect } from "vue";
import { db, auth } from "../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const userGoogle = inject("userGoogle");

const mensajes = ref([]);
//const userChat = ref(auth.currentUser); // trae la informacion del usuario autenticado en mi sitio web
const userChat = ref({ uid: "umeAFZhnrGZMr9NfgTWnh4xtTKX2" }); //mi uid, lo hice asi porque auth.currentUser === null y no me servia
const chatRef = ref(null); // se inicializa en nulo para referenciar con el HTML en el template ref="chatRef"

watchEffect((onCleanup) => {
  if (userGoogle.value) {
    const q = query(collection(db, "chats"), orderBy("time"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          //console.log("mensaje : ", change.doc.id, change.doc.data()); // change.doc.id : es el id del chat / change.doc.data() : es la info que agrego en el chat
          mensajes.value.push({
            id: change.doc.id,
            ...change.doc.data(), //hago una copia de lo que esta en firebase para mostrarlo en la pagina
          });

          setTimeout(() => {
            if (chatRef.value !== null) {
              window.scrollTo(0, chatRef.value.scrollHeight); // con esto le digo que aparesca abajo automaticamente
            }
          }, 500);
        }
      });
    });
    onCleanup(unsubscribe); // limpieza del observable para que no se repita 2 veces lo escrito en el chat
  }
});
</script>

<style>
@import "../assets/estilos.css";
</style>