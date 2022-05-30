<template>
  <div class="flex flex-col p-4 gap-2 text-center">
    <div
      class="p-2 px-8 rounded-xl cursor-pointer hover:bg-sky-700 transition-all"
      :class="{
        'bg-sky-600': activeWindow == 'preferences',
        'bg-gray-600': activeWindow != 'preferences',
      }"
      @click="$emit('changeToPreferences')"
    >
      Preferences
    </div>
    <div
      class="p-2 px-8 rounded-xl cursor-pointer hover:bg-sky-700 transition-all"
      :class="{
        'bg-sky-600': activeWindow == 'sites',
        'bg-gray-600': activeWindow != 'sites',
      }"
      @click="$emit('changeToSites')"
    >
      Sites
    </div>
  </div>
</template>

<script>
export default {
  props: ["activeWindow"],
};
</script>
