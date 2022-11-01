<script setup lang="ts">
import type { Tab } from "@/type";
import { ref, type PropType } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const props = defineProps({
  tabs: {
    type: Array as PropType<Tab[]>,
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: true,
  },
  type: {
    type: String,
    default: "",
  },
});

const dropShow = ref(false);
</script>

<template>
  <nav
    class="sticky backdrop-blur top-0 z-40 w-full flex-none transition-colors duration-700 mb-4"
  >
    <div class="max-w-[1560px] mx-auto border-b border-slate-900/100">
      <div class="py-4 lg:px-4 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <h1 class="font-bold italic font-mono text-lg mr-8">
            {{ props.title }}
          </h1>
          <ul
            v-if="props.type === 'lg' || props.type === 'xl'"
            class="flex flex-row font-medium italic font-mono space-x-6 text-md absolute right-10"
          >
            <li
              class="hover:font-bold text-gray-800"
              v-for="(tab, idx) in props.tabs"
              :key="idx"
            >
              <RouterLink
                :class="{
                  'font-bold': route.name === tab.name,
                }"
                :to="{ name: tab.name }"
                >{{ tab.alias }}</RouterLink
              >
            </li>
          </ul>
          <div
            v-else-if="props.type === 'sm' || props.type === 'md'"
            class="absolute right-5"
          >
            <button
              @click="dropShow = !dropShow"
              class="flex items-center p-2 text-gray-200 rounded-md shadow-xl"
              :class="{
                'bg-slate-500': dropShow === false,
                'bg-slate-700': dropShow === true,
              }"
            >
              <span class="mr-4">Dropdown Menu</span>
              <svg
                class="w-5 h-5 text-gray-200 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              v-show="dropShow"
              class="rounded-md pt-0 pb-0 absolute right-0 text-gray-200 w-44"
            >
              <RouterLink
                @click="dropShow = !dropShow"
                v-for="(tab, idx) in props.tabs"
                :key="idx"
                :to="{ name: tab.name }"
                :class="{
                  'font-bold': route.name === tab.name,
                  'bg-slate-700': route.name === tab.name,
                  'bg-slate-500': route.name !== tab.name,
                }"
                class="rounded-md m-1 block px-4 py-2 text-sm text-gray-200 hover:bg-slate-700 hover:font-bold"
              >
                {{ tab.alias }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
