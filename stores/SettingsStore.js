import { defineStore } from "pinia";

export const useSettingsStore = defineStore({
  id: "SettingsStore",
  state: () => {
    return {
      username: "",
      sites: [],
      settings: false,
      greeting: "",
    };
  },
  actions: {
    loadUsername() {
      const localUsername = localStorage.getItem("username");
      if (localUsername) {
        this.username = localUsername;
      }
    },
    loadSites() {
      const localSites = JSON.parse(localStorage.getItem("sites"));
      if (localSites) {
        this.sites = localSites;
      }
    },
    loadConfiguration() {
      let date = new Date();
      let time = date.getHours();
      if (time >= 4 && time <= 10) {
        this.greeting = "good morning";
      } else if (time >= 12 && time <= 15) {
        this.greeting = "good afternoon";
      } else if (time >= 17 && time <= 21) {
        this.greeting = "good evening";
      } else {
        this.greeting = "hello";
      }
    },
    saveUsername() {
      localStorage.setItem("username", this.username);
    },
    saveSites() {
      localStorage.setItem("sites", JSON.stringify(this.sites));
    },
    deleteSite(index) {
      this.sites.splice(index, 1);
    },
    addSite() {
      this.sites.push({ name: "", url: "" });
    },
    toggleSettings() {
      this.settings = !this.settings;
    },
  },
  getters: {},
});
