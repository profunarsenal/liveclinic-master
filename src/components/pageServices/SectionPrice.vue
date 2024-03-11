<template>
  <div v-if="services.length" class="price">
    <div class="price-header">
      <h2 class="title">{{ $t("services.title") }}</h2>

      <img 
        class="image" 
        src="@/assets/images/price.svg" 
        alt="illustration" 
      />

      <v-icon class="price-icon" icon="arrow" />
    </div>

    <ul class="price-items">
      <card-service
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </ul>
  </div>

  <div v-else class="error-message">{{ $t("services.error") }}</div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import CardService from '@/components/pageServices/CardService';

export default {
  name: 'SectionPrice',

  components: {
    VIcon,
    CardService,
  },

  props: {
    services: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.price-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 72px;
}

.image {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.price-icon {
  position: absolute;
  bottom: 30px;
  left: 0;
  fill: $color-dark;
  transform: rotate(90deg);
}

.price-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
  gap: 16px;
}

.error-message {
  padding-top: 100px;
  font-size: 24px;
}

@media (max-width: 1366px) {
  .image {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 992px) {
  .price-header {
    margin-bottom: 40px;
  }

  .image {
    width: 300px;
    height: 300px;
  }

  .price-items {
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .price-header {
    flex-direction: column-reverse;
  }

  .price-icon {
    display: none;
  }

  .price-items {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
}

@media (max-width: 480px) {
  .image {
    width: 288px;
    height: 176px;
  }
}
</style>