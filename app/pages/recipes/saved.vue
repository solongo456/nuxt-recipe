<script setup lang="ts">
import { useSavedRecipes } from "~~/composables/useSavedRecipes";
import { type Recipe } from "~~/types/types";

const { savedRecipes } = useSavedRecipes();

const { data, error } = await useFetch<{ recipes: Recipe[] }>("https://dummyjson.com/recipes");

const filteredRecipes = computed(() => {
  return data.value?.recipes.filter((recipe) => savedRecipes.value.includes(recipe.id)) || [];
});
</script>

<template>
  <main>
    <p class="text-lg lg:text-xl mb-8">Your favorite recipes</p>
    <div v-if="filteredRecipes.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      <div v-for="recipe in filteredRecipes" :key="recipe.id" class="flex flex-col shadow rounded-md">
        <NuxtImg :src="recipe.image" sizes="xs:100vw sm:50vw lg:400px" format="webp" densities="x1"
          class="rounded-md" alt="Recipe image" />
        <div class="flex flex-col py-6 px-4 flex-1">
          <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
          <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
            <NuxtLink :to="`/recipes/${recipe.id}`"
              class="px-4 py-2 text-white self-start bg-dodgeroll-gold-400 rounded-md cursor-pointer">
              View
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="text-lg text-gray-500">No saved recipes found.</p>
  </main>
</template>
