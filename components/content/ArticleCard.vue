<template>
  <div class="card">
    <NuxtLink :to="path">
      <img :src="image.src" :alt="image.alt" class="card-image" />
      <div class="card-content">
        <h2 class="card-title">{{ formatTitle }}</h2>
        <p class="card-description">{{ formatDescription }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  description: String,
  image: Object,
  path: String,
});

// format the title to be less than 40 characters
const formatTitle =
  props.title.length > 40 ? `${props.title.slice(0, 40)}...` : props.title;
// format the description to be less than 100 characters
const formatDescription =
  props.description.length > 100
    ? `${props.description.slice(0, 100)}...`
    : props.description;
</script>

<style scoped>
.card {
  width: 300px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  margin: 1rem 0;
  object-fit: contain;
}

.card-content {
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.card-description {
  color: #666;
  font-size: 1rem;
}
</style>
