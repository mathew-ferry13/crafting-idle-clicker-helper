import { describe, it, expect } from "vitest";

import events from "../EventList.ts";

describe("EventList", () => {
  it("should return the list of blueprints for the base workshop", () => {
    expect(events).toHaveLength(2);
  });
});
