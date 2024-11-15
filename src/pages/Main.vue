<script>
import {defineComponent} from "vue";
import AppBtn from "@/components/Button.vue";

export default defineComponent({
  components: {AppBtn},
  data() {
    return {
      navigation: [
        {text: 'Играть', path: '/game'},
        {text: 'Правила', path: '/rules'},
        {text: 'Про игру', path: '/about'}
      ]
    }
  },
  methods: {
    redirect(to) {
      this.$router.push(to)
    }
  }
})
</script>

<template>
  <div class="image-container">
    <img class="banner" src="../assets/screens/semerochka_banner.png" alt="">
  </div>

  <p class="text-center text-white mt-7 header">
    Сможешь ли ты выстоять?
  </p>

  <div class="buttons-container mt-5">
    <app-btn
      v-for="(item, index) in navigation"
      :key="index"
      :text="item.text"
      @click="redirect(item.path)"
    >
    </app-btn>
  </div>
</template>

<style scoped>

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner {
  max-width: 90vw;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.text-center {
  text-align: center;
}

.text-white {
  color: var(--white)
}

.header {
  margin: 5vh 0;
  font-size: 36px;
}

</style>