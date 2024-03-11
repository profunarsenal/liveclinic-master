<template>
  <div class="container">
    <v-loader v-if="isLoaded" class="workers-loader"/>
    <section-workers v-else :workers="workers" />

    <section-contacts />
  </div>
</template>

<script>
import SectionWorkers from '@/components/pageSpecialists/SectionWorkers';
import SectionContacts from '@/components/pageContacts/SectionContacts';
import VLoader from '@/components/common/VLoader';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Specialists',

  components: {
    SectionWorkers,
    SectionContacts,
    VLoader
  },

  data() {
    return {
      isLoaded: false
    };
  },

  computed: {
    ...mapGetters(['workers'])
  },

  methods: {
    ...mapActions(['getWorkers']),

    async setWorkers() {
      if (!this.workers.length) {
        this.isLoaded = true;
        await this.getWorkers();
        this.isLoaded = false;
      }
    },

    setTitle() {
      document.title = this.$t('titles.specialists');
    },
  },

  created() {
    this.setWorkers();
    this.setTitle();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 96px;
}

.workers-loader {
  padding: 200px 0;
}
</style>