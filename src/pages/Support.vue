<script>
import {defineComponent} from 'vue'
import AppBackArrow from "@/components/BackArrow.vue";
import AppBtn from "@/components/Button.vue";
import {CARD_NUMBER} from "@/helper/constants.js";

export default defineComponent({
  components: {AppBtn, AppBackArrow},
  data() {
    return {
      modalVisible: false,
    }
  },
  methods: {
    CARD_NUMBER() {
      return CARD_NUMBER
    },
    cardNumberClicked() {
      navigator.clipboard.writeText(CARD_NUMBER)
      this.showModal()
      setTimeout(() => this.hideModal(), 1500)
    },
    showModal() {
      this.modalVisible = true
    },
    hideModal() {
      this.modalVisible = false
    }
  }
})
</script>

<template>
  <app-back-arrow/>
  <div class="content">
    <h1 class="header-text">Поддержать разработку</h1>
    <p class="text-block">Спасибо за то, что играете в семерочку!</p>
    <p class="text-block">Если вы хотите привнести что-то новое в проект, например, сообщить об ошибке или добавить новый функционал, перейдите в <a href="https://github.com/Diagorn/semerochka" target="_blank" class="link">репозиторий проекта</a>.</p>
    <p class="text-block">Разработчик всегда будет рад вашей материальной поддержке по номеру карты: <span class="card-number" @click="cardNumberClicked">{{ CARD_NUMBER() }}</span></p>
  </div>
  <div class="modal__wrapper" v-if="modalVisible">
    <div class="modal" @click="hideModal">
      <p id="message">Номер карты скопирован!</p>
    </div>
  </div>
</template>

<style scoped>

.content {
  width: 80vw;
  max-height: 85vh;
  margin: 0 auto;
  color: var(--white);
}

.link {
  color: var(--light-blue);
}

.card-number {
  cursor: pointer;
  font-style: italic;
  color: var(--light-blue);
}

.modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: var(--white);
  color: var(--black);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15%;
  height: 15%;
  min-width: 120px;
}

#message {
  text-align: center;
}

</style>