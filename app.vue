<template>
  <div>
    <Head>
      <Title>OpenPage App</Title>
    </Head>
    <div
      class="h-screen w-screen bg-gray-800 text-gray-200 flex flex-col justify-center items-center text-center"
    >
      <div v-if="!sites[0]" class="flex flex-col items-center">
        click below to get started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 fill-gray-200"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div v-if="username && sites[0]" class="lowercase">
        {{ greeting }}, {{ username }}
      </div>
      <div v-if="sites[0]" class="lowercase mt-4">
        <div v-for="(site, index) in sites" :key="index">
          <a target="_blank" :href="site.url" class="hover:text-gray-400">{{
            site.name
          }}</a>
        </div>
      </div>
      <div class="fixed bottom-4 cursor-pointer" @click="settings = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 fill-gray-200 hover:fill-gray-400"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- Settings Modal -->
      <div
        class="fixed left-0 top-0 h-screen w-screen bg-gray-800"
        v-if="settings"
      >
        <div class="max-w-lg mx-auto h-screen flex flex-col justify-center">
          <div class="flex w-full gap-2">
            <input
              type="text"
              class="focus:ring-transparent focus:border-transparent grow sm:text-sm border-transparent rounded-md bg-gray-200 text-gray-800"
              placeholder="jane doe"
              v-model="username"
            />
            <button
              @click.prevent="setUsername"
              class="px-4 py-1 rounded-md bg-sky-500"
            >
              save name
            </button>
          </div>

          <div class="flex flex-col mt-2 gap-2">
            <div v-for="(site, index) in sites" :key="index" class="flex gap-2">
              <input
                v-model="site.name"
                type="text"
                name="sitename"
                class="focus:ring-transparent focus:border-transparent grow sm:text-sm border-transparent rounded-md bg-gray-200 text-gray-800"
                placeholder="site name"
              />
              <input
                v-model="site.url"
                type="text"
                name="siteurl"
                class="focus:ring-transparent focus:border-transparent grow sm:text-sm border-transparent rounded-md bg-gray-200 text-gray-800"
                placeholder="https://siteurl.com/"
              />

              <button
                @click.prevent="deleteSite(index)"
                class="px-4 py-1 rounded-md bg-gray-900"
              >
                delete
              </button>
            </div>
          </div>
          <div class="flex justify-center mt-2">
            <button
              @click.prevent="updateSite"
              class="ml-2 px-4 py-1 rounded-md bg-sky-900"
            >
              save sites
            </button>
            <button
              @click.prevent="addSite"
              class="ml-2 px-4 py-1 rounded-md bg-sky-500"
            >
              add site
            </button>
          </div>
        </div>
        <div
          class="fixed flex flex-col w-full items-center justify-center bottom-4 cursor-pointer"
          @click="settings = false"
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
      <!-- End Settings Modal -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      sites: [],
      settings: false,
      greeting: "",
    };
  },
  mounted() {
    let localUsername = localStorage.getItem("username");
    let localSites = JSON.parse(localStorage.getItem("sites"));
    let date = new Date();
    let time = date.getHours();

    if (localUsername) {
      this.$data.username = localUsername;
    }
    if (localSites) {
      this.$data.sites = localSites;
    }
    if (time >= 4 && time <= 10) {
      this.$data.greeting = "good morning";
    } else if (time >= 12 && time <= 15) {
      this.$data.greeting = "good afternoon";
    } else if (time >= 17 && time <= 21) {
      this.$data.greeting = "good evening";
    } else {
      this.$data.greeting = "hello";
    }
  },
  methods: {
    setUsername(username) {
      if (!this.$data.username) {
        this.$data.username = username;
      }
      localStorage.setItem("username", this.$data.username);
    },
    updateSite() {
      localStorage.setItem("sites", JSON.stringify(this.$data.sites));
    },
    deleteSite(index) {
      this.$data.sites.splice(index, 1);
    },
    addSite() {
      this.$data.sites.push({ name: "", url: "" });
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
