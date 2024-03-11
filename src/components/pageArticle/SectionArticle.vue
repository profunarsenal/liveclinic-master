<template>
  <div v-if="article" class="section-article">
    <v-crumbs
      link="/info"
      :lastPage="$t('articles.crumbs')"
      :currentPage="article.title"
    />

    <v-tag :color="article.class">{{article.tag}}</v-tag>

    <h2 class="article-title">{{ article.title }}</h2>

    <div class="info">
      <img 
        class="avatar"  
        :src="article.img" 
        alt="avatar" 
      />

      <div class="author">
        <p class="author-name">{{ article.author }}</p>
        <p class="time">
          {{ article.date }} • {{ article.time }}
          {{ $tc("minutes", defineMinutes) }} {{ $t("articles.read") }}
        </p>
      </div>
    </div>

    <div class="content">
      <div class="description">{{ article.description }}</div>

      <ul class="description-list">
        <li
          class="description-item"
          v-for="item in article.articles"
          :key="item.title"
        >
          <h4 class="description-title">{{ item.title }}</h4>
          <p class="description-text">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>

  <div v-else class="error-message">{{ $t("article.error") }}</div>
</template>

<script>
import VTag from '@/components/common/VTag';
import VCrumbs from '@/components/common/VCrumbs';
import pluralization from '@/mixins/pluralization';

export default {
  name: 'SectionArticle',

  components: {
    VTag,
    VCrumbs,
  },

  mixins: [pluralization],

  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 742px;
  margin: 0 auto;
  padding: 88px 0 132px 0;
}

.article-title {
  @extend .title;
  margin-bottom: 24px;
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
}

.avatar {
  width: 56px;
  height: 56px;
  margin-right: 16px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}

.author {
  display: flex;
  flex-direction: column;
}

.author-name {
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 18px;
  line-height: 155%;
}

.time {
  font-weight: 600;
  line-height: 150%;
  color: $color-lightgray;
}

.description {
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 175%;
  color: $color-darkgray;
}

.description-item:not(:last-child) {
  margin-bottom: 40px;
}

.description-title {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
}

.description-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 175%;
  color: $color-darkgray;
}

.error-message {
  padding: 100px 0;
  font-size: 24px;
}

@media (max-width: 1366px) {
  .section-article {
    padding: 40px 0 100px 0;
  }
}

@media (max-width: 767px) {
  .section-article {
    padding: 0 0 72px 0;
    align-items: center;
  }

  .article-title {
    text-align: center;
  }

  .info {
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    margin-right: 0;
    margin-bottom: 16px;
  }

  .description-title {
    font-size: 24px;
    line-height: 135%;
  }
}
</style>