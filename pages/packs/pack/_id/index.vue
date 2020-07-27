<template>
  <div>
    <div v-if="$device.isDesktop">
      <Crumbs />
      <div class="container-fluid">
        <div class="container content-jav">
          <div class="row justify-content-center">
            <DesktopAd01 />
          </div>
          <div class="row">
            <div :class="resize">
              <div class="container-jav">
                <button class="resize-hidden" type="button" @click="resizeColumn" id="resizeButton">
                  <svg class="icon">
                    <use xlink:href="#plyr-pip" />
                  </svg>
                </button>
                <VideoPlayer v-bind:jav="jav" />
                <div class="jav-title">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <p class="title">{{getName(jav.name)}}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div class="jav-details">
                        <font-awesome-icon :icon="['fas', 'eye']" class="view-icon" />
                        <p>Views:200.000</p>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="btn btn-options" @click="addToFavorites(jav._id)">
                        <p>{{messageFavorite}}</p>
                        <font-awesome-icon
                          :icon="['fas', 'heart']"
                          v-if="!checkFavorite"
                          class="favorite-icon"
                        />
                        <font-awesome-icon
                          :icon="['fas', 'heart']"
                          v-if="checkFavorite"
                          class="favorite-icon-active"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                      <div class="btn btn-options">
                        <p>Report a bug</p>
                        <font-awesome-icon :icon="['fas', 'bug']" class="bug-icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jav-extra">
                  <span>Code: {{jav.code}}</span>
                </div>
                <div class="jav-extra">
                  <span>Duration: {{jav.duration}} min</span>
                </div>
                <div class="jav-extra">
                  <span>
                    Categories:
                    <nuxt-link
                      v-for="category in categories"
                      :key="category._id"
                      :to="'/categories/1/'+category._id"
                      tag="a"
                      class="links"
                    >{{category.name}},</nuxt-link>
                  </span>
                </div>
                <div class="jav-extra">
                  <span>
                    Idols:
                    <nuxt-link
                      v-for="idol in idols"
                      :key="idol._id"
                      :to="'/idols/1/'+idol._id"
                      tag="a"
                      class="links"
                    >{{idol.name}},</nuxt-link>
                  </span>
                </div>
              </div>
            </div>
            <div :class="resizeToHide">
              <DesktopAd03 />
            </div>
          </div>
          <div class="need-space"></div>
          <div class="row justify-content-center">
            <DesktopAd02 />
          </div>
          <div class="need-space"></div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="row justify-content-center recommended-title">
                <h3>Recommended videos</h3>
              </div>
              <div class="container-recommended">
                <div class="row">
                  <div
                    v-for="jav in relatedJavs"
                    :key="jav._id"
                    class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
                  >
                    <CardJav v-bind:dataJav="jav" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$device.isMobile" class="container-fluid">
      <div class="need-space"></div>
      <div class="container-fluid content-jav">
        <div class="row justify-content-center">
          <MobileAd01 />
        </div>
        <div class="row">
          <div class="container-jav">
            <VideoPlayer v-bind:jav="jav" />
            <div class="jav-title-mobile">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <p class="title">{{getName(jav.name)}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="btn btn-options" @click="addToFavorites(jav._id)">
                    <font-awesome-icon
                      :icon="['fas', 'heart']"
                      v-if="!checkFavorite"
                      class="favorite-icon"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'heart']"
                      v-if="checkFavorite"
                      class="favorite-icon-active"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="jav-extra">
              <span>Code: {{jav.code}}</span>
            </div>
            <div class="jav-extra">
              <span>
                Categories:
                <nuxt-link
                  v-for="category in categories"
                  :key="category._id"
                  :to="'/categories/1/'+category._id"
                  tag="a"
                  class="links"
                >{{category.name}},</nuxt-link>
              </span>
            </div>
            <div class="jav-extra">
              <span>
                Idols:
                <nuxt-link
                  v-for="idol in idols"
                  :key="idol._id"
                  :to="'/idols/1/'+idol._id"
                  tag="a"
                  class="links"
                >{{idol.name}},</nuxt-link>
              </span>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="row justify-content-center recommended-title">
              <h3>Recommended videos</h3>
            </div>
            <div class="container-recommended-mobile">
              <div class="row">
                <div
                  v-for="jav in relatedJavs"
                  :key="jav._id"
                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                >
                  <CardJavMobile v-bind:dataJav="jav" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="need-space"></div>
        <div class="need-space"></div>
        <div class="need-space"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Crumbs from "~/components/Breadcrumbs/Breadcrumbs";
