<template>
  <div :class="mapClasses">
    <yandex-map  
      :coords="coords" 
      :zoom="15"  
      style="width: 100%; height: 100%"
    >
      <ymap-marker 
        :coords="coords" 
        marker-id="1" 
        hint-content="liveclinic" 
      />
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps';

export default {
  name: 'MapBlock',

  components: {
    yandexMap,
    ymapMarker,
  },

  props: {
    isReverse: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      coords: [59.942034, 30.368647],
    };
  },

  computed: {
    mapClasses() {
      return ['map-block', { reverse: this.isReverse }];
    },
  },
};
</script>

<style lang="scss" scoped>
.map-block {
  grid-column: 2/5;
  border-radius: 20px;
  overflow: hidden;
  height: 576px;
}

@media (max-width: 767px) {
  .map-block {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .map-block {
    height: 290px;
  }
}
</style>