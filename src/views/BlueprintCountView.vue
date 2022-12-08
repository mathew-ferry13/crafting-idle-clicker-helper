<template>
  <main>
    <v-container>
      <v-row>
        <v-spacer />
        <v-col cols="12" sm="9" md="7" lg="5" xl="4">
          <v-slider
            v-model="merchantCount"
            color="primary"
            label="Merchant Count"
            class="align-center"
            :max="maxMerchantCount"
            :min="minMerchantCount"
            step="1"
            hide-details
            :disabled="minMerchantCount === maxMerchantCount"
            :readonly="minMerchantCount === maxMerchantCount"
          >
            <template v-slot:append>
              <v-text-field
                v-model="merchantCount"
                hide-details
                single-line
                density="compact"
                type="number"
                style="width: 80px"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row>
        <v-col>
          <span class="text-h4">Blueprint Counts</span>
        </v-col>
      </v-row>
      <v-table fixed-header class="blueprint-table">
        <thead>
          <tr>
            <th class="text-left">Blueprint Name</th>
            <th class="text-left">Target Level</th>
            <th class="text-left">Start Merchants</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="blueprint in blueprints" :key="blueprint.name">
            <td class="font-weight-bold">{{ blueprint.name }}</td>
            <td>
              {{
                blueprintCounts.get(blueprint.name) === -1
                  ? ""
                  : blueprintCounts.get(blueprint.name)
              }}
            </td>
            <td>
              {{
                blueprintCounts.get(blueprint.name) === -1
                  ? ""
                  : Math.ceil(
                      (blueprintCounts.get(blueprint.name) *
                        blueprint.produces) /
                        merchantCount
                    )
              }}
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </main>
</template>

<script lang="ts">
import { Dependency } from "@/types/Dependency";
import { Blueprint } from "@/types/Blueprint";
import { EventType } from "@/types/EventType";
import type { Event } from "@/types/Event";
import type { PropType } from "vue";

import eventList from "@/types/EventList";

const localStorageKey = "crafting-idle-clicker-helper-count";

export default {
  props: {
    type: {
      type: [String] as PropType<EventType>,
      default: EventType.BASE,
    },
  },
  data: function () {
    return {
      localMerchantCount: 1 as number,
    };
  },
  computed: {
    currentEvent(): Event {
      const t: EventType = this.type || EventType.BASE;
      return eventList.find((e) => e.eventType === t);
    },
    minMerchantCount(): number {
      return this.currentEvent.minMerchantCount;
    },
    maxMerchantCount(): number {
      return this.currentEvent.maxMerchantCount;
    },
    blueprintConfig(): Array<Blueprint> {
      return this.currentEvent.blueprints;
    },
    merchantCount: {
      get(): number {
        return this.localMerchantCount;
      },
      set(c: number): void {
        this.localMerchantCount = c;
        localStorage.setItem(`${localStorageKey}_${this.type}`, c);
      },
    },
    blueprints(): Array<Blueprint> {
      return this.blueprintConfig
        .map((config: Blueprint) => {
          let requires: Array<Dependency> = [];
          const req = config.required;
          if (req && req.length) {
            requires = req.map(
              (r) => new Dependency(r.name as string, r.count as number)
            );
          }
          return new Blueprint(
            config.name,
            config.produces,
            config.order,
            requires
          );
        })
        .sort((a: Blueprint, b: Blueprint) => {
          return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
        });
    },
    blueprintCounts(): Map<string, number> {
      const countMap = new Map<string, number>();
      this.blueprints.forEach((blueprint: Blueprint) => {
        countMap.set(blueprint.name, this.getTotalCount(blueprint));
      });
      return countMap;
    },
  },
  methods: {
    getInheritedBlueprints(blueprint: Blueprint): Array<Blueprint> {
      return this.blueprints.filter((bp: Blueprint) =>
        bp.required.some((d: Dependency) => d.name === blueprint.name)
      );
    },
    getTotalCount(blueprint: Blueprint): number {
      if (blueprint.produces <= 0) {
        return -1;
      }
      let count = Math.ceil(this.merchantCount / blueprint.produces);
      const inherited: Array<Blueprint> =
        this.getInheritedBlueprints(blueprint);
      if (inherited.length) {
        count = 0;
        this.getInheritedBlueprints(blueprint).forEach((bp: Blueprint) => {
          const c = this.getTotalCount(bp);
          const dep = bp.required.find(
            (d: Dependency) => d.name === blueprint.name
          );
          if (dep) {
            count += Math.ceil((c * dep.count) / blueprint.produces);
          }
        });
      }
      return count;
    },
  },
  watch: {
    merchantCount: {
      handler: function (val: number) {
        if (val < this.minMerchantCount) {
          this.merchantCount = this.minMerchantCount;
        }
        if (val > this.maxMerchantCount) {
          this.merchantCount = this.maxMerchantCount;
        }
      },
    },
    type: {
      immediate: true,
      handler: function (val: EventType) {
        this.merchantCount =
          localStorage.getItem(`${localStorageKey}_${val}`) || 1;
      },
    },
  },
};
</script>

<style>
.blueprint-table tr:nth-child(2n) {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>
