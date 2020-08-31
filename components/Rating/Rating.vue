<template>
  <div class="rating">
    <ul class="list">
      <li
        @click="rate(star)"
        v-for="star in maxStars"
        :class="{ 'active': star <= stars }"
        :key="star.stars"
        class="star"
      >
        <font-awesome-icon
          :icon="['fas', 'star']"
          :class="star <= stars ? 'fas fa-star' : 'far fa-star'"
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Rating",
  props: ["grade", "maxStars", "hasCounter"],
  data() {
    return {
      stars: this.grade,
    };
  },
  methods: {
    rate(star) {
      if (typeof star === "number" && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~/assets/rating.scss";
</style>