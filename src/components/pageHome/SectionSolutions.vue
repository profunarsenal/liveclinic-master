<template>
  <div class="container">
    <div class="solutions-inner">
      <h2 class="solutions-title">{{ $t("solutions.title") }}</h2>

      <div class="solutions-grid">
        <div class="director">
          <img
            class="avatar"
            src="https://firebasestorage.googleapis.com/v0/b/liveclinic63.appspot.com/o/worker_1.jpg?alt=media&token=e6a4e3b9-013d-410a-81e3-cadba473d538"
            alt="avatar"
          />

          <v-icon class="solutions-icon" icon="arrow" />

          <span class="director-name">{{ $t("solutions.name") }}</span>

          <span class="director-position">{{ $t("solutions.position") }}</span>
        </div>

        <ul class="solutions-items">
          <li 
            class="solutions-item" 
            v-for="item in solutions" 
            :key="item.text"
          >
              
            <v-icon class="check" icon="check" />
            <p class="description" v-html="item.text" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VIcon from "@/components/common/VIcon";

export default {
  name: 'SectionSolutions',

  components: {
    VIcon,
  },

  data() {
    return {
      solutions: this.$tm('solutions.items'),
    };
  },
};
</script>

<style lang="scss" scoped>
.solutions-title {
  @extend .title;
  margin-bottom: 72px;
}

.solutions-inner {
  padding: 150px 0;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.director {
  display: flex;
  flex-direction: column;
  margin-right: 48px;
}

.avatar {
  margin-bottom: 106px;
  width: 256px;
  height: 256px;
  object-fit: cover;
  border-radius: 50%;
}

.solutions-icon {
  margin-bottom: 32px;
  fill: $color-dark;
}

.director-name {
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
}

.director-position {
  font-size: 18px;
  line-height: 155%;
  color: $color-darkgray;
}

.solutions-items {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, min-content);
  column-gap: 48px;
  row-gap: 40px;
}

.check {
  margin-bottom: 12px;
  fill: $color-cyan;
}

.description {
  font-size: 18px;
  line-height: 155%;
}

@media (max-width: 992px) {
  .solutions-inner {
    padding: 100px 0;
  }

  .avatar {
    margin-bottom: 50px;
    width: 226px;
    height: 226px;
  }

  .solutions-items {
    column-gap: 42px;
    row-gap: 20px;
  }

  .check {
    margin-bottom: 6px;
  }
}

@media (max-width: 767px) {
  .solutions-inner {
    padding: 72px 0;
  }

  .solutions-title {
    margin-bottom: 40px;
    text-align: center;
  }

  .solutions-icon {
    display: none;
  }

  .solutions-grid {
    display: flex;
    flex-direction: column;
  }

  .avatar {
    width: 256px;
    height: 256px;
    margin: 0 auto 30px;
  }

  .director {
    margin-right: 0;
    margin-bottom: 40px;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .solutions-items {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, min-content);
    column-gap: 0;
    row-gap: 40px;
  }
}
</style>