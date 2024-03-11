<template>
  <div :class="contactsClasses">
    <h2 class="section-title">{{ $t("contacts.titleSection") }}</h2>

    <div class="section-inner">
      <contacts-block :isReverse="isReverse" />
      <map-block :isReverse="isReverse" />
    </div>
  </div>
</template>

<script>
import MapBlock from '@/components/pageContacts/MapBlock';
import ContactsBlock from '@/components/pageContacts/ContactsBlock';

export default {
  name: 'SectionContacts',

  components: {
    MapBlock,
    ContactsBlock,
  },

  props: {
    isReverse: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    contactsClasses() {
      return ['section-contacts', { reverse: this.isReverse }];
    },
  },
};
</script>

<style lang="scss" scoped>
.section-contacts {
  padding: 150px 0;

  &.reverse {
    padding-top: 0;
  }

  &.reverse > .section-title {
    display: none;
  }

  &.reverse > .section-inner {
    display: flex;
    flex-direction: column;
  }
}

.section-title {
  @extend .title;
  margin-bottom: 72px;
}

.section-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
}

@media (max-width: 1366px) {
  .section-contacts {
    padding: 100px 0;
  }
}

@media (max-width: 992px) {
  .section-title {
    margin-bottom: 40px;
    text-align: center;
  }

  .section-inner {
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
  }
}

@media (max-width: 767px) {
  .section-contacts {
    padding: 72px 0;

    &.reverse > .section-inner {
      flex-direction: column-reverse;
    }
  }
}
</style>