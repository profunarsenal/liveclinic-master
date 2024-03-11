<template>
  <div class="container">
    <v-loader v-if="isLoaded" class="article-loader" />
    <section-article v-else :article="article" />

    <articles-slider :articles="sliderArticles" />

    <section-contacts />
  </div>
</template>

<script>
import SectionArticle from "@/components/pageArticle/SectionArticle";
import SectionContacts from "@/components/pageContacts/SectionContacts";
import ArticlesSlider from "@/components/pageArticle/ArticlesSlider";
import VLoader from "@/components/common/VLoader";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Article',

  components: {
    SectionArticle,
    SectionContacts,
    ArticlesSlider,
    VLoader,
  },

  data() {
    return {
      isLoaded: false,
    };
  },

  computed: {
    ...mapGetters(['articles']),

    sliderArticles() {
      return this.$store.getters['sliderArticles'](this.$route.query.id);
    },

    article() {
      return this.$store.getters['article'](this.$route.query.id);
    },
  },

  methods: {
    ...mapActions(['getArticles']),

    async setArticles() {
      if (!this.articles.length) {
        this.isLoaded = true;
        await this.getArticles();
        this.isLoaded = false;
      }

      this.setTitle();
    },

    setTitle() {
      const title = this.article?.title || this.$t('titles.article');
      document.title = title;
    },
  },

  created() {
    this.setArticles();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 96px;
}

.article-loader {
  padding: 200px 0;
}
</style>