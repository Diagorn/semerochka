<script>
import {defineComponent} from 'vue'
import Card from "@/lib/Card.js";
import {getBackFile, getFolderPath} from "@/helper/deck.helper.js";
import {MOBILE_MAX_WIDTH} from "@/helper/constants.js";

export default defineComponent({
  name: "app-card",
  data() {
    return {
      folderPath: getFolderPath(),
      cardStyle: {
        transform: 'rotateY(0deg)'
      },
      isFlipping: false,
      hintTextVisible: false,
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

      // If the card is face-down, we flip it
      // Otherwise, let the parent handle the click event
      if (this.card.isFlipped()) {
        return;
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
    },
    showHint() {
      if (!this.isMobile) {
        this.hintTextVisible = true
      }
    },
    hideHint() {
      if (!this.isMobile) {
        this.hintTextVisible = false
      }
    },
    toggleHintVisibility() {
      this.hintTextVisible = !this.hintTextVisible
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth < MOBILE_MAX_WIDTH
    }
  }
})
</script>

<template>
  <div
      class="card no-select"
      @click="flipCard"
      :style="cardStyle"
      v-if="this.card"
  >
    <div
        class="hint"
        v-if="card.isFlipped()"
        @mouseenter="showHint"
        @mouseleave="hideHint"
        @click.stop="toggleHintVisibility"
    >
      <span class="material-icons hint-icon">question_mark</span>
      <div class="hint-text" v-if="hintTextVisible"> {{ card.getCaption() }} </div>
    </div>
    <img
        id="front"
        v-if="this.card && this.card.isFlipped()"
        :src="getCardSrc()"
        alt=""
        class="card-img"
        draggable="false"
    />
    <img
        id="back"
        v-if="this.card && !this.card.isFlipped()"
        :src="getBackFile()"
        alt=""
        class="card-img"
        draggable="false"
    />
  </div>
</template>

<style scoped>
.card {
  width: var(--card-width);
  height: var(--card-height);
}

.card-img {
  width: 100%;
  height: 100%;

  border-radius: 10px;
  border: var(--card-inner-border) solid var(--white);
  box-shadow: 0 0 0 var(--card-outer-border) var(--black);
}

.hint {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 0;

  border-radius: 50%;
  background: var(--light-blue);

  cursor: pointer;
}

.hint-icon {
  color: var(--white);
}

.hint-text {
  color: var(--white);
  visibility: hidden;
  width: 140px;
  background-color: var(--deep-blue);
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.hint-text::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--black) transparent transparent transparent;
}

.hint:hover .hint-text {
  visibility: visible;
  opacity: 1;
}


.no-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Standard syntax */
}
</style>