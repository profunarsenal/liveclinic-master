<template>
  <div class="container">
    <div class="about-inner">
      <div class="content">
        <h2 class="about-title">{{ $t("about.title") }}</h2>

        <p class="about-text">{{ $t("about.firstText") }}</p>

        <p class="about-text">{{ $t("about.secondText") }}</p>

        <v-icon class="about-icon" icon="arrow" />
      </div>

      <img 
        class="image" 
        src="@/assets/images/about.jpg" 
        alt="team" 
      />
    </div>
  </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
  name: 'SectionAbout',

  components: {
    VIcon,
  },
};
</script>

<style lang="scss" scoped>
.about-inner {
  padding: 150px 0;
}

.content {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 72px;
}

.about-title {
  @extend .title;
  flex: 0 1 33%;
}

.about-text {
  flex: 0 1 33%;
  min-height: 220px;
  padding-top: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 155%;
}

.about-icon {
  position: absolute;
  bottom: 0;
  left: 0;
  fill: $color-dark;
  transform: rotate(90deg);
}

.image {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  object-fit: cover;
}

@media(max-width: 992px) {
  .about-inner {
    padding: 100px 0;
  }
}

@media (max-width: 767px) {
  .about-inner {
    padding: 72px 0;
  }

  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }

  .about-text {
    min-height: auto;
  }

  .about-icon {
    display: none;
  }
}
</style>