import { ref, watchEffect } from "vue";

const STORAGE_KEY = "savedRecipes";
import { useStorage } from "@vueuse/core";

const savedRecipes = useStorage("recipes", []);


export function useSavedRecipes() {
    const savedRecipes = ref<number[]>([]);

    // Local Storage-с хадгалсан жоруудаа авах
    const loadSavedRecipes = () => {
        const stored = localStorage.getItem(STORAGE_KEY);
        savedRecipes.value = stored ? JSON.parse(stored) : [];
    };

    // Жор хадгалах/устгах функц
    const toggleSaveRecipe = (id: number) => {
        if (savedRecipes.value.includes(id)) {
            savedRecipes.value = savedRecipes.value.filter((recipeId) => recipeId !== id);
        } else {
            savedRecipes.value.push(id);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRecipes.value));
    };

    // Page ачаалахад хадгалсан жорыг localStorage-с уншина
    watchEffect(loadSavedRecipes);

    return { savedRecipes, toggleSaveRecipe };
}
