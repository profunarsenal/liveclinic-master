<template>
  <router-link
    v-if="article"
    class="card-article"
    :to="`/article?id=${article.id}`"
  >
    <v-tag :color="article.class">{{article.tag}}</v-tag>

    <h5 class="card-title">{{ article.title }}</h5>

    <p class="card-description">{{ article.description }}</p>

    <div class="card-time">
      {{ article.date }} • {{ article.time }}
      {{ $tc("minutes", defineMinutes) }} {{ $t("articles.read") }}
    </div>
  </router-link>
</template>

<script>
import VTag from '@/components/common/VTag';
import pluralization from '@/mixins/pluralization';

export default {
  name: 'CardArticle',

  components: {
    VTag,
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
.card-article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-title {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 135%;
  color: $color-dark;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-description {
  margin-bottom: 24px;
  line-height: 175%;
  color: $color-lightgray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-time {
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  color: $color-cyan;
}
</style>