<template>
  <div
    class="bg-gray-900 flex flex-col justify-center items-center w-full mt-8"
  >
    <div class="flex flex-col items-center text-center w-full">
      <div class="pb-8">
        <div class="text-lg">Export</div>
        <div class="text-xs mb-4">
          Export your saved sites to a file to backup or move to a new computer.
        </div>
        <button
          @click.prevent="exportSites"
          class="px-4 py-1 h-10 rounded-md w-32 bg-sky-500 text-gray-200"
        >
          Export
        </button>
      </div>
      <div class="pb-4">
        <div class="text-lg">Import</div>
        <div class="text-xs mb-4">
          Load your saved sites from a file. File should be a plain JSON.
          <br />
          <code>[{"name":"Your Friendly Name","url":"https://site.com"}]</code>
        </div>
        <div class="flex justify-center items-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">JSON File</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              @change="selectFile"
            />
          </label>
        </div>
      </div>
      <div>
        <button
          @click.prevent="importSites"
          class="px-4 py-1 h-10 rounded-md w-32 bg-sky-500 text-gray-200"
        >
          Import
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSettingsStore } from "@/stores/SettingsStore";
const settingsStore = useSettingsStore();
</script>

<script>
import { useSettingsStore } from "@/stores/SettingsStore";

export default {
  data() {
    return {
      file: null,
    };
  },
  methods: {
    selectFile(event) {
      this.file = event.target.files[0];
    },
    exportSites() {
      const settingsStore = useSettingsStore();
      let sites = JSON.stringify(settingsStore.sites);
      const downloadToFile = (content, filename, contentType) => {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
      };
      downloadToFile(sites, "openpage-export.json", "application/json");
    },
    importSites() {
      const settingsStore = useSettingsStore();
      let file = this.file;
      let reader = new FileReader();
      if (!file || file.type !== "application/json") return;
      reader.readAsText(file);
      reader.onload = function () {
        settingsStore.sites = JSON.parse(reader.result);
        settingsStore.saveSites();
      };
      reader.onerror = function () {
        console.log(reader.error);
      };
    },
  },
};
</script>
