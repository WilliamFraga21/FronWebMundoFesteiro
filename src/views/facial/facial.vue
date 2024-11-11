<template>
  <div>
    <h2>Captura de Rosto - Posições Diferentes</h2>
    <video ref="video" width="640" height="480" autoplay></video>
    <canvas ref="canvas" width="640" height="480" style="display: none;"></canvas>
    <button @click="capturarImagem">Capturar Foto</button>
    <img v-if="imagemCapturada" :src="imagemCapturada" width="640" height="480" alt="Imagem Capturada" />
    <button v-if="imagemCapturada && !posicoesCapturadas.length" @click="enviarImagem" :disabled="imagemEnviada">Enviar Imagem para Reconhecimento</button>
    <p v-if="posicoesCapturadas.length >= 5 && !imagemEnviada">5 Posições Diferentes Capturadas. Enviando para o Backend...</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store/store.js";
import * as faceapi from "face-api.js";

export default {
  data() {
    return {
      imagemCapturada: null,
      detections: [],
      posicoesCapturadas: [], // Armazena as diferentes posições de rosto
      imagemEnviada: false, // Flag para controlar o envio único
      intervaloDeteccao: null, // Para armazenar a referência do intervalo
    };
  },

  computed: {
    store() {
      return store;
    }
  },
  methods: {
    ...mapGetters(["StateToken"]),

    async iniciarCaptura() {
      try {
        await this.carregarModelos();
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = stream;
        this.iniciarDeteccao();
      } catch (error) {
        console.error("Erro ao acessar a câmera ou carregar os modelos:", error);
      }
    },

    async carregarModelos() {
      const MODEL_URL = 'https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js/weights/';

      try {
        await Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
        ]);
        console.log("Modelos carregados com sucesso!");
      } catch (error) {
        console.error("Erro ao carregar os modelos:", error);
        throw new Error("Falha ao carregar os modelos.");
      }
    },

    async iniciarDeteccao() {
      const video = this.$refs.video;

      // Armazena a referência do setInterval para permitir a interrupção mais tarde
      this.intervaloDeteccao = setInterval(async () => {
        if (video && video.srcObject) {
          try {
            if (!faceapi.nets.ssdMobilenetv1.isLoaded) {
              console.log("Modelo não carregado ainda.");
              return;
            }

            const detections = await faceapi.detectAllFaces(video, new faceapi.SsdMobilenetv1Options())
                .withFaceLandmarks()
                .withFaceDescriptors();

            this.detections = detections;

            const canvas = this.$refs.canvas;
            faceapi.matchDimensions(canvas, video);
            const resizedDetections = faceapi.resizeResults(detections, video);
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

            // Verifica se o rosto capturado é de uma posição nova
            if (detections.length > 0) {
              this.verificarPosicaoRosto(detections);
            }
          } catch (error) {
            console.error("Erro na detecção de rostos:", error);
          }
        }
      }, 100);
    },


    capturarImagem() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      context.drawImage(this.$refs.video, 0, 0, canvas.width, canvas.height);

      // Verifica se a imagem foi capturada corretamente
      const imagemBase64 = canvas.toDataURL("image/png");
      if (imagemBase64) {
        this.imagemCapturada = imagemBase64;
      } else {
        console.error("Erro ao capturar a imagem.");
      }
    },

    // Função para verificar se a posição do rosto é nova
    verificarPosicaoRosto(detections) {
      // Gerar uma "ID" para a posição do rosto baseada em características únicas
      const newPosition = detections.map(d => {
        return {
          x: d.detection.box.x,
          y: d.detection.box.y,
        };
      });

      // Checa se a posição já foi capturada
      const posicoesExistentes = this.posicoesCapturadas.map(p => JSON.stringify(p));
      const novaPosicao = JSON.stringify(newPosition);

      if (!posicoesExistentes.includes(novaPosicao)) {
        // Captura a imagem para a nova posição detectada
        this.capturarImagem();
        this.posicoesCapturadas.push(newPosition);
      }

      // Verifica se atingiu 5 posições diferentes
      if (this.posicoesCapturadas.length >= 5 && !this.imagemEnviada) {
        this.enviarImagem();
      }
    },

    async enviarImagem() {
      if (this.posicoesCapturadas.length < 5 || this.imagemEnviada) return;  // Evita envio repetido

      try {
        // Cria o corpo da requisição com os dados das posições capturadas e a imagem
        const payload = {
          dados_face: this.imagemCapturada,  // Enviando a imagem capturada em base64
          posicoes: this.posicoesCapturadas  // Enviando o array de posições capturadas
        };

        const response = await fetch('http://localhost:8000/api/cadastrarRosto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.store.getters.StateToken}`,
          },
          body: JSON.stringify(payload),  // Envia o payload com a imagem e as posições
        });

        const data = await response.json();
        console.log('Resultado do Reconhecimento:', data);

        // Marca como imagem enviada
        this.imagemEnviada = true;

        // Parar o processo de detecção de rosto
        if (this.intervaloDeteccao) {
          clearInterval(this.intervaloDeteccao); // Interrompe o intervalo de detecção
        }

        // Desabilitar a captura e a captura de novas imagens
        this.$refs.video.srcObject.getTracks().forEach(track => track.stop()); // Para o vídeo

      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
      }
    }


  },

  mounted() {
    this.iniciarCaptura();
  },
};
</script>

<style scoped>
video {
  border: 2px solid #ccc;
  margin-bottom: 10px;
}
</style>
