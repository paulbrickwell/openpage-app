<template>
  <div
    class="flex flex-col justify-center items-center mt-8 cursor-pointer"
    @click="settingsStore.toggleSettings()"
  >
    <a
      href="https://github.com/paulbrickwell/openpage-app"
      class="text-sm text-gray-500 mb-4"
      target="_blank"
      >view on github</a
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 fill-gray-200 hover:fill-gray-400"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>
