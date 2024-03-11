<template>
  <div class="container">
    <v-loader v-if="isLoaded" class="worker-loader"/>
    <section-specialist v-else :worker="worker" />

    <ul class="other-specialists">
      <card-worker
        v-for="worker in otherWorkers"
        :key="worker.id"
        :worker="worker"
      />
    </ul>

    <section-contacts />
  </div>
</template>

<script>
import SectionSpecialist from '@/components/pageSpecialist/SectionSpecialist';
import SectionContacts from '@/components/pageContacts/SectionContacts';
import CardWorker from '@/components/pageSpecialists/CardWorker';
import VLoader from '@/components/common/VLoader';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Specialist',

  components: {
    SectionSpecialist,
    SectionContacts,
    CardWorker,
    VLoader
  },

  data() {
    return {
      isLoaded: false,
    };
  },

  computed: {
    ...mapGetters(['workers']),

    otherWorkers() {
      return this.$store.getters['otherWorkers'](this.$route.query.id);
    },

    worker() {
      return this.$store.getters['worker'](this.$route.query.id);
    }
  },

  methods: {
    ...mapActions(['getWorkers']),

    async setWorkers() {
      if (!this.workers.length) {
        this.isLoaded = true;
        await this.getWorkers();
        this.isLoaded = false;
      }

      this.setTitle();
    },

    setTitle() {
      const title = this.worker?.name || this.$t('titles.specialist');
      document.title = title;
    },
  },

  created() {
    this.setWorkers();
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 96px;
}

.other-specialists {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 132px 0;
}

.worker-loader {
  padding: 200px 0;
}

@media (max-width: 1366px) {
  .other-specialists {
    padding: 100px 0;
  }
}

@media (max-width: 992px) {
  .other-specialists {
    padding: 72px 0;
  }
}

@media (max-width: 767px) {
  .other-specialists {
    grid-template-columns: repeat(auto-fit, 288px);
    justify-content: center;
  }
}
</style>