<template>
  <div class="w-full">
    <div class="text-lg">Sites</div>
    <div class="text-xs mb-4">Add or remove your favorite sites.</div>
    <div class="flex">
      <draggable
        :list="settingsStore.sites"
        item-key="index"
        class="flex flex-col gap-2 w-full"
      >
        <template #item="{ element }">
          <div class="flex gap-2">
            <div class="flex items-center cursor-ns-resize">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {{ element.newIndex }}
            <input
              v-model="element.name"
              type="text"
              name="sitename"
              class="w-full focus:ring-transparent focus:border-transparent grow border-transparent rounded-md bg-gray-200 text-gray-900 h-10"
              placeholder="site name"
            />
            <input
              v-model="element.url"
              type="text"
              name="siteurl"
              class="w-full focus:ring-transparent focus:border-transparent grow border-transparent rounded-md bg-gray-200 text-gray-900 h-10"
              placeholder="https://siteurl.com/"
            />
          </div>
        </template>
      </draggable>
      <div class="flex flex-col gap-2 ml-2">
        <div v-for="(site, index) in settingsStore.sites" :key="index" class="">
          <button
            @click.prevent="settingsStore.deleteSite(index)"
            class="px-4 py-1 h-10 rounded-md bg-sky-900 text-gray-200"
          >
            delete
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center gap-2 w-full"
      :class="{ 'mt-2': settingsStore.sites[0] }"
    >
      <button
        @click.prevent="settingsStore.saveSites()"
        class="px-4 py-1 h-10 rounded-md bg-sky-500 flex items-center justify-center hover:bg-sky-700 cursor-pointer"
      >
        <CheckCircleIcon class="w-6 h-6" />
      </button>
      <button
        @click.prevent="settingsStore.addSite()"
        class="px-4 py-1 h-10 rounded-md bg-sky-900 flex items-center justify-center hover:bg-sky-700 cursor-pointer"
      >
        <PlusCircleIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  XCircleIcon,
  CheckCircleIcon,
  PlusCircleIcon,
} from "@heroicons/vue/solid";
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
    };
  },
};
</script>
