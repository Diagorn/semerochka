<script>
import {defineComponent} from "vue";
import {createDeck} from "@/helper/deck.helper.js";
import AppCard from "@/components/Card.vue";
import AppBackArrow from "@/components/BackArrow.vue";

export default defineComponent({
  name: 'app-gamepage',
  components: {AppBackArrow, AppCard},
  data() {
    return {
      randomCard: createDeck().shuffle().getTopCard()
    }
  }
})
</script>

<template>
  <app-back-arrow/>
  <app-card :card="randomCard"/>
</template>

<style scoped>

</style>