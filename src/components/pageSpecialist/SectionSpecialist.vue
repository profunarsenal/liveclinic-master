<template>
  <div v-if="worker" class="section-specialist">
    <v-crumbs
      link="/specialists"
      :lastPage="$t('specialist.crumbs')"
      :currentPage="worker.name"
    />

    <h2 class="specialist-title">{{ worker.name }}</h2>

    <div class="specialist-info">
      <div class="avatar">
        <img 
          class="avatar-image" 
          :src="worker.img" 
          alt="photo" 
        />

        <div class="badges">
          <span class="badge">
            {{ $t("specialists.badge") }} {{ worker.experience }}
          </span>
          <span class="badge">{{ worker.category }}</span>
        </div>
      </div>

      <div class="info">
        <ul class="info-list">
          <li
            class="info-item"
            v-for="item in worker.description"
            :key="item.id"
          >
            <v-icon class="info-icon" :icon="item.icon" />

            <div class="info-content">
              <h6 class="info-title">{{ item.title }}</h6>

              <p class="info-description">{{ item.text }}</p>
            </div>
          </li>
        </ul>

        <v-button
          class="info-button"
          color="primary"
          @click="openModal"
        >
          {{ $t("buttons.enroll") }}
        </v-button>
      </div>
    </div>
  </div>

  <div v-else class="error-message">{{ $t("specialist.error") }}</div>

  <modal-entry :isOpenModal="isOpenModal" @close="closeModal"/>
</template>

<script>
import VCrumbs from '@/components/common/VCrumbs';
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import ModalEntry from '@/components/modals/ModalEntry';

export default {
  name: 'SectionSpecialist',

  components: {
    VCrumbs,
    VIcon,
    VButton,
    ModalEntry
  },

  props: {
    worker: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isOpenModal: false
    };
  },

  methods: {
    openModal() {
      this.isOpenModal = true;
    },

    closeModal() {
      this.isOpenModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-specialist {
  padding: 88px 0 32px 0;
}

.specialist-title {
  @extend .title;
  margin-bottom: 72px;
}

.specialist-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}

.avatar {
  position: relative;
  align-self: flex-start;
  margin-right: 16px;
  border-radius: 20px;
  overflow: hidden;
}

.avatar-image {
  width: 100%;
  object-fit: cover;
}

.badges {
  position: absolute;
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  bottom: 12px;
  left: 12px;
  transition: all 0.3s ease;
}

.badge {
  border-radius: 29px;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: $color-white;
  background: rgba(255, 255, 255, 0.1);

  &:not(:last-child) {
    margin-bottom: 4px;
  }
}

.info {
  grid-column: 2/4;
}

.info-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  padding: 32px;
  background-color: $color-whitesmoke;
  border-radius: 20px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
}

.info-icon {
  position: relative;
  top: 4px;
  flex: 0 0 24px;
  height: 24px;
  fill: $color-cyan;
  margin-right: 24px;
}

.info-title {
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
}

.info-description {
  font-weight: 500;
  line-height: 175%;
  color: $color-darkgray;
}

.info-button {
  width: 100%;
}

.error-message {
  padding-top: 100px;
  font-size: 24px;
}

@media (max-width: 1366px) {
  .section-specialist {
    padding: 32px 0;
  }
}

@media (max-width: 992px) {
  .specialist-title {
    margin-bottom: 40px;
  }
}

@media (max-width: 767px) {
  .section-specialist {
    padding: 0;
  }

  .specialist-title {
    text-align: center;
  }

  .specialist-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .avatar {
    width: 288px;
    margin: 0 auto 40px;
  }
}

@media (max-width: 576px) {
  .info-item {
    flex-direction: column;
  }

  .info-icon {
    margin-right: 0;
    margin-bottom: 24px;
  }
}
</style>