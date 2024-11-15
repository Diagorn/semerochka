<script>
import {defineComponent, useCssVars} from 'vue'

export default defineComponent({
  name: "app-btn",
  data() {
    return {
      defaultBackground: 'var(--purple)',
      defaultTextColor: 'var(--white)'
    }
  },
  props: {
    backgroundColor: {
      type: String,
      required: false
    },
    textColor: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <button
      class="app-btn"
      :style="{
        background: backgroundColor ? backgroundColor : defaultBackground,
        color: textColor ? textColor : defaultTextColor
      }"
  >
    {{ text }}
  </button>
</template>

<style scoped>

.app-btn {
  font-size: 24px;
  padding: 14px;
  border-radius: 10px;
  border: none;
}

</style>