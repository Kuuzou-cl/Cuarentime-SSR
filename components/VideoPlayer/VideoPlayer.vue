<template>
  <vue-plyr>
    <video controls crossorigin playsinline>
      <source :src="video" type="video/mp4" />
    </video>
  </vue-plyr>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    video: String,
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
