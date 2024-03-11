<template>
  <div v-if="articles.length" class="slider">
    <swiper
      :autoplay="settings.autoplay"
      :slidesPerView="1"
      :spaceBetween="0"
      :breakpoints="settings.breakpoints"
      :loop="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="article in articles" :key="article.id">
        <card-article :article="article" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import CardArticle from "@/components/pageArticle/CardArticle";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";

export default {
  name: 'ArticlesSlider',

  components: {
    CardArticle,
    Swiper,
    SwiperSlide,
  },

  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },

  setup() {
    return {
      modules: [Autoplay],
    };
  },

  data() {
    return {
      settings: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          666: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  width: 100%;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>