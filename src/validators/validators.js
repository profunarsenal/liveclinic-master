import { helpers } from '@vuelidate/validators';

export const phoneNumber = helpers.regex(
  /^[\d\+][\d\(\)\ -]{16,18}\d$/
);