<template>
  <div v-if="articles.length" class="articles">
    <div class="articles-header">
      <h2 class="articles-title">{{ $t("articles.title") }}</h2>

      <img
        class="image"
        src="@/assets/images/articles.svg"
        alt="illustration"
      />
    </div>

    <div class="articles-list">
      <card-article
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>

  <div v-else class="error-message">{{ $t("articles.error") }}</div>
</template>

<script>
import CardArticle from '@/components/pageArticle/CardArticle';

export default {
  name: 'SectionArticles',

  components: {
    CardArticle,
  },

  props: {
    articles: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.articles {
  padding: 100px 0 150px;
}

.articles-header {
  position: relative;
}

.articles-title {
  @extend .title;
  margin-bottom: 72px;
}

.image {
  position: absolute;
  top: -100px;
  right: 0;
}

.articles-list {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  row-gap: 72px;
  column-gap: 48px;
}

.error-message {
  padding: 100px 0;
  font-size: 24px;
}

@media (max-width: 1366px) {
  .articles {
    padding: 100px 0;
  }
}

@media (max-width: 767px) {
  .articles {
    padding: 72px 0 20px;
  }

  .articles-header {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  .image {
    position: relative;
    top: 0;
    margin-bottom: 40px;
  }
}
</style>