<script setup lang="ts">
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  Plane,
  MatcapMaterial,
  AmbientLight,
  Torus,
} from "troisjs";
import type { RendererPublicInterface, MeshPublicInterface } from "troisjs";
import { onMounted, ref } from "vue";

const colorArr = [
  "blue",
  "red",
  "yellow",
  "green",
  "orange",
  "brown",
  "purple",
  "grey",
];

const refRenderOne = ref<RendererPublicInterface | null | any>(null as any);
const refBox = ref<MeshPublicInterface | null | any>(null as any);

const refRenderTwo = ref<RendererPublicInterface | null | any>(null as any);
const refTorus = ref<RendererPublicInterface | null | any>(null as any);

const onPointerEnter = (event: any) => {
  console.log(event);
};

const onPointerMove = (event: any) => {
  console.log(event);
};

const onPointerLeave = (event: any) => {
  console.log(event);
};

const onPointerOver = (event: any) => {
  console.log(event);
};
const onPointerClick = (event: any) => {
  const rIdx = Math.ceil(Math.random() * colorArr.length);
  event.component.material.color.set(colorArr[rIdx]);
};

onMounted(() => {
  const boxRender = refRenderOne.value;
  const boxElement = refBox.value.mesh;

  const torusRender = refRenderTwo.value;
  const torusElement = refTorus.value.mesh;

  boxRender.onBeforeRender(() => {
    boxElement.rotation.x += 0.01;
    boxElement.rotation.y += 0.01;
    boxRender.three.setSize(500, 500);
  });

  torusRender.onBeforeRender(() => {
    torusElement.rotation.x += 0.01;
    torusElement.rotation.y += 0.01;
    torusRender.three.setSize(500, 500);
  });
});
</script>

<template>
  <main
    class="max-w-[1560px] mx-auto flex flex-col justify-around lg:flex-row xl:flex-row"
  >
    <div class="flex flex-col justify-center px-20 lg:px-0 xl:px-0">
      <span class="font-bold italic font-mono text-lg mb-5 flex justify-center">
        Trois.js Box Example
      </span>
      <Renderer
        ref="refRenderOne"
        :orbit-ctrl="{
          autoRotate: true,
          enableDamping: true,
          dampingFactor: 0.05,
        }"
      >
        <Camera :position="{ z: 10 }" />
        <Scene background="#ffffff">
          <AmbientLight color="#ffffff" />
          <PointLight
            :position="{ y: 500, z: 500 }"
            cast-shadow
            :shadow-map-size="{ width: 100, height: 100 }"
          />
          <Box
            ref="refBox"
            :size="3"
            :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
            cast-shadow
            @pointerEnter="onPointerEnter"
            @pointerOver="onPointerOver"
            @pointerMove="onPointerMove"
            @pointerLeave="onPointerLeave"
            @click="onPointerClick"
          >
            <MatcapMaterial name="2E763A_78A0B7_B3D1CF_14F209" />
          </Box>
        </Scene>
      </Renderer>
    </div>
    <div
      class="flex flex-col justify-center mt-5 lg:mt-0 xl:mt-0 px-20 lg:px-0 xl:px-0"
    >
      <span class="font-bold italic font-mono text-lg mb-5 flex justify-center">
        Trois.js Torus Example
      </span>
      <Renderer
        ref="refRenderTwo"
        :orbit-ctrl="{
          autoRotate: true,
          enableDamping: true,
          dampingFactor: 0.05,
        }"
      >
        <Camera :position="{ z: 10 }" />
        <Scene background="#ffffff">
          <AmbientLight color="#ffffff" />
          <PointLight
            :position="{ y: 500, z: 500 }"
            cast-shadow
            :shadow-map-size="{ width: 100, height: 100 }"
          />
          <Torus
            ref="refTorus"
            :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
            cast-shadow
            @pointerEnter="onPointerEnter"
            @pointerOver="onPointerOver"
            @pointerMove="onPointerMove"
            @pointerLeave="onPointerLeave"
            @click="onPointerClick"
          >
            <MatcapMaterial name="2E763A_78A0B7_B3D1CF_14F209" />
          </Torus>
        </Scene>
      </Renderer>
    </div>
  </main>
</template>

<style scoped></style>
