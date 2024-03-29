<template>
  <header :class="headerClasses">
    <router-link class="logo" to="/">
      <img 
        class="logo-image" 
        src="@/assets/images/logo.svg" 
        alt="logotype" 
      />
    </router-link>

    <nav :class="navigationClasses">
      <ul class="navigation-list">
        <li class="navigation-item">
          <router-link 
            class="navigation-link" 
            to="/" 
            @click="closeMenu"
          >
            {{ $t("header.navLinks.main") }}
          </router-link>
        </li>

        <li class="navigation-item">
          <router-link
            class="navigation-link"
            to="/services"
            @click="closeMenu"
          >
            {{ $t("header.navLinks.services") }}
          </router-link>
        </li>

        <li class="navigation-item">
          <router-link
            class="navigation-link"
            to="/specialists"
            @click="closeMenu"
          >
            {{ $t("header.navLinks.specialists") }}
          </router-link>
        </li>

        <li class="navigation-item">
          <router-link 
            class="navigation-link" 
            to="/info" 
            @click="closeMenu"
          >
            {{ $t("header.navLinks.info") }}
          </router-link>
        </li>

        <li class="navigation-item">
          <router-link
            class="navigation-link"
            to="/contacts"
            @click="closeMenu"
          >
            {{ $t("header.navLinks.contacts") }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="contacts">
      <div class="contacts-call">
        <span class="contacts-title">+7 812 606-76-69</span>
        <span class="contacts-text">{{ $t("contacts.phoneText") }}</span>
      </div>

      <a class="contacts-link" href="https://wa.me/79276560393">
        <v-icon class="contacts-icon icon-whatsapp" icon="whatsapp" />
      </a>

      <a class="contacts-link" href="tg://resolve?domain=prohorov_i">
        <v-icon class="contacts-icon icon-telegram" icon="telegram" />
      </a>

      <button class="button-lang" @click="switchLang">
        {{ $t("lang") }}
      </button>
    </div>

    <button class="burger-button" @click="toggleMenu">
      <v-icon 
        v-if="!isOpenMenuBurger"
        class="burger-icon" 
        icon="burger"
      />
      <v-icon 
        v-else
        class="burger-icon"
        icon="close"
      />
    </button>
  </header>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'AppHeader',

  components: {
    VIcon,
  },

  data() {
    return {
      positionY: 0,
    };
  },

  computed: {
    ...mapGetters(['isOpenMenuBurger']),

    headerClasses() {
      return [
        'header',
        {
          scroll: this.positionY > 0,
          open: this.isOpenMenuBurger,
        },
      ];
    },

    navigationClasses() {
      return ['navigation', { open: this.isOpenMenuBurger }];
    },
  },

  methods: {
    ...mapMutations(['closeMenu', 'toggleMenu']),

    scrollHandler() {
      this.positionY = window.scrollY;
    },

    switchLang() {
      this.$i18n.locale === 'ru'
        ? localStorage.setItem('lang', 'en')
        : localStorage.setItem('lang', 'ru');

      window.location.reload();
    },
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },

  watch: {
    isOpenMenuBurger(newVal) {
      if (newVal) {
        document.body.classList.add('lock');
      } else {
        document.body.classList.remove('lock');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  padding: 0 32px;

  &.scroll {
    position: fixed;
    background-color: $color-white;
    box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.1);
  }
}

.logo {
  position: relative;
  z-index: 3;
  width: 140px;
  height: 64px;
  margin-right: 20px;
}

.logo-image {
  width: 100%;
  height: 100%;
}

.navigation {
  overflow: auto;
}

.navigation-list {
  display: flex;
  align-items: center;
}

.navigation-item:not(:last-child) {
  margin-right: 24px;
}

.navigation-link {
  display: inline-block;
  padding: 0 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 175%;
  color: $color-lightgray;
  transition: all 0.3s ease;

  &.active {
    color: $color-dark;
  }

  @media (any-hover: hover) {
    &:hover {
      color: $color-darkgray;
    }
  }
}

.contacts {
  display: flex;
  align-items: center;
}

.contacts-call {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  text-align: right;
}

.contacts-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  color: $color-dark;
}

.contacts-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: $color-lightgray;
}

.contacts-link:not(:last-child) {
  margin-right: 8px;
}

.contacts-icon {
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
    }
  }
}

.button-lang {
  width: 25px;
  height: 25px;
  color: $color-white;
  background-color: rgba($color-darkgray, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      background-color: rgba($color-red, 0.3);
    }
  }
}

.burger-button {
  display: none;
}

@media (max-width: 1366px) {
  .navigation-link {
    padding: 8px;
  }
}

@media (max-width: 1200px) {
  .navigation-link {
    padding: 0;
  }

  .navigation-item:not(:last-child) {
    margin-right: 18px;
  }

  .contacts-call {
    margin-right: 10px;
  }

  .contacts-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 135%;
    color: $color-dark;
  }
}

@media (max-width: 992px) {
  .contacts-call,
  .contacts-link {
    display: none;
  }

  .logo {
    width: 130px;
    height: 54px;
  }
}

@media (max-width: 767px) {
  .header {
    height: 80px;
    padding: 0 16px;

    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      top: -100%;
      left: 0;
      width: 100%;
      height: 80px;
      background-color: $color-white;
      transition: all 0.3s ease;
    }

    &.open {
      &::after {
        top: 0;
      }
    }
  }

  .navigation {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    transition: all 0.3s ease;
    background-color: $color-white;

    &.open {
      top: 0;
    }
  }

  .navigation-list {
    flex-direction: column;
  }

  .navigation-item:not(:last-child) {
    margin-right: 0;
    margin-bottom: 32px;
  }

  .navigation-link {
    font-weight: 500;
    font-size: 20px;
    line-height: 175%;
  }

  .contacts {
    margin-left: auto;
    margin-right: 20px;
  }

  .burger-button {
    position: relative;
    z-index: 3;
    display: block;
    background-color: transparent;
  }

  .burger-icon {
    width: 24px;
    height: 24px;
  }
}
</style>