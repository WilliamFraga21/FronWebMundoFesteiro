<script >
import Multiselect from 'vue-multiselect';

export default {
  components: { Multiselect },
  data() {
    return {
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
  methods: {
    addProfession(profession) {
      const existing = this.selectedProfessionsWithQuantity.find(
          item => item.value === profession.value
      );
      if (!existing) {
        this.selectedProfessionsWithQuantity.push({
          ...profession,
          quantity: 1
        });
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeProfession(profession) {
      const index = this.selectedProfessionsWithQuantity.findIndex(
          item => item.value === profession.value
      );
      if (index !== -1) {
        this.selectedProfessionsWithQuantity.splice(index, 1);
      }
    },
    removeProfessionByIndex(index) {
      this.selectedProfessionsWithQuantity.splice(index, 1);
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


      <div class="">


        <div class="row g-3 mt-1">
          <div class="d-flex">
            <input type="text" class="form-control ms-1 me-1" placeholder="Nome do Evento" aria-label="First name">
            <input type="number" class="form-control ms-1 me-1" placeholder="Quantidade de convidados" aria-label="First name">
            <input type="date" class="form-control ms-1 me-1" placeholder="Data do Evento" aria-label="First name">
          </div>

        </div>



        <div class="row g-3 mt-1" style="max-width: 400px">
          <div class="col">
            <input type="text" class="form-control mt-1" placeholder="CEP" aria-label="First name" >
            <input type="text" class="form-control mt-1" placeholder="Cidade" aria-label="First name">
            <input type="text" class="form-control mt-1" placeholder="Estado" aria-label="First name">
            <input type="text" class="form-control mt-1" placeholder="Bairro" aria-label="First name">
            <input type="text" class="form-control mt-1" placeholder="Rua" aria-label="First name">
            <input type="text" class="form-control mt-1" placeholder="Numero" aria-label="First name">
            <input type="text" class="form-control mt-1" placeholder="Complemento" aria-label="First name">
          </div>

        </div>


        <div class="row g-3 mt-1">
          <div class="">
            <label class="">Descrição do evento</label>
            <textarea class="form-control mt-1" id="exampleFormControlTextarea1" rows="3"></textarea>


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

      <div class="col-md-4 mt-2">
        <label for="inputState" class="form-label">Selecione a Profissão:</label>
        <select id="inputState" class="form-select custom-select">
          <option selected>Profissoes</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>
          <option > Brigadeiro</option>


        </select>
      </div>


      <div>

        <div>
          <p class="m-0">
            Profissão
          </p>

        </div>

        <div>

        </div>




      </div>




      <div class="container mt-4">
        <!-- Multiselect -->
        <div class="form-group">
          <label for="professionSelect">Selecione Profissões:</label>
          <multiselect
              v-model="selectedProfessions"
              :options="professions"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Escolha uma profissão"
              label="text"
              track-by="value"
              @select="addProfession"
              @remove="removeProfession"
          >
            <!-- Customização de opções (ícone + texto) -->
            <template v-slot:option="{ option }">
              <div class="d-flex align-items-center">
                <img :src="option.icon" alt="icon" class="icon-image mr-2" />
                <span>{{ option.text }}</span>
              </div>
            </template>

            <!-- Customização de tags selecionadas (ícone + texto) -->
            <template v-slot:tag="{ option, remove }">
          <span class="custom__tag">
            <img :src="option.icon" alt="icon" class="icon-image mr-1" />
            {{ option.text }}
            <span @click="remove(option)" class="custom__remove">&times;</span>
          </span>
            </template>
          </multiselect>
        </div>

        <!-- Campos de profissões selecionadas -->
        <div v-if="selectedProfessionsWithQuantity.length > 0" class="mt-4">
          <h5>Profissões Selecionadas:</h5>
          <div v-for="(item, index) in selectedProfessionsWithQuantity" :key="index" class="mb-3 p-3 border rounded">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img :src="item.icon" alt="icon" class="icon-image mr-2" />
                <strong>{{ item.text }}</strong>
              </div>
              <div>
                <button @click="decreaseQuantity(item)" class="btn btn-outline-danger btn-sm">-</button>
                <span class="mx-2">{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)" class="btn btn-outline-success btn-sm">+</button>
              </div>
              <button @click="removeProfessionByIndex(index)" class="btn btn-outline-danger btn-sm">Remover</button>
            </div>
          </div>
        </div>
      </div>


      <div class="row g-3 mt-1">




        <div class="col">
          <label for="inputState" class="form-label">Tamanho</label>
          <select id="inputState" class="form-select">
            <option selected>Tamanho</option>
            <option>...</option>
          </select>
        </div>

        <div class="col">
          <label for="inputState" class="form-label">Cor</label>
          <select id="inputState" class="form-select">
            <option selected>Cores</option>
            <option>...</option>
          </select>
        </div>

        <div class="col">
          <label for="Estoque" class="form-label">Quantidade em Estoque:</label>
          <input type="number" class="form-control" id="Estoque">
        </div>


      </div>
      <div class=" d-flex justify-content-end mt-3">
        <button type="submit" class="btn btn-primary me-5 ">Criar</button>
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