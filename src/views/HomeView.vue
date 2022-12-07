<script lang="ts">
import { Dependency } from "@/types/Dependency";
import { Blueprint } from "@/types/Blueprint";
import blueprintConfig from "../assets/blueprints.json";

const localStorageKey = "crafting-idle-clicker-helper-count";

export default {
  data: () => ({
    localMerchantCount: (localStorage.getItem(localStorageKey) || 4) as number,
    minMerchantCount: 4 as number,
    maxMerchantCount: 100 as number,
  }),
  computed: {
    merchantCount: {
      get(): number {
        return this.localMerchantCount;
      },
      set(c: number): void {
        this.localMerchantCount = c;
        localStorage.setItem(localStorageKey, c);
      },
    },
    blueprints(): Array<Blueprint> {
      return blueprintConfig
        .map((config) => {
          let requires: Array<Dependency> = [];
          if (config.requires && config.requires.length) {
            requires = config.requires.map(
              (r) => new Dependency(r.name, r.count)
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
};
</script>

<template>
  <main>
    <v-container fluid>
      <v-row>
        <v-spacer />
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-slider
            v-model="merchantCount"
            label="Merchant Count"
            class="align-center"
            :max="maxMerchantCount"
            :min="minMerchantCount"
            step="1"
            hide-details
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
      <v-table fixed-header>
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
            <td>{{ blueprintCounts.get(blueprint.name) }}</td>
            <td>
              {{
                Math.ceil(
                  (blueprintCounts.get(blueprint.name) * blueprint.produces) /
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
