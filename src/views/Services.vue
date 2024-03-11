<template>
  <div class="container">
    <v-loader v-if="isLoaded" class="services-loader"/>
    <section-price v-else :services="services" />

    <section-contacts />
  </div>
</template>

<script>
import SectionPrice from '@/components/pageServices/SectionPrice';
import SectionContacts from '@/components/pageContacts/SectionContacts';
import VLoader from '@/components/common/VLoader';

export default {
  name: 'Services',

  components: {
    SectionPrice,
    SectionContacts,
    VLoader
  },

  data() {
    return {
      services: [],
      isLoaded: false
    };
  },

  methods: {
    async setServices() {
      this.isLoaded = true;
      this.services = await this.$service.services.getServices();
      this.isLoaded = false;
    },

    setTitle() {
      document.title = this.$t('titles.services');
    },
  },

  created() {
    this.setServices();
    this.setTitle();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 96px;
}

.services-loader {
  padding: 200px 0;
}
</style>