<template>
  <div class="container">
    <div class="profile-inner">
      <h2 class="profile-title">{{ $t("profile.title") }}</h2>

      <v-icon class="profile-icon" icon="arrow" />

      <ul class="works">
        <li 
          class="works-item" 
          v-for="item in works" 
          :key="item.id"
        >
            
          <div class="image-wrapper">
            <img
              class="image"
              :src="require(`@/assets/images/works_${item.id}.svg`)"
              alt="illustration"
            />
          </div>

          <p class="description">{{ item.title }}</p>

          <v-badge class="works-badge" type="number">{{ item.id }}</v-badge>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VIcon from "@/components/common/VIcon";
import VBadge from "@/components/common/VBadge";

export default {
  name: 'SectionProfile',

  components: {
    VBadge,
    VIcon,
  },

  data() {
    return {
      works: this.$tm('profile.items'),
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-inner {
  position: relative;
  padding: 150px 0;
}

.profile-title {
  @extend .title;
  margin-bottom: 104px;
}

.profile-icon {
  position: absolute;
  top: 32px;
  right: 0;
  transform: rotate(180deg);
  fill: $color-dark;
}

.works {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
}

.works-item {
  position: relative;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background-color: $color-whitesmoke;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description {
  font-weight: 500;
  font-size: 20px;
  line-height: 140%;
}

.works-badge {
  position: absolute !important;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
}

@media(max-width: 992px) {
  .profile-inner {
    padding: 100px 0;
  }  
}

@media (max-width: 767px) {
  .profile-inner {
    padding: 72px 0;
    text-align: center;
  }

  .profile-icon {
    display: none;
  }

  .works {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  .image-wrapper {
    width: 70%;
    height: 70%;
    margin: 0 auto;
  }

  .description {
    padding-top: 16px;
    max-width: 50%;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .image-wrapper {
    width: 100%;
    height: 100%;
  }

  .description {
    padding-top: 16px;
    max-width: 100%;
  }
}
</style>