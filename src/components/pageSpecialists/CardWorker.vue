<template>
  <li v-if="worker" class="card">
    <router-link :to="`/specialist?id=${worker.id}`">
      <div class="card-photo">
        <img 
          class="card-image" 
          :src="worker.img" 
          alt="worker" 
        />

        <div class="card-badges">
          <span class="card-badge">
            {{ $t("specialists.badge") }} {{ worker.experience }}
          </span>
          <span class="card-badge">{{ worker.category }}</span>
        </div>

        <p class="card-link">
          <v-icon class="card-icon" icon="arrow" />
          <span class="card-text" v-html="$t('specialists.more')" />
        </p>

        <v-button
          class="card-button"
          color="primary"
          @click.prevent="openModal"
        >
          {{ $t("buttons.enrollCard") }}
        </v-button>
      </div>

      <div class="card-info">
        <span class="card-name">{{ worker.name }}</span>
        <span class="card-position">{{ worker.position }}</span>
      </div>
    </router-link>

    <div class="mobile-buttons">
      <v-button
        class="mobile-button"
        color="primary"
        @click="openModal"
      >
        {{ $t("buttons.enrollCard") }}
      </v-button>

      <v-button
        class="mobile-button"
        color="secondary"
        @click="$router.push(`/specialist?id=${worker.id}`)"
      >
        {{ $t("buttons.more") }}
      </v-button>
    </div>
  </li>

  <modal-entry :isOpenModal="isOpenModal" @close="closeModal"/>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import ModalEntry from '@/components/modals/ModalEntry';

export default {
  name: 'CardWorker',

  components: {
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
.card-photo {
  position: relative;
  margin-bottom: 16px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  @media (any-hover: hover) {
    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
      }

      .card-image {
        filter: blur(10px);
      }

      .card-link {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%) scale(1);
      }
      .card-button {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .card-badge {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.card-badges {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 12px;
  left: 12px;
  transition: all 0.3s ease;
}

.card-badge {
  border-radius: 29px;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: $color-white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);

  &:not(:last-child) {
    margin-bottom: 4px;
  }
}

.card-link {
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.3s ease;
}

.card-icon {
  margin-bottom: 8px;
  fill: $color-white;
}

.card-text {
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 155%;
  color: $color-white;
}

.card-button {
  position: absolute;
  z-index: 5;
  bottom: 12px;
  left: 12px;
  right: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  transition: all 0.3s ease;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-name {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
  color: $color-dark;
}

.card-position {
  line-height: 150%;
  color: $color-darkgray;
}

.mobile-buttons {
  display: none;
}

@media (max-width: 992px) {
  .card-name {
    font-size: 16px;
  }

  .card-badge {
    font-size: 11px;
  }
}

@media (max-width: 767px) {
  .card-name {
    font-size: 20px;
    text-align: center;
  }

  .card-position {
    margin-bottom: 20px;
    text-align: center;
  }

  .card-badge {
    font-size: 14px;
  }

  .mobile-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .mobile-button {
    min-width: 45%;
    padding: 20px 18px;
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .mobile-button {
    padding: 20px 18px;
    font-size: 18px;
  }
}
</style>