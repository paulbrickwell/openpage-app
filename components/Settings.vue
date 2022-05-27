<template>
  <div
    class="flex flex-col min-h-screen overflow-clip bg-gray-900 h-full w-full p-4"
  >
    <div
      class="flex flex-col items-center justify-center grow w-full lg:w-[768px] mx-auto"
    >
      <SettingsUsername />
      <SettingsSites />
      <SettingsImport class="" />
    </div>
    <SettingsFooter class="" />
  </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>
