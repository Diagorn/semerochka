<script>
import {defineComponent} from "vue";
import {createDeck} from "@/helper/deck.helper.js";
import AppBackArrow from "@/components/BackArrow.vue";
import AppDeck from "@/components/Deck.vue";
import AppCard from "@/components/Card.vue";
import {ENTER_TOAST, EXIT_TOAST, toastMap} from "@/helper/toast.helper.js";
import AppModal from "@/components/Modal.vue";

export default defineComponent({
  name: 'app-gamepage',
  components: {AppModal, AppCard, AppDeck, AppBackArrow},
  data() {
    return {
      deck: createDeck(),
      selectedCard: null,
      modalVisible: false,
      toastType: ENTER_TOAST,
    }
  },
  methods: {
    handleDeckClick() {
      // If the top card is flipped, we let the card itself handle the click
      if (this.topCard.isFlipped()) {
        this.selectedCard = this.deck.removeTopCard()
      }

      if (!this.deck.hasCards()) {
        this.toastType = EXIT_TOAST
        this.openModal()
      }
    },
    handleSelectedCardClick() {
      if (!this.deck.hasCards()) {
        this.resetToBasics()
      }
    },
    resetToBasics() {
      this.deck = createDeck()
      this.selectedCard = null
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
        class="selected-card"
        v-if="this.selectedCard"
        @click="handleSelectedCardClick"
    >
      <app-card
          :card="selectedCard"
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

.selected-card {
  display: flex;
  justify-content: center;
}

.content {
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