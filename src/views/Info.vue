<template>
  <div class="container">
    <v-loader v-if="isLoaded" class="spollers-loader" />
    <section-questions v-else :spollers="spollers" />

    <section-articles :articles="articles" />

    <section-contacts />
  </div>
</template>

<script>
import SectionQuestions from "@/components/pageInfo/SectionQuestions";
import SectionArticles from "@/components/pageInfo/SectionArticles";
import SectionContacts from "@/components/pageContacts/SectionContacts";
import VLoader from "@/components/common/VLoader";
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Info',

  components: {
    SectionQuestions,
    SectionArticles,
    SectionContacts,
    VLoader,
  },

  data() {
    return {
      spollers: [],
      isLoaded: false,
    };
  },

  computed: {
    ...mapGetters(['articles', 'needScrollToSection'])
  },

  methods: {
    ...mapMutations(['offScroll']),
    ...mapActions(['getArticles']),

    async setSpollers() {
      this.isLoaded = true;
      this.spollers = await this.$service.spollers.getSpollers();
      this.isLoaded = false;
    },

    async setArticles() {
      if (!this.articles.length) {
        await this.getArticles();
      }
      
      this.scrollToSection();
    },

    setTitle() {
      document.title = this.$t('titles.info');
    },

    scrollToSection() {
      if (this.needScrollToSection) {
        document.querySelector('.articles').scrollIntoView({
          behavior: 'smooth',
        });

        this.offScroll();
      }
    }
  },

  created() {
    this.setArticles();
    this.setSpollers();
    this.setTitle();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 96px;
}

.spollers-loader {
  padding: 200px 0;
}
</style>