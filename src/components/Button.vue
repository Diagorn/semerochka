<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "app-btn",
  props: {
    backgroundColor: {
      type: String,
      default: 'var(--deep-blue)'
    },
    textColor: {
      type: String,
      default: 'var(--white)'
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    buttonStyles() {
      return {
        background: this.backgroundColor,
        color: this.textColor,
      }
    }
  }
})
</script>

<template>
  <button
      class="app-btn"
      :style="buttonStyles"
  >
    {{ text }}
  </button>
</template>

<style scoped>

.app-btn {
  min-width: 140px;
  font-size: 24px;
  padding: 14px;
  border-radius: 10px;
  border: none;
}

</style>