<script lang="ts">
import { Dependency } from "@/types/Dependency";
import { Blueprint } from "@/types/Blueprint";
import blueprintConfig from "../assets/blueprints.json";

export default {
  data: () => ({
    merchantCount: 6 as number,
  }),
  computed: {
    blueprints(): Array<Blueprint> {
      return blueprintConfig.map((config) => {
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
    <div v-for="blueprint in blueprints" :key="blueprint.name">
      {{ blueprint.name }} - {{ blueprintCounts.get(blueprint.name) }}
    </div>
  </main>
</template>
