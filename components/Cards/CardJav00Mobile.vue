<template>
  <div class="card bg-dark box2">
    <div class="loading-box"></div>
    <div class="box2-media">
      <nuxt-link :to="'/javs/jav/'+dataJav._id" tag="a">
        <img :src="dataJav.imageIndexUrl" v-lazy-load />
        <video class="video-jav" @mouseleave="restart()" @mouseover="start()" preload="auto">
          <source :src="dataJav.imageUrl" type="video/mp4" />
        </video>
      </nuxt-link>
    </div>
    <div class="box-code">
      <b class="post">{{dataJav.code}}</b>
    </div>
    <div class="box-content-mobile">
      <h3 class="title-mobile">
        <nuxt-link :to="'/javs/jav/'+dataJav._id" tag="a">{{getName(dataJav.name)}}</nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardJav2",
  props: {
    dataJav: Object
  },
  methods: {
    getName: function(_name) {
      let newName;
      if (_name.length > 45) {
        newName = _name.slice(0, 45) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
    restart: function() {
      $(".video-jav").on("mouseout", function(event) {
        this.load();
      });
    },
    start: function() {
      $(".video-jav").on("mouseover", function(event) {
        this.play();
      });
    }
  }
};
</script>

<style lang="scss">
@import "./CardJav00.scss";
</style>