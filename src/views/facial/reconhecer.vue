<script>
import axios from "axios";
import * as faceapi from "face-api.js";

export default {
  data() {
    return {
      status: "",
      userId: null,
    };
  },
  methods: {
    // Iniciar o reconhecimento facial
    async startVideo() {
      const video = this.$refs.video;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      video.srcObject = stream;

      // Carregar o modelo de reconhecimento facial
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");

      this.detectFace(video);
    },

    // Detectar o rosto na imagem
    async detectFace(video) {
      const canvas = faceapi.createCanvasFromMedia(video);
      document.body.append(canvas);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();
        if (detections.length > 0) {
          canvas?.clear();
          faceapi.matchDimensions(canvas, video);
          const resizedDetections = faceapi.resizeResults(detections, video);
          canvas?.drawDetections(resizedDetections);
          canvas?.drawFaceLandmarks(resizedDetections);
        }
      }, 100);
    },

    // Capturar a imagem e enviar ao backend
    async capturarRosto() {
      const video = this.$refs.video;
      const detections = await faceapi.detectSingleFace(video).withFaceLandmarks().withFaceDescriptor();

      if (detections) {
        const faceDescriptor = detections.descriptor;

        // Enviar o rosto para o backend
        this.sendFaceForMatching(faceDescriptor);
      } else {
        this.status = "Nenhum rosto detectado";
      }
    },

    // Enviar a face para o backend e comparar com os registros no banco
    async sendFaceForMatching(faceDescriptor) {
      try {
        const response = await axios.post("/api/comparar_rosto", {
          imagem: faceDescriptor,
        });

        if (response.data.mensagem) {
          this.userId = response.data.user_id;
          this.status = "Rosto correspondente encontrado!";
        } else {
          this.status = "Nenhuma correspondência encontrada.";
        }
      } catch (error) {
        this.status = "Erro ao processar a solicitação.";
        console.error(error);
      }
    },
  },
  mounted() {
    this.startVideo();
  },
};
</script>


<template>
  <div>
    <h1>Reconhecimento Facial</h1>
    <video ref="video" width="640" height="480" autoplay></video>
    <button @click="capturarRosto">Capturar Rosto</button>

    <div v-if="status">
      <p>{{ status }}</p>
    </div>

    <div v-if="userId">
      <p>Rosto Correspondente Encontrado! ID do Usuário: {{ userId }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>