<script>
import {defineComponent} from 'vue'
import Deck from "@/lib/Deck.js";
import AppCard from "@/components/Card.vue";

export default defineComponent({
  name: "app-deck",
  components: {AppCard},
  props: {
    deck: {
      type: Deck,
      required: true
    }
  },
  computed: {
    deckWidth() {
      const styles = window.getComputedStyle(document.documentElement)
      const cardWidth = parseInt(styles.getPropertyValue('--card-width').slice(0, -2))
      const innerBorderWidth = parseInt(styles.getPropertyValue('--card-inner-border').slice(0, -2))
      const outerBorderWidth = parseInt(styles.getPropertyValue('--card-outer-border').slice(0, -2))

      const cards = this.deck.getCards();
      return cardWidth + innerBorderWidth * 2 + outerBorderWidth * 2 + cards.length * 1.5
    },
    deckHeight() {
      const styles = window.getComputedStyle(document.documentElement)
      const cardHeight = parseInt(styles.getPropertyValue('--card-height').slice(0, -2))
      const innerBorderWidth = parseInt(styles.getPropertyValue('--card-inner-border').slice(0, -2))
      const outerBorderWidth = parseInt(styles.getPropertyValue('--card-outer-border').slice(0, -2))

      console.log(cardHeight + innerBorderWidth * 2 + outerBorderWidth * 2)
      return cardHeight + innerBorderWidth * 2 + outerBorderWidth * 2
    }
  }
})
</script>

<template>
  <div
      class="deck"
      :style="{
        width: deckWidth + 'px',
        height: deckHeight + 'px'
      }"
  >
    <div
      class="card"
      v-for="(card, index) in deck.getCards()"
      :key="index"
    >
      <app-card
          :card="card"
          class="deck-card"
          :style="{
            left: `${index * 1.5}px`
          }"
      />
    </div>
  </div>
</template>

<style scoped>

.deck {
  position: relative;
}

.deck-card {
  position: absolute;
}

</style>