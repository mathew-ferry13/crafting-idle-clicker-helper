import type { Dependency } from "@/types/Dependency";

export class Blueprint {
  private _name: string;
  private _produces: number;
  private _order: number;
  private _required: Array<Dependency> = [];

  constructor(
    name: string,
    produces: number,
    order: number,
    required?: Array<Dependency> | null | undefined
  ) {
    this._name = name;
    this._produces = produces;
    this._order = order;
    this._required = required || [];
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get produces(): number {
    return this._produces;
  }

  set produces(value: number) {
    this._produces = value;
  }

  get order(): number {
    return this._order;
  }

  set order(value: number) {
    this._order = value;
  }

  get required(): Array<Dependency> {
    return this._required;
  }

  set required(value: Array<Dependency>) {
    this._required = value;
  }
}
