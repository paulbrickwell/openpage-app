<template>
  <div
    class="bg-gray-900 h-screen w-screen flex flex-col md:justify-center items-center p-4"
  >
    <div
      class="bg-gray-700 max-w-screen-lg w-full rounded-xl shadow-xl flex relative"
    >
      <div
        class="absolute -top-2 -right-2 bg-sky-600 h-7 w-7 rounded-2xl flex items-center justify-center hover:scale-110 cursor-pointer"
        @click="settingsStore.toggleSettings()"
      >
        <XIcon class="w-4 h-4" />
      </div>
      <SettingsNavigation
        :activeWindow="activeWindow"
        @change-to-preferences="changeToPreferences"
        @change-to-sites="changeToSites"
      />
      <div class="p-4 w-full">
        <div v-if="activeWindow == 'preferences'">
          <SettingsPreferences />
        </div>
        <div v-if="activeWindow == 'sites'">
          <SettingsSites />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XIcon } from "@heroicons/vue/solid";
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>

<script>
export default {
  data() {
    return {
      activeWindow: "preferences",
    };
  },
  methods: {
    changeToPreferences() {
      this.activeWindow = "preferences";
    },
    changeToSites() {
      this.activeWindow = "sites";
    },
  },
};
</script>
