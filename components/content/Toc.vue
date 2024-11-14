<template>
    <Card class="toc">
        <slot />
    </Card>
</template>

<script setup>
import Card from '~/components/content/Card.vue'
</script>

<style>
.toc li {
    line-height: 1rem;
}
</style>