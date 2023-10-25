import { StartComponent } from '#build/components';
<template>
  <div class="startComponent">
    <div class="conponentContent">
      <div class="componentIcon" v-html="svgContent"></div>
      <div class="componentText">
        <h2 class="componentHeadline">Reaction Time Test</h2>
        <p class="componentSubline">
          When the red box turns green, click as quickly as you can.
        </p>
        <p class="componentSubline">Click anywhere to start.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const svgContent = ref(
  '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path fill="currentColor" d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z"/></svg>'
)
</script>
