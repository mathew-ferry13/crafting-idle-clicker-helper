import type { Dependency } from "@/types/Dependency";

export class Blueprint {
  name: string;
  produces: number;
  order: number;
  required: Array<Dependency> = [];

  constructor(
    name: string,
    produces: number,
    order: number,
    required?: Array<Dependency> | null | undefined
  ) {
    this.name = name;
    this.produces = produces;
    this.order = order;
    this.required = required || [];
  }
}
