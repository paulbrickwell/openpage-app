<template>
  <div class="w-full text-center">
    <div class="text-lg">Sites</div>
    <div class="text-xs mb-4">Add or remove your favorite sites.</div>
    <div class="flex flex-col gap-2">
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
      class="flex justify-center gap-2 w-full"
      :class="{ 'mt-2': settingsStore.sites[0] }"
    >
      <button
        @click.prevent="settingsStore.saveSites()"
        class="px-4 py-1 h-10 rounded-md bg-sky-500 text-gray-200"
      >
        save sites
      </button>
      <button
        @click.prevent="settingsStore.addSite()"
        class="px-4 py-1 h-10 rounded-md bg-sky-900 text-gray-200"
      >
        add site
      </button>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>
