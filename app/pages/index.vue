<script setup lang="ts">
import { type Recipe } from '~~/types/types';
import { ref, computed } from 'vue';
import { useSavedRecipes } from "~~/composables/useSavedRecipes";
const { savedRecipes, toggleSaveRecipe } = useSavedRecipes();

const { data, error } = await useFetch<Recipe>("https://dummyjson.com/recipes?limit=12");

const searchQuery = ref("");
const selectedingredients = ref("");
const selectedCuisine = ref("");

const filteredRecipes = computed(() => {
  if (!data.value?.recipes) return []; 

  return data.value.recipes.filter((recipe) => {
    const matchesSearch = searchQuery.value
      ? recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      : true;

    const matchesIngredients = selectedingredients.value
      ? recipe.ingredients && recipe.ingredients.includes(selectedingredients.value)
      : true;

    const matchesCuisine = selectedCuisine.value
      ? recipe.cuisine === selectedCuisine.value
      : true;

    return matchesSearch && matchesIngredients && matchesCuisine;
  });
});
</script>

<template>
    <main>
        <section class="bg-[#f1f1f1]">
            <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
                <div class="flex-4 order-2 lg:order-1 text-center lg:text-left">
                    <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
                        Let's learn to cook various dishes according to recipes.                
                    </h1>
                    <!-- <p class="text-xl lg:text-2xl mb-8 text-balance">
                        Discover recipes helping you to find the easiest way to cook.
                    </p> -->
                    <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold-800 rounded-md cursor-pointer">
                        Browse recipes
                    </button>
                </div>
                <div class="flex-4 order-1 lg:order-2">
                    <NuxtImg
                        sizes="xs:10vw sm:667px"
                        src="/image.png"
                        format="webp"
                        densities="x1"
                        alt="Delicious food"
                    />
                </div>
            </div>
        </section>

    <section class="container py-10">
      <div class="flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search for recipes..." 
          class="px-4 py-2 border rounded-md w-full md:w-1/3"
        />

        <select v-model="selectedingredients" class="px-4 py-2 border rounded-md" @change="filterRecipes">
          <option value="">All Ingredients</option>
          <option value="Pizza">Pizza</option>
        </select>

        <!-- Cuisine Filter -->
        <select v-model="selectedCuisine" class="px-4 py-2 border rounded-md" @change="filterRecipes">
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Italian">Asian</option>
          <option value="Italian">American</option>
          <option value="Italian">Mexican</option>
          <option value="Italian">Pakistani</option>
          <option value="Italian">Korean</option>
        </select>
      </div>
    </section>

    <!-- Recipes List -->
    <section id="recipes" class="py-20 container">
      <h1 class="text-3xl lg:text-5xl mb-2">Discover, Create, Save</h1>
      <p class="text-lg lg:text-xl mb-8">Enjoy the most popular recipes</p>

      <div v-if="filteredRecipes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <div v-for="recipe in filteredRecipes" :key="recipe.id" class="flex flex-col shadow rounded-md">
          <NuxtImg :src="recipe.image" sizes="xs:100vw sm:50vw lg:400px" format="webp" densities="x1" class="rounded-md" alt="Recipe image" />
          <div class="flex flex-col py-6 px-4 flex-1">
            <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
            <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
              <NuxtLink :to="`/recipes/${recipe.id}`" class="px-4 py-2 text-white self-start bg-dodgeroll-gold-400 rounded-md cursor-pointer">
                View
              </NuxtLink>
            </div>
            <button @click="toggleSaveRecipe(recipe.id)"
                :class="savedRecipes.includes(recipe.id) ? 'bg-red-500' : 'bg-gray-500'"
                class="px-4 py-2 text-white rounded-md cursor-pointer">
                {{ savedRecipes.includes(recipe.id) ? "Unsave" : "Save" }}
              </button>
          </div>
        </div>
      </div>

      <!-- No Results Message -->
      <p v-else class="text-xl text-gray-600 text-center">No recipes found.</p>
    </section>
    </main>
</template>
