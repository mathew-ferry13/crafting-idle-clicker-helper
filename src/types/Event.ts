import type { EventType } from "@/types/EventType";
import type { Blueprint } from "@/types/Blueprint";

export class Event {
  eventType: EventType;
  blueprints: Array<Blueprint>;
  minMerchantCount: number;
  maxMerchantCount: number;

  constructor(
    eventType: EventType,
    minMerchantCount?: number,
    maxMerchantCount?: number,
    blueprints?: Array<Blueprint>
  ) {
    this.eventType = eventType;
    this.blueprints = blueprints || [];
    this.minMerchantCount = minMerchantCount || 0;
    this.maxMerchantCount = maxMerchantCount || 100;
  }
}
