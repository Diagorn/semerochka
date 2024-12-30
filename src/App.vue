<script>
import {defineComponent} from "vue";
import {initShowFall} from "@/helper/effects.helper.js";

export default defineComponent({
  mounted() {
    initShowFall()
  }
})

</script>

<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style scoped>

</style>
