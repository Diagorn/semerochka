<script>
import {defineComponent} from 'vue'
import Card from "@/lib/Card.js";
import {getBackFile, getFolderPath} from "@/helper/deck.helper.js";

export default defineComponent({
  name: "app-card",
  data() {
    return {
      folderPath: getFolderPath(),
      cardStyle: {
        transform: 'rotateY(0deg)'
      },
      isFlipping: false,
    }
  },
  props: {
    card: {
      type: Card,
      required: true
    }
  },
  methods: {
    getBackFile,
    flipCard() {
      if (this.isFlipping) {
        return
      }
      this.isFlipping = true
      const initialPosition = this.card.isFlipped()
      const duration = 500
      let start = null

      const step = (timestamp) => {
        if (!start) {
          start = timestamp
        }

        const progress = timestamp - start
        const halfDuration = duration / 2;
        let rotation
        if (progress < halfDuration) {
          // First half: rotate from 0 to 90 degrees
          rotation = (progress / halfDuration) * 90;
        } else {
          // Second half: rotate from 90 to 0 degrees
          rotation = 90 - ((progress - halfDuration) / halfDuration) * 90;
        }

        this.cardStyle.transform = `rotateY(${rotation}deg)`

        if (progress < halfDuration) {
          requestAnimationFrame(step)
        } else {
          if (this.card.isFlipped() === initialPosition) {
            this.card.flip()
          }
          if (progress < duration) {
            requestAnimationFrame(step)
          } else {
            this.isFlipping = false
            this.cardStyle.transform = `rotateY(0deg)`
          }
        }
      }

      requestAnimationFrame(step)
    },
    getCardSrc() {
      return `${this.folderPath}/${this.card.getFilePath()}`
    }
  }
})
</script>

<template>
  <div class="card" @click="flipCard" :style="cardStyle">
    <img
        id="front"
        v-if="this.card.isFlipped()"
        :src="getCardSrc()"
        alt=""
        class="card-img"
    />
    <img
        id="back"
        v-if="!this.card.isFlipped()"
        :src="getBackFile()"
        alt=""
        class="card-img"
    />
  </div>
</template>

<style scoped>
.card {
  min-width: 68px;
  min-height: 105px;

  max-width: 270px;
  max-height: 420px;

  border-radius: 10px;
  border: 10px solid var(--white);
}

.card-img {
  width: 100%;
  height: 100%;
}
</style>