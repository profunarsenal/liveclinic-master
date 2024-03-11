<template>
  <v-modal :isOpenModal="isOpenModal" @close="$emit('close')">
    <div v-if="message" class="modal-message">
      <h6 class="message-title">{{ message.title }}</h6>
      <p class="message-text">{{ message.text }}</p>
    </div>
  </v-modal>
</template>

<script>
import VModal from '@/components/common/VModal';

export default {
  name: 'ModalMessage',

  components: {
    VModal
  },

  props: {
    message: {
      type: Object,
      default: () => {}
    },

    isOpenModal: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.modal-message {
  padding: 30px;
  text-align: center;
}

.message-title {
  display: block;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
}

.message-text {
  font-size: 18px;
  line-height: 140%;
}
</style>