<template>
  <div class="articles-grid">
    <ArticleCard
      v-for="article in articles"
      :key="article._path"
      :title="article.title"
      :description="article.description"
      :image="article.image"
      :path="article._path"
    />
  </div>
</template>

<script setup>
import ArticleCard from '~/components/content/ArticleCard.vue'
const articles = await queryContent('_articles').find()
console.warn(articles);
</script>

<style scoped>
.articles-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
