<template>
  <div class="methods">
    <div class="container">
      <div class="methods-inner">
        <h2 class="methods-title">
          <span class="main-title">{{ $t("methods.title") }}</span>
          <span class="subtitle">{{ $t("methods.subtitle") }}</span>
        </h2>

        <v-icon class="methods-icon" icon="arrow" />

        <ul class="methods-items">
          <li 
            class="methods-item" 
            v-for="item in methods" 
            :key="item.name"
          >
            
            <h6 class="abbreviation">{{ item.name }}</h6>
            <p class="name" v-html="item.title" />
            <p class="description description-hide">{{ item.description }}</p>

            <div class="hideblock">
              <h6 class="abbreviation">{{ item.name }}</h6>
              <p class="name" v-html="item.title" />
              <p class="description">{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from "@/components/common/VIcon";

export default {
  name: 'SectionMethods',

  components: {
    VIcon,
  },

  data() {
    return {
      methods: this.$tm('methods.items'),
    };
  },
};
</script>

<style lang="scss" scoped>
.methods {
  background-color: $color-whitesmoke;
}

.methods-inner {
  position: relative;
  padding: 150px 0;
}

.methods-title {
  @extend .title;
  display: flex;
  margin-bottom: 72px;
}

.main-title {
  margin-right: 72px;
}

.subtitle {
  max-width: 362px;
  padding-top: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 155%;
  color: $color-darkgray;
}

.methods-icon {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(180deg);
  fill: $color-dark;
}

.methods-items {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-columns: 1fr 1fr;
  gap: 16px;
}

.methods-item {
  position: relative;
  padding: 40px;
  border-radius: 20px;
  min-height: 230px;
  background-color: $color-white;
  cursor: pointer;

  @media (any-hover: hover) {
    &:hover {
      .hideblock {
        opacity: 1;
        visibility: visible;
      }

      .description {
        transform: translateY(0);
      }
    }
  }

  &:nth-child(1) {
    grid-column: 1/3;
  }

  &:nth-child(2) {
    grid-column: 3/5;
  }

  &:nth-child(3) {
    grid-column: 5/7;
  }

  &:nth-child(4) {
    grid-column: 1/4;
  }

  &:nth-child(5) {
    grid-column: 4/7;
  }
}

.abbreviation {
  margin-bottom: 16px;
  font-size: 64px;
  line-height: 110%;
  letter-spacing: -0.02em;
  color: $color-cyan;
}

.name {
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 135%;
}

.hideblock {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  padding: 40px;
  border-radius: 20px;
  background-color: $color-white;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.1);
  transition: all 0.5s ease;
}

.description-hide {
  display: none;
}

.description {
  font-weight: 500;
  font-size: 18px;
  line-height: 155%;
  color: rgba($color-darkgray, 0.7);
  transform: translateY(-10%);
  transition: all 0.3s ease;
}

@media (max-width: 992px) {
  .methods-inner {
    padding: 100px 0;
  }

  .methods-icon {
    display: none;
  }

  .main-title {
    margin-right: 36px;
  }

  .methods-item {
    padding: 24px;
  }

  .abbreviation {
    font-size: 48px;
  }

  .name {
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  .methods-inner {
    padding: 72px 0;
  }

  .methods-title {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .name {
    margin-bottom: 36px;
  }

  .main-title {
    margin-right: 0;
    margin-bottom: 40px;
  }

  .methods-items {
    display: flex;
    flex-direction: column;
  }

  .methods-item {
    height: auto;
  }

  .description-hide {
    display: block;
  }
}

@media (max-width: 480px) {
  .name {
    margin-bottom: 56px;
  }
}
</style>