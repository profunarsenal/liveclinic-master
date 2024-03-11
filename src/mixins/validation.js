import { required, helpers } from '@vuelidate/validators';
import { phoneNumber } from '@/validators/validators';
import { IMaskDirective } from 'vue-imask';

export default {
  data() {
    return {
      mask: {
        mask: '+{7} (000) 000-00-00',
        lazy: true,
      },
    };
  },

  validations() {
    return {
      name: {
        required: helpers.withMessage(this.$t('validate.name'), required),
      },
      phone: {
        required: helpers.withMessage(this.$t('validate.name'), required),
        phoneNumber: helpers.withMessage(this.$t('validate.phone'), phoneNumber),
      },
    };
  },

  methods: {
    onAcceptInput(event) {
      const maskRef = event.detail;
      this.phone = maskRef.value;
    },

    addTemplate() {
      if (this.phone === '') {
        this.phone = '+7';
      }
    },

    removeNumbers(event) {
      event.target.value = event.target.value.replace(/[^\D]/gi, '');
    },

    editName() {
      if (this.name !== '') {
        this.name = this.name[0].toUpperCase() + this.name.substr(1);
      }
    },
  },

  directives: {
    imask: IMaskDirective,
  },
};
