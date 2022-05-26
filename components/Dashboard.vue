<template>
  <div class="bg-gray-900 h-screen w-screen flex flex-col grow p-4 text-center">
    <div
      v-if="!settingsStore.sites[0]"
      class="flex flex-col items-center justify-center grow"
    >
      click below to get started
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 fill-gray-200"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="flex flex-col items-center justify-center grow">
      <div
        v-if="settingsStore.username && settingsStore.sites[0]"
        class="lowercase"
      >
        {{ settingsStore.greeting }}, {{ settingsStore.username }}
      </div>
      <div v-if="settingsStore.sites[0]" class="lowercase mt-4">
        <div v-for="(site, index) in settingsStore.sites" :key="index">
          <a target="_blank" :href="site.url" class="hover:text-gray-400">{{
            site.name
          }}</a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center mt-8 cursor-pointer"
      @click="settingsStore.toggleSettings()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 fill-gray-200 hover:fill-gray-400"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>
