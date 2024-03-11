<template>
  <div v-if="spollers.length" class="questions">
    <div class="questions-header">
      <h2 class="questions-title">{{ $t("questions.title") }}</h2>

      <p class="support" v-html="$t('questions.subtitle')" />

      <div class="social">
        <a class="social-link" href="https://wa.me/79276560393">
          <v-icon class="social-icon icon-whatsapp" icon="whatsapp" />
        </a>

        <a class="social-link" href="tg://resolve?domain=prohorov_i">
          <v-icon class="social-icon icon-telegram" icon="telegram" />
        </a>

        <a class="social-link" href="malito:info@liveclinic.ru">
          <v-icon class="social-icon icon-email" icon="email" />
        </a>
      </div>

      <div class="image-wrapper">
        <img
          class="image"
          src="@/assets/images/questions.svg"
          alt="illustration"
        />
      </div>
    </div>

    <div class="spollers">
      <ul class="spollers-list">
        <li
          v-for="(spoller, index) in spollers"
          :class="['spollers-item', getActiveClasses(index)]"
          :key="spoller.id"
          @click="toggleSpoller(index)"
        >
          <h5 class="spollers-title">{{ spoller.title }}</h5>

          <p class="spollers-description">{{ spoller.description }}</p>
        </li>
      </ul>
    </div>
  </div>

  <div v-else class="error-message">{{ $t("questions.error") }}</div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
  name: 'SectionQuestions',

  components: {
    VIcon,
  },

  props: {
    spollers: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      activeSpoller: 0
    };
  },

  methods: {
    toggleSpoller(index) {
      if (index === this.activeSpoller) {
        this.activeSpoller = null;
      } else {
        this.activeSpoller = index;
      }
    },

    getActiveClasses(index) {
      return { active: index === this.activeSpoller };
    }
  }
};
</script>

<style lang="scss" scoped>
.questions {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 150px 0;
}

.questions-header {
  flex: 0 1 30%;
}

.questions-title {
  @extend .title;
  margin-bottom: 72px;
}

.support {
  max-width: 280px;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 155%;
}

.social {
  margin-bottom: 12px;
}

.social-link:not(:last-child) {
  margin-right: 8px;
}

.social-icon {
  fill: rgba($color-darkgray, 0.3);
  transition: all 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      &.icon-whatsapp {
        fill: $color-green;
      }

      &.icon-telegram {
        fill: $color-blue;
      }

      &.icon-email {
        fill: $color-cyan;
      }
    }
  }
}

.image-wrapper {
  position: relative;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  transform: translateX(-30%);
}

.spollers {
  flex: 0 1 70%;
}

.spollers-list {
  display: flex;
  flex-direction: column;
}

.spollers-item {
  position: relative;
  padding: 32px 32px 32px 80px;
  border-radius: 20px;
  background-color: $color-whitesmoke;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 32px;
    left: 32px;
    width: 24px;
    height: 26px;
    background: url("@/assets/images/spoller_plus.svg") no-repeat;
    transition: all 0.3s ease;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (any-hover: hover) {
    &:hover {
      background-color: #f2f4f7;
    }
  }

  &.active {
    &::before {
      background-image: url("@/assets/images/spoller_minus.svg");
    }
  }

  &.active > .spollers-title {
    margin-bottom: 8px;
  }

  &.active > .spollers-description {
    width: auto;
    height: auto;
    opacity: 1;
    visibility: visible;
  }
}

.spollers-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 155%;
}

.spollers-description {
  width: 0;
  height: 0;
  font-weight: 500;
  line-height: 175%;
  color: $color-darkgray;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  transition: height width 0.5s ease;
}

.error-message {
  padding-top: 100px;
  font-size: 24px;
}

@media (max-width: 1366px) {
  .questions {
    padding: 100px 0;
  }
}

@media (max-width: 767px) {
  .questions {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 20px 0;
  }

  .questions-header {
    flex: 0 1 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .questions-title {
    margin-bottom: 40px;
  }

  .support {
    max-width: auto;
  }

  .image-wrapper {
    order: -1;
    position: relative;
  }

  .image {
    position: relative;
    transform: translateX(0);
  }

  .spollers {
    width: 100%;
  }
}
</style>