<script>
import {defineComponent} from 'vue'
import 'material-icons/iconfont/material-icons.css';

export default defineComponent({
  name: "app-back-arrow",
  methods: {
    goToMainPage() {
      this.$router.push('/')
    }
  }
})
</script>

<template>
  <div id="back-icon-container">
    <span
        class="material-icons"
        id="back-icon"
        @click="goToMainPage"
    >
      arrow_back
    </span>
  </div>
</template>

<style scoped>

#back-icon-container {
  display: flex;
  justify-content: flex-end;
  padding: 15px;

  cursor: pointer;
}

#back-icon {
  color: var(--white);
  font-size: 64px;
}

</style>