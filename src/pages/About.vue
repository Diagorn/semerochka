<script xmlns="http://www.w3.org/1999/html">

import {defineComponent} from "vue";
import AppBackArrow from "@/components/BackArrow.vue";

export default defineComponent({
  components: {AppBackArrow}
})
</script>

<template>
  <app-back-arrow/>
  <div class="content">
    <h1 id="header-text">О Семёрочке</h1>
    <p class="text-block">Дорогие друзья, вашему вниманию предоставляется уникальная игра для компании под названием
      "Семерочка"!</p>
    <p class="text-block">В идеале, игра предназначена для игры от 2 до 10 человек. Она нацелена на то, чтобы
      разнообразить и украсить вашу тусовку!</p>
    <p class="text-block">Здесь вам придётся молниеносно реагировать, быстро считать, использовать весь ваш креатив,
      и,
      что самое приятное, очень много прибегать к помощи горячительных напитков. Придумывайте смешные темы для
      разговоров,
      задавайте вопросы с вытянутой десяткой, говорите смешные тосты, а самое главное - не стесняйтесь! Игра
      раскрывает себя тогда,
      когда вы целиком и полностью отдаётесь ей.</p>
    <p class="text-block"><a class="link" href="https://t.me/+xkIsjqCCvoVjYTcy" target="_blank">Наше племя</a> желает
      вам хорошо провести время,
      от души посмеяться и подарить себе кучу позитива, чтобы снова вернуться к этой великолепной игре!</p>
  </div>
</template>

<style scoped>

.content {
  width: 80vw;
  max-height: 85vh;
  margin: 0 auto;
  color: var(--white);
}

#header-text {
  font-size: 48px;
  text-align: center;
}

.text-block {
  margin-bottom: 20px;
  font-size: 24px;
}

.link {
  color: var(--light-blue);
}

@media (max-width: 900px) {
  .content {
    overflow-y: scroll;
  }
}

</style>