<template>
  <div>
    <video ref="video" autoplay></video>
    <canvas ref="canvas" style="display: none;"></canvas>
    <button @click="capturarImagem">Capturar Imagem</button>
    <button @click="enviarImagem">Enviar para o Backend</button>
    <button @click="reconhecerRosto">Reconhecer no Backend</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store/store.js";

export default {
  data() {
    return {
      imagemCapturada: null, // Guardar a imagem capturada em Base64
    };
  },

  computed: {
    store() {
      return store;
    }
  },
  methods: {
    ...mapGetters(["StateToken"]),

    capturarImagem() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Converte a imagem para Base64
      this.imagemCapturada = canvas.toDataURL("image/jpeg");

      // Remove o prefixo data:image/jpeg;base64,
      this.imagemCapturada = this.imagemCapturada.split(",")[1];


    },

    async enviarImagem() {
      if (!this.imagemCapturada) {
        alert("Nenhuma imagem capturada!");
        return;
      }

      // Enviar para o backend
      const response = await fetch("http://localhost:8000/api/cadastrarfoto", {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
                    'Authorization': `Bearer ${this.store.getters.StateToken}`
        },
        body: JSON.stringify({
          imagem: this.imagemCapturada,  // Corrigido para "imagem" (não "image")

        }),
      });

      // Verifica a resposta do backend
      const result = await response.json();
      console.log(result);


    },





    async reconhecerRosto() {


      const response = await fetch("http://localhost:8000/api/reconhecer", {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
          'Authorization': `Bearer ${this.store.getters.StateToken}`
        },
        body: JSON.stringify({
          imagem: this.imagemCapturada, // Imagem capturada em Base64
          prestador_has_evento_evento_id: 1,
          prestador_has_evento_id: 1,
          prestador_has_evento_prestador_id: 1,
        }),
      });

       await response.json();

    }






  },

  mounted() {
    // Acessa a webcam
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.$refs.video.srcObject = stream;
    });
  },
};
</script>

<style scoped>
video {
  border: 2px solid #ccc;
  margin-bottom: 10px;
}
</style>
