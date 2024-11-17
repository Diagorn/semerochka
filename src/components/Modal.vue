<script>
import {defineComponent} from 'vue'
import AppBtn from "@/components/Button.vue";

export default defineComponent({
  name: "app-modal",
  components: {AppBtn},
  props: {
    message: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
})
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal-content">
      <p id="message">{{ message }}</p>
      <app-btn
          :text="buttonText"
          @click="closeModal"
      />
    </div>
  </div>
</template>

<style scoped>

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: var(--white);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

#message {
  background: var(--white);
}

</style>