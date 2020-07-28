<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecentJavs",
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  components: {},
  data() {
    return {};
  },
  head() {
    return {
      title: "",
      meta: [
        {
          name: "description",
          content: "",
        },
      ],
    };
  },
  async asyncData({ params }) {
    return {};
  },
  beforeCreate() {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
</style>