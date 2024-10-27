<script >
import Multiselect from 'vue-multiselect';
import {mapActions, mapGetters} from 'vuex';
import store from "@/store/store";
export default {
  components: { Multiselect },
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

      ////////////////////////////
      selectedProfessions: [],
      professions: [
        { value: '1', text: 'Desenvolvedor', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
        { value: '2', text: 'Designer', icon: 'https://cdn-icons-png.flaticon.com/512/732/732231.png' },
        { value: '3', text: 'Gerente de Projeto', icon: 'https://cdn-icons-png.flaticon.com/512/732/732228.png' },
        { value: '4', text: 'Analista de QA', icon: 'https://cdn-icons-png.flaticon.com/512/732/732207.png' }
      ],

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
  },


  methods: {

    ...mapActions([
      "CriarEvento", "clearAddressData","getProfessions"]),
    ...mapGetters(["GetProfessions","StateToken"]),

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






    async criarevento() {

      try {
        // Envia a ação CriarEvento com os dados formatados
        await this.$store.dispatch("CriarEvento", {data:this.userData,token:this.store.getters.StateToken });

        console.log('Evento criado com sucesso!');
        // Aqui você pode adicionar qualquer ação a ser realizada após o sucesso, como redirecionar ou limpar os campos
      } catch (error) {
        this.errorMessage = "Erro ao criar o evento. Por favor, tente novamente.";
        this.erroIf = true;
      }
    },


    /////////////////////////////////////
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

<template>

  <div class="container-fluid">
    <div>
      <p class="m-0 fw-bold text-danger">
        Cria Evento
      </p>
    </div>
    <div class="">

      <!--{{this.store.getters.GetProfessions}}-->
      <div class="">


        <div class="row g-3 mt-1">
          <div class="d-flex">
            <input type="text" class="form-control ms-1 me-1" placeholder="Nome do Evento" aria-label="First name" id="nameEvent" required v-model="userData.nameEvent">
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

      <!--      <div class="">-->
      <!--        <label for="inputState" class="form-label">Categoria</label>-->
      <!--        <select id="inputState" class="form-select">-->
      <!--          <option selected>Categorias</option>-->
      <!--          <option>...</option>-->
      <!--        </select>-->
      <!--      </div>-->



      <!--      <div class="mt-2">-->
      <!--        <label for="inputState" class="form-label">SubCategoria</label>-->
      <!--        <select id="inputState" class="form-select">-->
      <!--          <option selected>SubCategorias</option>-->
      <!--          <option>...</option>-->
      <!--        </select>-->
      <!--      </div>-->




    </div>



    <div class=" mt-4">


      <div>
        <p class="m-0 fw-bold text-danger">
          Seleciolar Profissão
        </p>
      </div>


      <div>

        <div class=" mt-4 d-flex justify-content-start flex-wrap ">
          <!-- Multiselect -->
          <div class="form-group form-control">
            <label for="professionSelect">Selecione Profissões:</label>
            <multiselect class=""
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
              <template v-slot:option="{ option }" >
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







      <div class=" d-flex justify-content-end mt-5 mb-5">
        <button type="submit" class="btn btn-primary me-5 " @click="criarevento()">Criar</button>
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