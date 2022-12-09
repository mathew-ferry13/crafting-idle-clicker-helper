import type { EventType } from "@/types/EventType";
import type { Blueprint } from "@/types/Blueprint";

export class Event {
  eventType: EventType;
  blueprints: Array<Blueprint>;
  minMerchantCount: number;
  maxMerchantCount: number;
  minOreFactor: number;
  maxOreFactor: number;

  constructor(
    eventType: EventType,
    minMerchantCount?: number,
    maxMerchantCount?: number,
    minOreFactor?: number,
    maxOreFactor?: number,
    blueprints?: Array<Blueprint>
  ) {
    this.eventType = eventType;
    this.blueprints = blueprints || [];
    this.minMerchantCount = minMerchantCount || 1;
    this.maxMerchantCount = maxMerchantCount || 100;
    this.minOreFactor = minOreFactor || 1;
    this.maxOreFactor = maxOreFactor || 100;
  }
}
