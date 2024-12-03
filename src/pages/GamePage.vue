<script>
import {defineComponent} from "vue";
import {createDeck} from "@/helper/deck.helper.js";
import AppBackArrow from "@/components/BackArrow.vue";
import AppDeck from "@/components/Deck.vue";
import AppCard from "@/components/Card.vue";
import {ENTER_TOAST, EXIT_TOAST, toastMap} from "@/helper/toast.helper.js";
import AppModal from "@/components/Modal.vue";
import AppBtn from "@/components/Button.vue";

export default defineComponent({
  name: 'app-gamepage',
  components: {AppBtn, AppModal, AppCard, AppDeck, AppBackArrow},
  data() {
    return {
      deck: createDeck(),
      modalVisible: false,
      toastType: ENTER_TOAST,
    }
  },
  methods: {
    handleDeckClick() {
      if (this.deck.getTopCard().isFlipped()) {
        this.deck.removeTopCard()
      }

      if (!this.deck.hasCards()) {
        this.toastType = EXIT_TOAST
        this.openModal()
      }
    },
    resetToBasics() {
      this.deck = createDeck()
      this.toastType = ENTER_TOAST
      this.openModal()
    },
    openModal() {
      this.modalVisible = true
    },
    closeModal() {
      this.modalVisible = false
    }
  },
  computed: {
    modalText() {
      return toastMap.get(this.toastType).caption
    },
    modalButtonText() {
      return toastMap.get(this.toastType).toastText
    },
    topCard() {
      return this.deck.getTopCard()
    }
  },
  mounted() {
    setTimeout(() => this.modalVisible = true, 200)
  }
})
</script>

<template>
  <app-back-arrow/>
  <div class="content">
    <div
        class="new-game-btn"
        v-if="!deck.hasCards()"
    >
      <app-btn
          text="Новая игра"
          @click="resetToBasics"
      />
    </div>
    <div
        class="deck-container"
        @click="handleDeckClick"
        v-if="deck.hasCards()"
    >
      <app-deck
          :deck="deck"
          class="deck"
      />
    </div>
  </div>

  <app-modal
      v-if="modalVisible"
      :button-text="modalButtonText"
      :message="modalText"
      @close="closeModal"
  />
</template>

<style scoped>

.new-game-btn{
  display: flex;
  justify-content: center;
  margin-top: 40vh;
}

.content {
  min-height: inherit;
  display: flex;
  justify-content: space-around;
}

.deck {
  display: inline-block;
  margin: auto;
}

@media (max-width: 900px) {
  .content {
    flex-direction: column;
    justify-content: center;
  }

  .deck-container {
    display: block;
    margin: 20px auto;
  }
}

</style>