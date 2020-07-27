<template>
  <div class="card mb-3 bg-dark text-white box00 mx-auto">
    <nuxt-link :to="'/idols/1/'+dataId">
      <img class="card-img" :src="dataUrl" v-lazy-load/>
    </nuxt-link>
    <div class="box-code">
      <span class="post">
        <b>{{ dataName }}</b>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardIdol",
  props: {
    dataId: String,
    dataName: String,
    dataUrl: String,
  }
};
</script>

<style lang="scss">
@import "./CardIdol00.scss";
</style>