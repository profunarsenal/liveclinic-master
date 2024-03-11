<template>
  <div class="entry">
    <div class="container">
      <div class="entry-inner">
        <div class="content">
          <h2 class="entry-title" v-html="$t('entry.title')" />

          <p class="entry-subtitle" v-html="$t('entry.subtitle')" />

          <v-icon class="entry-icon" icon="arrow" />
        </div>

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
            {{ $t("buttons.enroll") }}
          </v-button>
        </form>
      </div>
    </div>
  </div>

  <modal-message 
    :isOpenModal="isOpenModal" 
    :message="message" 
    @close="closeModal"
  />
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';
import VInput from '@/components/common/VInput';
import ModalMessage from '@/components/modals/ModalMessage';
import { useVuelidate } from '@vuelidate/core';
import validation from '@/mixins/validation';

export default {
  name: 'SectionEntry',

  components: {
    VIcon,
    VButton,
    VInput,
    ModalMessage
  },

  mixins: [validation],

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      name: '',
      phone: '',
      isOpenModal: false,
      message: {}
    }
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

        this.setMessage(this.$tm('messages.formSucces'));
        this.openModal();

        this.resetForm();
      } catch {
        this.setMessage(this.$tm('messages.formError'));
        this.openModal();
      }
    },

    openModal() {
      this.isOpenModal = true;
    },

    closeModal() {
      this.isOpenModal = false;
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
};
</script>

<style lang="scss" scoped>
.entry {
  padding: 150px 0;
}

.entry-inner {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 72px 76px;
  border-radius: 48px;
  background: url("@/assets/images/frame.svg") no-repeat center / contain;
}

.content {
  position: relative;
  flex: 0 1 40%;
  margin-right: 132px;
}

.entry-title {
  @extend .title;
  margin-bottom: 60px;
}

.entry-subtitle {
  font-size: 18px;
  line-height: 155%;
  color: rgba($color-darkgray, 0.8);
}

.entry-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  fill: $color-dark;
}

.form {
  position: relative;
  z-index: 1;
  flex: 0 1 60%;
  padding-top: 16px;

  & > .input-label {
    margin-bottom: 20px;
  }
}

@media (max-width: 992px) {
  .entry {
    padding: 100px 0;
  }

  .entry-inner {
    flex-direction: column;
    padding: 40px;
    text-align: center;
    background: none;
  }

  .entry-icon {
    display: none;
  }

  .content {
    flex: 0 1 100%;
    margin-right: 0;
    margin-bottom: 12px;
  }

  .form {
    flex: 0 1 100%;
  }

  .entry-title {
    margin-bottom: 40px;
  }

  .form-button {
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .entry {
    padding: 72px 0;
  }

  .entry-inner {
    padding: 40px;
  }

  .form-button {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .entry-inner {
    padding: 0;
  }
}
</style>