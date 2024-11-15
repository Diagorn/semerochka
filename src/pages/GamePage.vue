<script>
import {defineComponent} from "vue";
import {createDeck} from "@/helper/deck.helper.js";
import AppCard from "@/components/Card.vue";

export default defineComponent({
  name: 'app-gamepage',
  components: {AppCard},
  data() {
    return {
      randomCard: createDeck().shuffle().getTopCard()
    }
  }
})
</script>

<template>
  <app-card :card="randomCard"/>
</template>

<style scoped>

</style>