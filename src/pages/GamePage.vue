<script>
import {defineComponent} from "vue";
import {createDeck} from "@/helper/deck.helper.js";
import AppBackArrow from "@/components/BackArrow.vue";
import AppDeck from "@/components/Deck.vue";
import AppCard from "@/components/Card.vue";

export default defineComponent({
  name: 'app-gamepage',
  components: {AppCard, AppDeck, AppBackArrow},
  data() {
    return {
      deck: createDeck(),
      selectedCard: null,
    }
  },
  methods: {
    handleDeckClick() {
      // If the top card is flipped, we let the card itself handle the click
      if (this.topCard.isFlipped()) {
        this.selectedCard = this.deck.removeTopCard()
      }
    },
    resetToBasics() {
      this.deck = createDeck()
      this.selectedCard = null
    }
  },
  computed: {
    topCard() {
      return this.deck.getTopCard()
    }
  }
})
</script>

<template>
  <app-back-arrow/>
  <div class="content">
    <div
        class="selected-card"
        v-if="this.selectedCard"
        @click="resetToBasics"
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
</template>

<style scoped>

.content {
  display: flex;
  justify-content: space-around;
}

.deck {
  display: inline-block;
  margin: auto;
}

</style>