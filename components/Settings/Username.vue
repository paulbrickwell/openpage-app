<template>
  <div class="w-full mb-8">
    <div class="text-lg">Username</div>
    <div class="text-xs mb-4">
      Set your username to be displayed in various places.
    </div>
    <div class="flex gap-2 w-full">
      <input
        type="text"
        class="focus:ring-transparent focus:border-transparent grow border-transparent rounded-md bg-gray-200 text-gray-800 h-10"
        placeholder="jane doe"
        v-model="settingsStore.username"
      />
      <button
        @click="settingsStore.saveUsername()"
        class="px-4 py-1 h-10 rounded-md bg-sky-500 text-gray-200 flex items-center justify-center hover:bg-sky-700 cursor-pointer"
      >
        <CheckCircleIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>
