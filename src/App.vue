<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import Navbar from "@/components/TopNavigation.vue";
import { ROUTER_NAME } from "@/router/route.name";

const route = useRoute();

const title = computed(() => {
  return `My Test Place - ${String(route.name).toUpperCase()}`;
});

const tabs = ref([
  {
    name: ROUTER_NAME.HOME,
    alias: "Home",
  },
  {
    name: ROUTER_NAME.ABOUT,
    alias: "About",
  },
  {
    name: ROUTER_NAME.SERVICE,
    alias: "Service",
  },
  {
    name: ROUTER_NAME.SKILL,
    alias: "Skill",
  },
  {
    name: ROUTER_NAME.CONTACT,
    alias: "Contact",
  },
  {
    name: ROUTER_NAME.TEST,
    alias: "Test",
  },
]);

function useBreakPoints() {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    if (windowWidth.value < 640) return "sm";
    else if (windowWidth.value >= 640 && windowWidth.value < 768) return "md";
    else if (windowWidth.value >= 768 && windowWidth.value < 1024) return "lg";
    else return "xl";
  });
  return type;
}

const type = useBreakPoints();
</script>

<template>
  <main
    style="background-color: rgba(52, 66, 86, 0.3); font-size: 16px"
    class="max-w-[2560px] mx-auto h-auto px-5 pb-10"
  >
    <Navbar :type="type" :title="title" :tabs="tabs" />
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" class="mt-2" />
      </keep-alive>
    </RouterView>
  </main>
</template>

<style></style>
