<template>
  <div class="home">
    <main-screen />
    <section-about />
    <section-profile />
    <section-methods />
    <section-solutions />
    <section-workers class="container" :workers="workers" />
    <section-entry />
    <section-contacts class="container" />
  </div>
</template>

<script>
import MainScreen from "@/components/pageHome/MainScreen";
import SectionAbout from "@/components/pageHome/SectionAbout";
import SectionProfile from "@/components/pageHome/SectionProfile";
import SectionMethods from "@/components/pageHome/SectionMethods";
import SectionSolutions from "@/components/pageHome/SectionSolutions";
import SectionWorkers from "@/components/pageSpecialists/SectionWorkers";
import SectionEntry from "@/components/pageHome/SectionEntry";
import SectionContacts from "@/components/pageContacts/SectionContacts";
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Home',

  components: {
    MainScreen,
    SectionAbout,
    SectionProfile,
    SectionMethods,
    SectionSolutions,
    SectionWorkers,
    SectionEntry,
    SectionContacts,
  },

  computed: {
    ...mapGetters(['workers', 'needScrollToSection'])
  },

  methods: {
    ...mapMutations(['offScroll']),
    ...mapActions(['getWorkers']),

    async setWorkers() {
      if (!this.workers.length) {
        await this.getWorkers();
      }

      this.scrollToSection();
    },

    setTitle() {
      document.title = this.$t('titles.home');
    },

    scrollToSection() {
      if (this.needScrollToSection) {
        document.querySelector('.about-inner').scrollIntoView({
          behavior: 'smooth',
        });

        this.offScroll();
      }
    }
  },

  created() {
    this.setWorkers();
    this.setTitle();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 150px;
}

@media (max-width: 1366px) {
  .container {
    padding-bottom: 100px;
  }
}

@media (max-width: 992px) {
  .container {
    padding-bottom: 72px;
  }
}
</style>