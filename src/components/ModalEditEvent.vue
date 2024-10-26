<script >
import Multiselect from 'vue-multiselect';
import {mapActions, mapGetters} from "vuex";
import store from "@/store/store.js";

export default {
  components: { Multiselect },
  props:{
    datamodal: Array,
    id: String
  },


  computed: {
    store() {
      return store;
    }
  },
  data() {
    return {

      errorMessage: null,
      erroIf: false,
      passwordError: null,
      cepError: null, // Novo estado para erros de CEP
      userData: {
        nameEvent: "dwadwadwadwada",
        data: "",
        tipoEvento: "",
        quantidadeConvidados: null,
        quantidadeFuncionarios: null,
        statusEvento: 'ativo',
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        descricao: "",
        selectedProfessionsWithQuantity: []

      },
      cep: "",
      termsAccepted: false,




      selectedProfessions: [],
      professions: [
        { value: 'dev', text: 'Desenvolvedor', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
        { value: 'designer', text: 'Designer', icon: 'https://cdn-icons-png.flaticon.com/512/732/732231.png' },
        { value: 'pm', text: 'Gerente de Projeto', icon: 'https://cdn-icons-png.flaticon.com/512/732/732228.png' },
        { value: 'qa', text: 'Analista de QA', icon: 'https://cdn-icons-png.flaticon.com/512/732/732207.png' }
      ],
      selectedProfessionsWithQuantity: []
    };
  },

  watch: {
    cep(newCep) {
      if (newCep.length < 8) {
        this.clearAddressFields();
        this.cepError = "O CEP deve ter 8 dígitos.";
      } else if (newCep.length === 8) {
        this.handleCep();
      }
    }
  },


  async mounted() {
    await this.getprofessions()

    this.userData.nameEvent = this.datamodal.evento.nomeEvento;
    this.userData.data = this.datamodal.evento.data;
    this.userData.tipoEvento = this.datamodal.evento.tipoEvento;
    this.userData.quantidadeConvidados = this.datamodal.evento.quantidadePessoas;
    this.userData.quantidadeFuncionarios = this.datamodal.evento.quantidadeFuncionarios;
    this.userData.statusEvento = this.datamodal.evento.statusEvento;
    this.userData.endereco = this.datamodal.localidadeEvento.endereco;
    this.userData.bairro = this.datamodal.localidadeEvento.bairro;
    this.userData.cidade = this.datamodal.localidadeEvento.cidade;
    this.userData.estado = this.datamodal.localidadeEvento.estado;
    this.userData.descricao = this.datamodal.evento.descricaoEvento;

    const dadosAtualizados = this.datamodal.profissao.map(item => ({
      name: item.profissao,          // Renomeia "profissao" para "name"
      id: item.profissao_id,
      quantidade: item.quantidade,
      iconURL: item.iconURL
    }));
console.log(dadosAtualizados)
    this.userData.selectedProfessionsWithQuantity = dadosAtualizados;

  // for (let i = 1; i<dadosAtualizados.length; i++){
  //   this.addProfession(dadosAtualizados[i]);
  // }



  },


  methods: {
    ...mapActions([
      "CriarEvento", "clearAddressData","getProfessions"]),
    ...mapGetters(["GetProfessions"]),







    async getprofessions() {
      try {
        return await this.getProfessions();
      } catch (error) {
        console.log(error)
      }
    },



    async handleCep() {
      if (this.cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
          const data = await response.json();
          if (data.erro) {
            this.clearAddressFields();
            this.cepError = "CEP inválido."; // Define o erro de CEP inválido
          } else {
            this.cepError = null; // Limpa a mensagem de erro se o CEP for válido
            this.userData.estado = data.uf;
            this.userData.cidade = data.localidade;
            this.userData.bairro = data.bairro;
            this.userData.endereco = data.logradouro;
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
          this.cepError = "Erro ao buscar o CEP. Tente novamente.";
        }
      }
    },
    clearAddressFields() {
      this.userData.estado = "";
      this.userData.cidade = "";
      this.userData.bairro = "";
      this.userData.endereco = "";
    },










    addProfession(profession) {
      const existing = this.userData.selectedProfessionsWithQuantity.find(
          item => item.id === profession.id
      );
      if (!existing) {
        this.userData.selectedProfessionsWithQuantity.push({
          ...profession,
          quantidade: 1
        });
      }
    },
    increaseQuantity(item) {
      item.quantidade++;
    },
    decreaseQuantity(item) {
      if (item.quantidade > 1) {
        item.quantidade--;
      }
    },
    removeProfession(profession) {
      const index = this.userData.selectedProfessionsWithQuantity.findIndex(
          item => item.id === profession.id
      );
      if (index !== -1) {
        this.userData.selectedProfessionsWithQuantity.splice(index, 1);
      }
    },
    removeProfessionByIndex(index) {
      this.userData.selectedProfessionsWithQuantity.splice(index, 1);
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<template>
  <div class="modal fade" :id="'staticBackdrop'+id" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Alisan Parque Show Ana Castela</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="">

{{datamodal}}
            <div class="row g-3 mt-1">
              <div class="d-flex">
                <input type="text" class="form-control ms-1 me-1" placeholder="Nome do Evento" aria-label="First name" id="nameEvent" required v-model="userData.nameEvent" >
                <input type="number" class="form-control ms-1 me-1" placeholder="Quantidade de convidados" aria-label="First name" id="quantidadeConvidados" required v-model="userData.quantidadeConvidados">
                <input type="number" class="form-control ms-1 me-1" placeholder="Quantidade de funcionarios" aria-label="First name" id="quantidadeFuncionarios" required v-model="userData.quantidadeFuncionarios">
                <input type="date" class="form-control ms-1 me-1" placeholder="Data do Evento" aria-label="First name" id="data" required v-model="userData.data">
              </div>

            </div>



            <div class="row g-3 mt-1" style="max-width: 400px">
              <div class="col">
                <input type="text" class="form-control mt-1" placeholder="CEP: 00000000" aria-label="First name" id="cep" required v-model="cep" @input="handleCep">
                <div v-if="cepError" class="text-danger">{{ cepError }}</div> <!-- Exibe o erro de CEP -->

                <input type="text" class="form-control mt-1" placeholder="Cidade" aria-label="First name" id="cidade"  required v-model="userData.cidade">
                <input type="text" class="form-control mt-1" placeholder="Estado" aria-label="First name" id="estado"  required v-model="userData.estado">
                <input type="text" class="form-control mt-1" placeholder="Bairro" aria-label="First name" id="bairro" required v-model="userData.bairro">
                <input type="text" class="form-control mt-1" placeholder="Rua" aria-label="First name"  id="endereco"  required v-model="userData.endereco">
              </div>

            </div>


            <div class="mt-3">

              <select class="form-select" aria-label="Default select example" v-model="userData.tipoEvento">
                <option disabled value="">Tipo do Evento</option>
                <option value="festa">festa</option>
                <option value="baile">baile</option>
                <option value="casamento">casamento</option>
              </select>
            </div>


            <div class="row g-3 mt-1">
              <div class="">
                <label class="">Descrição do evento</label>
                <textarea class="form-control mt-1" id="exampleFormControlTextarea1" rows="3" required v-model="userData.descricao"></textarea>


              </div>

            </div>



          </div>

          <div class=" mt-4">


            <div>
              <p class="m-0 fw-bold text-danger">
                Seleciolar Profissão
              </p>
            </div>


            <div>

              <div class=" mt-4 d-flex justify-content-start flex-wrap">
                <!-- Multiselect -->
                <div class=" form-group m-2 form-control">
                  <label for="professionSelect">Selecione Profissões:</label>
                  <multiselect
                      v-model="selectedProfessions"
                      :options="store.getters.GetProfessions"
                      :multiple="true"
                      :close-on-select="false"
                      :clear-on-select="false"
                      :preserve-search="true"
                      placeholder="Click para esolher uma profissão"
                      label="name"
                      track-by="id"
                      @select="addProfession"
                      @remove="removeProfession"
                  >
                    <!-- Customização de opções (ícone + texto) -->
                    <template v-slot:option="{ option }">
                      <div class="d-flex align-items-center">
                        <img :src="option.iconURL" alt="icon" class="icon-image mr-2" />
                        <span>{{ option.name }}</span>
                      </div>
                    </template>

                    <!-- Customização de tags selecionadas (ícone + texto) -->
                    <template v-slot:tag="{ option, remove }">
                      <span class="custom__tag">
                        <img :src="option.iconURL" alt="icon" class="icon-image mr-1" />
                        {{ option.name }}
                        <span @click="remove(option)" class="custom__remove">&times;</span>
                      </span>
                    </template>
                  </multiselect>
                </div>

                <!-- Campos de profissões selecionadas -->
                <div v-if="userData.selectedProfessionsWithQuantity.length > 0" class="mt-4">
                  <h5>Profissões Selecionadas:</h5>
                  <div v-for="(item, index) in userData.selectedProfessionsWithQuantity" :key="index" class="mb-3 p-3 border rounded">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="d-flex align-items-center">
                        <img :src="item.iconURL" alt="icon" class="icon-image mr-2" />
                        <strong>{{ item.name }}</strong>
                      </div>
                      <div>
                        <button @click="decreaseQuantity(item)" class="btn btn-outline-danger btn-sm">-</button>
                        <span class="mx-2">{{ item.quantidade }}</span>
                        <button @click="increaseQuantity(item)" class="btn btn-outline-success btn-sm">+</button>
                      </div>
                      <button @click="removeProfessionByIndex(index)" class="btn btn-outline-danger btn-sm">Remover</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>



            <div>

              <div>
                Imagens do Evento
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">Escolhar uma Foto</label>
                <input class="form-control" type="file" id="formFile">
              </div>



              <div class="d-flex flex-wrap">

                <div class="card m-1" style="width: 18rem;">
                  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
                  <div class="card-body">
                    <a href="#" class="btn btn-danger d-grid gap-2 col-6 mx-auto">Deletar</a>
                  </div>
                </div>

              </div>





            </div>










          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.icon-image {
  width: 20px;
  height: 20px;
}
.custom__tag {
  background-color: rgba(220, 53, 69, 0.2);
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  display: inline-block;
}
.custom__remove {
  cursor: pointer;
  color: red;
  font-weight: bold;
  margin-left: 10px;
}
.container {
  max-width: 600px;
}


</style>