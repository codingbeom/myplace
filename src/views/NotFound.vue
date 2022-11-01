<script setup lang="ts">
import { ROUTER_NAME } from "@/router/route.name";
import { useRouter } from "vue-router";

const router = useRouter();

function goHome(ev: any) {
  if (ev.target.value === "Google") {
    return (location.href = "http://www.google.com");
  } else if (ev.target.value === "Github") {
    return (location.href = "http://www.github.com");
  } else {
    return router.push({ name: ROUTER_NAME.HOME });
  }
}
</script>

<template>
  <main
    class="max-w-[1560px] min-w-[500px] mx-auto flex flex-col justify-center content-center h-screen h-auto"
  >
    <div
      class="flex flex-col lg:flex-row xl:flex-row justify-center content-center p-5"
    >
      <label class="flex items-start text-7xl text-blue-400/100 font-mono mr-4"
        >404</label
      >
      <div class="flex flex-col">
        <div class="flex flex-col lg:border-l lg:border-slate-300">
          <label class="lg:ml-4 text-blue-400/50 text-4xl lg:text-7xl font-mono"
            >Page not found</label
          >
          <label class="lg:ml-5 text-2xl font-mono text-slate-400/100"
            >Please Check the URL</label
          >
        </div>
        <div class="flex mt-5 lg:ml-4 justify-between">
          <button
            value="Home"
            @click="goHome"
            class="font-mono text-white text-3xl border bg-blue-600 rounded-xl px-5 py-2 hover:bg-blue-800"
          >
            Home
          </button>
          <button
            value="Google"
            @click="goHome"
            class="font-mono text-white text-3xl border bg-purple-600 rounded-xl px-5 py-2 hover:bg-purple-800"
          >
            Google
          </button>
          <button
            value="Github"
            @click="goHome"
            class="font-mono text-white text-3xl border bg-green-600 rounded-xl px-5 py-2 hover:bg-green-800"
          >
            Github
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
