<template>
  <teleport to=".wrapper">
    <div v-if="isOpenModal" class="modal">
      <div  
        class="modal-back"
        :style="paddingStyle"
        @click="$emit('close')"
      />

      <div class="modal-window" :style="paddingStyle">
        <button class="button-close" @click="$emit('close')">
          <v-icon class="icon-close" icon="close" />
        </button>

        <slot />
      </div>
    </div>
  </teleport>

</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
  name: 'VModal',

  components: {
    VIcon,
  },

  emits: ['close'],

  props: {
    isOpenModal: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      paddingOffset: '0px'
    }
  },

  computed: {
    paddingStyle() {
      return {
        paddingRight: this.paddingOffset
      }
    }
  },

  methods: {
    setPaddings() {
      const body = document.body;
      const header = document.querySelector('.header');

      body.style.paddingRight = this.paddingOffset;
      header.style.paddingRight = this.paddingOffset;
    }
  },

  watch: {
    isOpenModal(newValue) {
      this.paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

      if (newValue) {
        document.body.classList.add('lock');
        this.setPaddings();
      } else {
        document.body.classList.remove('lock');
        this.setPaddings();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-back {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.modal-window {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  max-width: 432px;
  background-color: $color-white;
  border-radius: 16px;
  transform: translate(-50%, -50%);
}

.button-close {
  position: absolute;
  z-index: 999;
  top: 20px;
  right: 20px;
  background-color: transparent;
}

.icon-close {
  fill: rgba($color-lightgray, 0.3);
  transition: all 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      fill: rgba($color-dark, 0.6);
    }
  }
}

@media (max-width: 576px) {
  .modal-window {
    width: 95%;
  }
}
</style>