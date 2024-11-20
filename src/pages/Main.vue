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
      ],
      bannerVisible: false,
      buttonsVisible: false,
    }
  },
  methods: {
    redirect(to) {
      this.$router.push(to)
    }
  },
  mounted() {
    setTimeout(() => this.bannerVisible = true, 200)
    setTimeout(() => this.buttonsVisible = true, 600)
  }
})
</script>

<template>
  <div class="image-container">
    <Transition :duration="1000" name="slide">
      <img class="banner" src="../assets/screens/semerochka_banner.png" alt="" v-if="bannerVisible">
    </Transition>
  </div>

  <Transition :duration="1000" name="slide">
    <div class="buttons-container mt-5" v-if="buttonsVisible">
      <app-btn
          v-for="(item, index) in navigation"
          :key="index"
          :text="item.text"
          @click="redirect(item.path)"
      >
      </app-btn>
    </div>
  </Transition>
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
  flex-flow: row wrap;
  gap: 24px;
}

@media (max-width: 900px) {
  .buttons-container {
    flex-direction: column;
  }
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

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.slide-leave-active {
  transition-delay: 0.25s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition slide elements using slide selectors */
.slide-enter-active .inner,
.slide-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

/* delay enter of slide element */
.slide-enter-active .inner {
  transition-delay: 0.25s;
}

.slide-enter-from .inner,
.slide-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling slide opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

</style>