import CardJav from "~/components/Cards/CardJav01";
import CardJavMobile from "~/components/Cards/CardJav01Mobile";
import DesktopAd01 from "~/components/DesktopAd/DesktopAd01";
import DesktopAd02 from "~/components/DesktopAd/DesktopAd02";
import DesktopAd03 from "~/components/DesktopAd/DesktopAd03";
import MobileAd01 from "~/components/DesktopAd/MobileAd01";
import VideoPlayer from "~/components/VideoPlayer/VideoPlayer";

export default {
  layout: ctx => (ctx.isMobile ? "mobile" : "default"),
  name: "JAV",
  components: {
    Crumbs,
    CardJav,
    CardJavMobile,
    DesktopAd01,
    DesktopAd02,
    DesktopAd03,
    MobileAd01,
    VideoPlayer
  },
  data() {
    return {
      resize: "col-lg-9 col-md-9 col-sm-9 col-xs-9",
      resizeToHide: "col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center"
    };
  },
  head() {
    return {
      title: this.titleJ + " | Jav4Free | " + this.detailJ,
      meta: [
        {
          name: "description",
          content:
            "Jav4Free, watch " +
            this.titleJ +
            " , " +
            this.detailJ +
            " , Here you can find almost every Idol and Actress of japanese adult videos, find the latest japanese adult videos in high quality, various Idols and categories. Every video stream quickly and with amazing quality."
        }
      ]
    };
  },
  async asyncData({ params }) {
    let id = params.id;
    if (id == null || id == "") {
      id = "";
    }
    let jav = await axios
      .get("https://jav.souzou.dev/jav4free/javs/" + id)
      .catch(e => {
        console.log(e);
      });
    let related = await axios
      .get("https://jav.souzou.dev/jav4free/javs/getRelatedJavs/" + id)
      .catch(e => {
        console.log(e);
      });
    return {
      titleJ: jav.data.jav.code,
      detailJ: jav.data.jav.name,
      jav: jav.data.jav,
      categories: jav.data.categories,
      idols: jav.data.idols,
      relatedJavs: related.data.relatedJavs,
      check: related.data.rr
    };
  },
  beforeCreate() {
    let routePage = "javs/jav/" + this.$route.params.id;
    this.$store.dispatch("addCrumb", {
      page: "Jav",
      show: this.$route.params.id,
      route: routePage
    });
    this.$store.dispatch("addToHistory", { javId: this.$route.params.id });
  },
  methods: {
    addToFavorites: function(_id) {
      this.$store.dispatch("addToFavorites", { javId: _id });
    },
    getName: function(_name) {
      let newName;
      if (_name.length > 180) {
        newName = _name.slice(0, 180) + " ...";
        return newName;
      } else {
        return _name;
      }
    },
    resizeColumn: function() {
      if (this.resize == "col-lg-9 col-md-9 col-sm-9 col-xs-9") {
        this.resize = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
        this.resizeToHide = "hide";
      } else {
        this.resize = "col-lg-9 col-md-9 col-sm-9 col-xs-9";
        this.resizeToHide = "col-lg-3 col-md-3 col-sm-3 col-xs-3";
      }
    }
  },
  computed: {
    checkFavorite() {
      return this.$store.getters.checkFavorite(this.jav._id);
    },
    messageFavorite() {
      if (!this.$store.getters.checkFavorite(this.jav._id)) {
        return "Add to favorites";
      } else {
        return "Remove video";
      }
    }
  }
};
</script>

<style lang="scss">
</style>