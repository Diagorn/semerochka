<script>
import {defineComponent} from 'vue'
import AppBackArrow from "@/components/BackArrow.vue";
import AppBtn from "@/components/Button.vue";

export default defineComponent({
  components: {AppBtn, AppBackArrow},
  data() {
    return {
      cardNumber: '2200 7001 4237 6697',
      modalVisible: false,
    }
  },
  methods: {
    cardNumberClicked() {
      navigator.clipboard.writeText(this.cardNumber)
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
    <h1 id="header-text">Поддержать разработку</h1>
    <p class="text-block">Спасибо за то, что играете в семерочку!</p>
    <p class="text-block">Если вы хотите привнести что-то новое в проект, например, сообщить об ошибке или добавить новый функционал, перейдите в <a href="https://github.com/Diagorn/semerochka" target="_blank" class="link">репозиторий проекта</a>.</p>
    <p class="text-block">Разработчик всегда будет рад вашей материальной поддержке по номеру карты: <span class="card-number" @click="cardNumberClicked">{{ cardNumber }}</span></p>
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
  overflow-y: scroll;
}

#header-text {
  font-size: 48px;
  text-align: center;
}

.text-block {
  margin-bottom: 20px;
  font-size: 24px;
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
}

#message {
  text-align: center;
}

</style>