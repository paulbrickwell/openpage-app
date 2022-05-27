<template>
  <div class="relative bg-gray-900 h-screen w-screen flex flex-col grow p-4">
    <div class="flex flex-col items-center justify-center grow">
      <div class="flex gap-2 w-full md:w-96 mb-2">
        <input
          type="text"
          class="focus:ring-transparent focus:border-transparent grow border-transparent rounded-md bg-gray-200 text-gray-800 h-10"
          placeholder="jane doe"
          v-model="settingsStore.username"
        />
        <button
          @click="settingsStore.saveUsername()"
          class="px-4 py-1 h-10 rounded-md bg-sky-500 text-gray-200"
        >
          save name
        </button>
      </div>

      <div class="flex flex-col gap-2 w-full md:w-96">
        <div
          v-for="(site, index) in settingsStore.sites"
          :key="index"
          class="flex gap-2 w-full"
        >
          <input
            v-model="site.name"
            type="text"
            name="sitename"
            class="w-full focus:ring-transparent focus:border-transparent grow border-transparent rounded-md bg-gray-200 text-gray-900 h-10"
            placeholder="site name"
          />
          <input
            v-model="site.url"
            type="text"
            name="siteurl"
            class="w-full focus:ring-transparent focus:border-transparent grow border-transparent rounded-md bg-gray-200 text-gray-900 h-10"
            placeholder="https://siteurl.com/"
          />

          <button
            @click.prevent="settingsStore.deleteSite()"
            class="px-4 py-1 h-10 rounded-md bg-sky-900 text-gray-200"
          >
            delete
          </button>
        </div>
      </div>

      <div
        class="flex justify-center gap-2 w-full md:w-96"
        :class="{ 'mt-2': settingsStore.sites[0] }"
      >
        <button
          @click.prevent="settingsStore.saveSites()"
          class="px-4 py-1 h-10 rounded-md grow bg-sky-500 text-gray-200"
        >
          save sites
        </button>
        <button
          @click.prevent="settingsStore.addSite()"
          class="px-4 py-1 h-10 rounded-md grow bg-sky-500 text-gray-200"
        >
          add site
        </button>
      </div>
      <div
        class="mt-4 text-xs underline cursor-pointer"
        @click="settingsStore.toggleExportImport()"
      >
        Export / Import Sites
      </div>
      <ExportImport v-if="!settingsStore.exportimport" />
    </div>
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
  </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>
