<template>
  <vue-plyr :options="playerOptions">
    <video controls :poster="jav.imageIndexUrl" crossorigin playsinline>
      <source :src="jav.url" type="video/mp4" />
    </video>
  </vue-plyr>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    jav: Object
  },
  data() {
    return {
      playerOptions: {
        previewThumbnails: {
          enabled: true,
          src:
            "https://javdata.sfo2.cdn.digitaloceanspaces.com/vtts/" +
            this.jav.code +
            "_thumbs.vtt"
        },
        disableContextMenu: true,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true,
          container: null
        },
        controls: `
      <div class="plyr__controls">
        <button class="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play">
            <svg class="icon--pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-pause"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-play"></use>
            </svg>
            <span class="label--pressed plyr__sr-only">Pause</span>
            <span class="label--not-pressed plyr__sr-only">Play</span>
        </button>
        <div class="plyr__controls__item plyr__progress__container">
            <div class="plyr__progress">
              <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="9757.184" aria-valuenow="0" id="plyr-seek-2232" style="--value:0%;">
              <progress class="plyr__progress__buffer" min="0" max="100" value="0.164200377895918" role="progressbar" aria-hidden="true">% buffered</progress>
              <span class="plyr__tooltip" hidden="">00:00</span>
              <div class="plyr__preview-thumb">
                  <div class="plyr__preview-thumb__image-container">
                  </div>
                  <div class="plyr__preview-thumb__time-container">
                    <span>00:00</span>
                  </div>
              </div>
            </div>
        </div>
        <div class="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">2:42:37</div>
        <div class="plyr__controls__item plyr__volume">
            <button type="button" class="plyr__control plyr__control--pressed" data-plyr="mute">
              <svg class="icon--pressed" role="presentation" focusable="false">
                  <use xlink:href="#plyr-muted"></use>
              </svg>
              <svg class="icon--not-pressed" role="presentation" focusable="false">
                  <use xlink:href="#plyr-volume"></use
                    >
              </svg>
              <span class="label--pressed plyr__sr-only">Unmute</span><span class="label--not-pressed plyr__sr-only">Mute</span>
            </button>
            <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" id="plyr-volume-2232" style="--value:0%;" aria-valuetext="0.0%">
        </div>
        <button class="plyr__controls__item plyr__control" type="button" data-plyr="captions">
            <svg class="icon--pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-captions-on"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-captions-off"></use>
            </svg>
            <span class="label--pressed plyr__sr-only">Disable captions</span><span class="label--not-pressed plyr__sr-only">Enable captions</span>
        </button>
        <button class="plyr__controls__item plyr__control" type="button" onclick="document.getElementById('resizeButton').click()">
          <svg class="icon" role="presentation" focusable="false">
            <use xlink:href="#plyr-pip"></use>
          </svg>
        </button>
        <button class="plyr__controls__item plyr__control" type="button" data-plyr="fullscreen">
            <svg class="icon--pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-exit-fullscreen"></use>
            </svg>
            <svg class="icon--not-pressed" role="presentation" focusable="false">
              <use xlink:href="#plyr-enter-fullscreen"></use>
            </svg>
            <span class="label--pressed plyr__sr-only">Exit fullscreen</span><span class="label--not-pressed plyr__sr-only">Enter fullscreen</span>
        </button>
      </div>`
      }
    };
  }
};
</script>

<style lang="scss">
@import "./videoplayer.scss";
</style>
