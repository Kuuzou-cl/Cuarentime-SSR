<template>
  <vue-plyr>
    <video controls crossorigin playsinline>
      <source src="https://www.youtube.com/watch?v=G-7U-FDql1A" type="video/mp4" />
    </video>
  </vue-plyr>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss">
@import "./videoplayer.scss";
</style>
