<template>
  <div class="bg-gray-900 text-gray-200">
    <Head>
      <Title>OpenPage</Title>
    </Head>
    <div v-if="!loaded">
      <Loading />
    </div>
    <Transition name="fade" mode="out-in">
      <div v-if="loaded">
        <TransitionGroup name="fade" mode="out-in">
          <Dashboard v-if="!settingsStore.settings" />
          <NewSettings v-if="settingsStore.settings" />
        </TransitionGroup>
      </div>
    </Transition>
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
      loaded: false,
    };
  },
  mounted() {
    const settingsStore = useSettingsStore();
    settingsStore.loadUsername();
    settingsStore.loadSites();
    settingsStore.loadConfiguration();
    this.loaded = true;
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
