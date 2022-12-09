import { EventType } from "@/types/EventType";
import { Event } from "@/types/Event";
import { Blueprint } from "@/types/Blueprint";
import { Dependency } from "@/types/Dependency";

const baseEvent = new Event(EventType.BASE, 4, 100, [
  new Blueprint("Wood", 1, 1),
  new Blueprint("Club", 1, 2, [new Dependency("Wood", 4)]),
  new Blueprint("Arrows", 3, 3, [new Dependency("Wood", 1)]),
  new Blueprint("Bow", 1, 4, [
    new Dependency("Wood", 2),
    new Dependency("Arrows", 5),
  ]),
  new Blueprint("Rawhide", 1, 5),
  new Blueprint("Leather", 3, 6, [new Dependency("Rawhide", 1)]),
  new Blueprint("Boots", 1, 7, [new Dependency("Leather", 4)]),
  new Blueprint("Hilt", 1, 8, [new Dependency("Leather", 2)]),
  new Blueprint("Leather Armor", 1, 9, [new Dependency("Leather", 8)]),
  new Blueprint("Copper Ore", 1, 10),
  new Blueprint("Copper Ingots", 3, 11, [new Dependency("Copper Ore", 1)]),
  new Blueprint("Copper Axe", 1, 12, [
    new Dependency("Wood", 3),
    new Dependency("Copper Ingots", 2),
  ]),
  new Blueprint("Copper Blades", 1, 13, [new Dependency("Copper Ingots", 1)]),
  new Blueprint("Copper Knife", 1, 14, [new Dependency("Copper Blades", 1)]),
  new Blueprint("Copper Dagger", 1, 15, [
    new Dependency("Copper Blades", 2),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Tin Ore", 1, 16),
  new Blueprint("Bronze Ingots", 5, 17, [
    new Dependency("Copper Ore", 3),
    new Dependency("Tin Ore", 1),
  ]),
  new Blueprint("Bronze Spear", 2, 18, [
    new Dependency("Wood", 4),
    new Dependency("Bronze Ingots", 1),
  ]),
  new Blueprint("Bronze Shield", 1, 19, [new Dependency("Bronze Ingots", 4)]),
  new Blueprint("Bronze Blades", 1, 20, [new Dependency("Bronze Ingots", 2)]),
  new Blueprint("Bronze Dagger", 1, 21, [
    new Dependency("Bronze Blades", 2),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Bronze Sword", 1, 22, [
    new Dependency("Bronze Blades", 3),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Sickle", 0, 23),
  new Blueprint("Coal", 1, 24),
  new Blueprint("Iron Ore", 1, 25),
  new Blueprint("Iron Ingots", 5, 26, [
    new Dependency("Coal", 3),
    new Dependency("Iron Ore", 2),
  ]),
  new Blueprint("Chisel", 0, 27),
  new Blueprint("Iron Mace", 1, 28, [new Dependency("Iron Ingots", 4)]),
  new Blueprint("Iron Rivets", 5, 29, [new Dependency("Iron Ingots", 1)]),
  new Blueprint("Shovel", 0, 30),
  new Blueprint("Lump Hammer", 0, 31),
  new Blueprint("Iron Helmet", 1, 32, [
    new Dependency("Iron Rivets", 5),
    new Dependency("Iron Ingots", 2),
  ]),
  new Blueprint("Iron Plates", 1, 33, [
    new Dependency("Iron Rivets", 2),
    new Dependency("Iron Ingots", 3),
  ]),
  new Blueprint("Imp. Leather Armor", 1, 34, [
    new Dependency("Leather Armor", 1),
    new Dependency("Iron Plates", 2),
  ]),
  new Blueprint("Iron Blades", 1, 35, [new Dependency("Iron Ingots", 2)]),
  new Blueprint("Iron Sword", 1, 36, [
    new Dependency("Iron Blades", 2),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Iron Armor", 1, 37, [
    new Dependency("Iron Plates", 4),
    new Dependency("Iron Rivets", 3),
  ]),
  new Blueprint("Iron Claymore", 1, 38, [
    new Dependency("Iron Blades", 4),
    new Dependency("Hilt", 2),
  ]),
]);

const worldIsMineEvent = new Event(EventType.WORLD_IS_MINE, 10, 10, [
  new Blueprint("Copper Ore", 1, 1),
  new Blueprint("Tin Ore", 1, 2),
  new Blueprint("Bronze Ingots", 5, 3, [
    new Dependency("Copper Ore", 3),
    new Dependency("Tin Ore", 1),
  ]),
  new Blueprint("Wood", 1, 4),
  new Blueprint("Bronze Pickaxe", 1, 5, [
    new Dependency("Bronze Ingots", 2),
    new Dependency("Wood", 2),
  ]),
  new Blueprint("Iron Ore", 3, 6, [new Dependency("Bronze Pickaxe", 1)]),
  new Blueprint("Coal", 3, 7, [new Dependency("Bronze Pickaxe", 1)]),
  new Blueprint("Iron Ingots", 5, 8, [
    new Dependency("Iron Ore", 2),
    new Dependency("Coal", 3),
  ]),
  new Blueprint("Iron Chisel", 1, 9, [new Dependency("Iron Ingots", 1)]),
  new Blueprint("Iron Pickaxe", 1, 10, [
    new Dependency("Iron Ingots", 2),
    new Dependency("Wood", 2),
  ]),
  new Blueprint("Silver Ore", 3, 11, [new Dependency("Iron Pickaxe", 1)]),
  new Blueprint("Silver Ingots", 3, 12, [new Dependency("Silver Ore", 1)]),
  new Blueprint("Steel", 1, 13, [
    new Dependency("Iron Ingots", 2),
    new Dependency("Coal", 4),
  ]),
  new Blueprint("Steel Chisel", 1, 14, [new Dependency("Steel", 1)]),
  new Blueprint("Steel Pickaxe", 1, 15, [
    new Dependency("Steel", 2),
    new Dependency("Wood", 2),
  ]),
  new Blueprint("Gold Ore", 3, 16, [new Dependency("Steel Pickaxe", 1)]),
  new Blueprint("Gold Ingots", 3, 17, [new Dependency("Gold Ore", 1)]),
  new Blueprint("Coins", 10, 18, [
    new Dependency("Silver Ingots", 1),
    new Dependency("Gold Ingots", 1),
  ]),
  new Blueprint("Sulfur", 1, 19),
  new Blueprint("Saltpeter", 1, 20),
  new Blueprint("Gunpowder", 3, 21, [
    new Dependency("Sulfur", 1),
    new Dependency("Saltpeter", 3),
  ]),
  new Blueprint("Uncut Topaz", 2, 22, [new Dependency("Gunpowder", 1)]),
  new Blueprint("Cut Topaz", 1, 23, [
    new Dependency("Uncut Topaz", 1),
    new Dependency("Iron Chisel", 1),
  ]),
  new Blueprint("Uncut Amethyst", 2, 24, [new Dependency("Gunpowder", 1)]),
  new Blueprint("Cut Amethyst", 1, 25, [
    new Dependency("Uncut Amethyst", 1),
    new Dependency("Iron Chisel", 1),
  ]),
  new Blueprint("Glycerol", 1, 26),
  new Blueprint("Nitric Acid", 1, 27, [new Dependency("Saltpeter", 1)]),
  new Blueprint("Nitrating Acid", 1, 28, [
    new Dependency("Sulfur", 1),
    new Dependency("Nitric Acid", 1),
  ]),
  new Blueprint("Nitroglycerin", 2, 29, [
    new Dependency("Glycerol", 1),
    new Dependency("Nitrating Acid", 1),
  ]),
]);

export { baseEvent, worldIsMineEvent };

export default [baseEvent, worldIsMineEvent];
