<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title class="cursor-pointer" @click="$router.push('/')">
        Crafting Idle Clicker Helper
      </v-app-bar-title>
      <v-spacer />
      <div class="mr-8">
        <router-link to="/about" class="text-shades-white"> About </router-link>
      </div>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-subheader>Events</v-list-subheader>
          <v-list-item
            v-for="event in events"
            :key="event.type"
            :to="`/events/${event.type}`"
          >
            <v-list-item-title>{{ event.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-main>
    <v-footer app color="secondary">
      <span>Created by Matt Ferry</span>
      <v-spacer />
      <v-icon
        class="mx-2"
        @click="
          openUrl(
            'https://github.com/mathew-ferry13/crafting-idle-clicker-helper'
          )
        "
      >
        mdi-github
      </v-icon>
      <v-icon
        class="mx-2"
        @click="openUrl('https://www.linkedin.com/in/mathew-ferry-9652968b')"
      >
        mdi-linkedin
      </v-icon>
      <v-icon
        class="mx-2"
        @click="openUrl('https://www.facebook.com/mathew.ferry.9')"
      >
        mdi-facebook
      </v-icon>
      <v-icon
        class="mx-2"
        @click="
          openUrl('https://steamcommunity.com/profiles/76561198035702689/')
        "
      >
        mdi-steam
      </v-icon>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { EventType } from "@/types/EventType";

export default {
  data: () => ({
    drawer: true,
    events: [
      {
        name: "Base Workshop",
        type: EventType.BASE,
      },
      {
        name: "The world is Mine",
        type: EventType.WORLD_IS_MINE,
      },
      {
        name: "Wind it up",
        type: EventType.WIND_IT_UP,
      },
    ].sort((a, b) => {
      if (a.type === EventType.BASE) return -1;
      if (b.type === EventType.BASE) return 1;
      if (a.name < b.name) return -1;
      if (a.name > a.name) return 1;
      return -0;
    }),
  }),
  methods: {
    openUrl: (url: string) => {
      window.open(url);
    },
  },
};
</script>

<style scoped></style>
