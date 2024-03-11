<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-top">
          <a class="logo" @click="goToPage('/')">
            <img
              class="logo-image"
              src="@/assets/images/logo.svg"
              alt="logotype"
            />
          </a>

          <nav class="navigation">
            <ul class="navigation-list">
              <li class="navigation-item">
                <a
                  class="navigation-link"
                  href="#"
                  @click.prevent="goToSection('/', 'about-inner')"
                >
                  {{ $t("footer.navLinks.about") }}
                </a>
              </li>

              <li class="navigation-item">
                <a
                  class="navigation-link"
                  href="#"
                  @click.prevent="goToPage('/info')"
                >
                  {{ $t("footer.navLinks.questions") }}
                </a>
              </li>

              <li class="navigation-item">
                <a
                  class="navigation-link"
                  href="#"
                  @click.prevent="goToPage('/services')"
                >
                  {{ $t("footer.navLinks.services") }}
                </a>
              </li>

              <li class="navigation-item">
                <a
                  class="navigation-link"
                  href="#"
                  @click.prevent="goToSection('/info', 'articles')"
                >
                  {{ $t("footer.navLinks.articles") }}
                </a>
              </li>

              <li class="navigation-item">
                <a
                  class="navigation-link"
                  href="#"
                  @click.prevent="goToPage('/specialists')"
                >
                  {{ $t("footer.navLinks.specialists") }}
                </a>
              </li>

              <li class="navigation-item">
                <a
                  class="navigation-link"
                  href="#"
                  @click.prevent="goToPage('/contacts')"
                >
                  {{ $t("footer.navLinks.contacts") }}
                </a>
              </li>
            </ul>
          </nav>

          <div class="contacts">
            <div class="contacts-info">
              <p class="contacts-call">
                +7 812 606-76-69
              </p>

              <span class="contacts-text">{{ $t("footer.addres") }}</span>

              <span class="contacts-text">info@liveclinic.ru</span>
            </div>

            <div class="social">
              <a class="social-link" href="https://wa.me/79276560393">
                <v-icon class="social-icon icon-whatsapp" icon="whatsapp" />
              </a>

              <a class="social-link" href="tg://resolve?domain=prohorov_i">
                <v-icon class="social-icon icon-telegram" icon="telegram" />
              </a>

              <a class="social-link" href="malito:info@liveclinic.ru">
                <v-icon class="social-icon icon-email" icon="email" />
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copy">
            <span class="copy-item">{{ $t("footer.copy.item1") }}</span>
            <span class="copy-item">{{ $t("footer.copy.item2") }}</span>
          </div>

          <div class="documents">
            <a class="documents-link" href="#">
              <v-icon class="documents-icon" icon="arrow" />
              <span class="documents-title">{{ $t("footer.documents.doc1") }}</span>
            </a>

            <a class="documents-link" href="#">
              <v-icon class="documents-icon" icon="arrow" />
              <span class="documents-title">{{ $t("footer.documents.doc2") }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import { mapMutations } from 'vuex';

export default {
  name: 'AppFooter',

  components: {
    VIcon,
  },

  methods: {
    ...mapMutations(['onScroll']),

    goToPage(path) {
      if (this.$route.path === path) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        this.$router.push(path);
      }
    },

    goToSection(path, section) {
      if (this.$route.path === path) {
        document.querySelector(`.${section}`).scrollIntoView({
          behavior: 'smooth',
        });
      } else {
        this.onScroll();
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color-whitesmoke;
}

.footer-inner {
  display: flex;
  flex-direction: column;
}

.footer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 64px 0;
  border-bottom: 1px solid rgba($color-lightgray, 0.15);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
}

.logo {
  width: 140px;
  height: 64px;
  margin-right: 20px;
  cursor: pointer;
}

.logo-image {
  width: 100%;
  height: 100%;
}

.navigation-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 52px;
  row-gap: 20px;
}

.navigation-link {
  display: inline-block;
  padding: 8px 0;
  font-size: 20px;
  line-height: 140%;
  color: $color-lightgray;
  transition: all 0.3s ease;
  cursor: pointer;

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
  flex-direction: column;
}

.contacts-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.contacts-call {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  color: $color-dark;
}

.contacts-text {
  line-height: 150%;
  color: $color-dark;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}

.social-link:not(:last-child) {
  margin-right: 8px;
}

.social-icon {
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

      &.icon-email {
        fill: $color-cyan;
      }
    }
  }
}

.copy {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 10px;
}

.copy-item {
  font-size: 14px;
  line-height: 115%;
  color: $color-lightgray;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
}

.documents {
  flex: 0 1 265px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.documents-link {
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (any-hover: hover) {
    &:hover {
      .documents-title {
        color: $color-darkgray;
      }
      .documents-icon {
        fill: $color-darkgray;
      }
    }
  }
}

.documents-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: $color-lightgray;
  transition: all 0.3s ease;
}

.documents-title {
  font-size: 14px;
  line-height: 115%;
  color: $color-lightgray;
  transition: all 0.3s ease;
}

@media (max-width: 992px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    text-align: center;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .navigation {
    display: none;
  }

  .logo {
    width: 140px;
    height: 64px;
    margin-right: 0;
  }

  .copy {
    align-items: center;
    margin-right: 0;
    margin-bottom: 16px;
  }

  .documents {
    align-items: center;
  }
}
</style>