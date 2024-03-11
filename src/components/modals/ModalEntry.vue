<template>
  <v-modal :isOpenModal="isOpenModal" @close="$emit('close')">
    <div class="modal-entry">
      <h4 class="title">{{ $t("modalEntry.title") }}</h4>

      <p class="subtitle" v-html="$t('modalEntry.subtitle')" />

      <form class="form" @submit.prevent="submit">
        <v-input
          v-model="name"
          icon="user"
          :placeholder="$t('placeholders.name')"
          :errors="v$.name.$errors"
          @onBlur="v$.name.$touch"
          @onKeypress="editName"
          @input="removeNumbers"
        />

        <v-input
          v-model="phone"
          :mask="mask"
          icon="phone"
          :placeholder="$t('placeholders.phone')"
          :errors="v$.phone.$errors"
          @onBlur="v$.phone.$touch"
          @onAccept="onAcceptInput"
          @onFocus="addTemplate"
          maxlength="18"
        />

        <v-button class="form-button" color="primary">
          {{ $t("buttons.call") }}
        </v-button>

        <v-button 
          class="form-button" 
          icon="whatsapp" 
          color="whatsapp"
        >
          {{ whatsappButton }}
        </v-button>

        <v-button 
          class="form-button" 
          icon="telegram" 
          color="telegram"
        >
          {{ telegramButton }}
        </v-button>
      </form>

      <p class="text-info">{{ $t("modalEntry.text") }}</p>
    </div>
  </v-modal>


  <modal-message 
    :isOpenModal="isOpenModalMessage" 
    :message="message" 
    @close="closeModal"
  />
</template>

<script>
import VInput from '@/components/common/VInput';
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import VModal from '@/components/common/VModal';
import ModalMessage from '@/components/modals/ModalMessage';
import { useVuelidate } from '@vuelidate/core';
import validation from '@/mixins/validation';
import window from '@/mixins/window';

export default {
  name: 'ModalEntry',

  components: {
    VInput,
    VIcon,
    VButton,
    VModal,
    ModalMessage
  },

  mixins: [validation, window],

  emits: ['close'],

  props: {
    isOpenModal: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      name: '',
      phone: '',
      isOpenModalMessage: false,
      message: {}
    };
  },

  computed: {
    whatsappButton() {
      return this.isDesktop ? this.$t("buttons.whatsapp") : this.$t("buttons.whatsappMobile");
    },

    telegramButton() {
      return this.isDesktop ? this.$t("buttons.telegram") : this.$t("buttons.telegramMobile");
    },
  },

  methods: {
    async submit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      try {
        await this.$service.applications.sendApplication({
          name: this.name,
          phone: this.phone,
        });

        this.$emit('close');

        this.setMessage(this.$tm('messages.formSucces'));
        this.openModal();

        this.resetForm();
      } catch {
        this.setMessage(this.$tm('messages.formError'));
        this.openModal();
      }
    },

    openModal() {
      this.isOpenModalMessage = true;
    },

    closeModal() {
      this.isOpenModalMessage = false;
    },

    setMessage(obj) {
      this.message = obj;
    },

    resetForm() {
      this.name = '';
      this.phone = '';
      this.v$.$reset();
    }
  },

  watch: {
    isOpenModal(newValue) {
      if (!newValue) {
        this.resetForm();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-entry {
  position: relative;
  min-width: 430px;
  padding: 56px 20px 20px 20px;
}

.title {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
}

.subtitle {
  margin-bottom: 40px;
  line-height: 149%;
  color: $color-lightgray;
  text-align: center;
}

.form {
  margin-bottom: 20px;

  & > .input-label {
    margin-bottom: 16px;
  }
}

.form-button {
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}

.text-info {
  font-size: 14px;
  line-height: 24px;
  color: $color-darkgray;
  text-align: center;
}

@media (max-width: 1366px) {
  .modal-entry {
    padding-top: 36px;
  }

  .subtitle {
    margin-bottom: 20px;
  }

  .form {
    margin-bottom: 10px;
  }
}

@media (max-width: 576px) {
  .modal-entry {
    min-width: auto;
    margin: 0 auto;
  }

  .form-button {
    font-size: 16px;
  }
}
</style>