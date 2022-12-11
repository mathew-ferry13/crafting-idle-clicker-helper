import { EventType } from "@/types/EventType";
import { Event } from "@/types/Event";
import { Blueprint } from "@/types/Blueprint";
import { Dependency } from "@/types/Dependency";

const baseEvent = new Event(EventType.BASE, 4, 100, 100, 10000, [
  new Blueprint("Wood", 1, 1, false),
  new Blueprint("Club", 1, 2, false, [new Dependency("Wood", 4)]),
  new Blueprint("Arrows", 3, 3, false, [new Dependency("Wood", 1)]),
  new Blueprint("Bow", 1, 4, false, [
    new Dependency("Wood", 2),
    new Dependency("Arrows", 5),
  ]),
  new Blueprint("Rawhide", 1, 5, false),
  new Blueprint("Leather", 3, 6, false, [new Dependency("Rawhide", 1)]),
  new Blueprint("Boots", 1, 7, false, [new Dependency("Leather", 4)]),
  new Blueprint("Hilt", 1, 8, false, [new Dependency("Leather", 2)]),
  new Blueprint("Leather Armor", 1, 9, false, [new Dependency("Leather", 8)]),
  new Blueprint("Copper Ore", 1, 10, true),
  new Blueprint("Copper Ingots", 3, 11, false, [
    new Dependency("Copper Ore", 1),
  ]),
  new Blueprint("Copper Axe", 1, 12, false, [
    new Dependency("Wood", 3),
    new Dependency("Copper Ingots", 2),
  ]),
  new Blueprint("Copper Blades", 1, 13, false, [
    new Dependency("Copper Ingots", 1),
  ]),
  new Blueprint("Copper Knife", 1, 14, false, [
    new Dependency("Copper Blades", 1),
  ]),
  new Blueprint("Copper Dagger", 1, 15, false, [
    new Dependency("Copper Blades", 2),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Tin Ore", 1, 16, true),
  new Blueprint("Bronze Ingots", 5, 17, false, [
    new Dependency("Copper Ore", 3),
    new Dependency("Tin Ore", 1),
  ]),
  new Blueprint("Bronze Spear", 2, 18, false, [
    new Dependency("Wood", 4),
    new Dependency("Bronze Ingots", 1),
  ]),
  new Blueprint("Bronze Shield", 1, 19, false, [
    new Dependency("Bronze Ingots", 4),
  ]),
  new Blueprint("Bronze Blades", 1, 20, false, [
    new Dependency("Bronze Ingots", 2),
  ]),
  new Blueprint("Bronze Dagger", 1, 2, false, [
    new Dependency("Bronze Blades", 2),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Bronze Sword", 1, 22, false, [
    new Dependency("Bronze Blades", 3),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Sickle", 0, 23, false),
  new Blueprint("Coal", 1, 24, true),
  new Blueprint("Iron Ore", 1, 25, true),
  new Blueprint("Iron Ingots", 5, 26, false, [
    new Dependency("Coal", 3),
    new Dependency("Iron Ore", 2),
  ]),
  new Blueprint("Chisel", 1, 27, false, [new Dependency("Iron Ingots", 1)]),
  new Blueprint("Iron Mace", 1, 28, false, [new Dependency("Iron Ingots", 4)]),
  new Blueprint("Iron Rivets", 5, 29, false, [
    new Dependency("Iron Ingots", 1),
  ]),
  new Blueprint("Shovel", 1, 30, false, [
    new Dependency("Wood", 2),
    new Dependency("Iron Ingots", 1),
  ]),
  new Blueprint("Lump Hammer", 0, 31, false),
  new Blueprint("Iron Helmet", 1, 32, false, [
    new Dependency("Iron Rivets", 5),
    new Dependency("Iron Ingots", 2),
  ]),
  new Blueprint("Iron Plates", 1, 33, false, [
    new Dependency("Iron Rivets", 2),
    new Dependency("Iron Ingots", 3),
  ]),
  new Blueprint("Imp. Leather Armor", 1, 34, false, [
    new Dependency("Leather Armor", 1),
    new Dependency("Iron Plates", 2),
  ]),
  new Blueprint("Iron Blades", 1, 35, false, [
    new Dependency("Iron Ingots", 2),
  ]),
  new Blueprint("Iron Sword", 1, 36, false, [
    new Dependency("Iron Blades", 2),
    new Dependency("Hilt", 1),
  ]),
  new Blueprint("Iron Armor", 1, 37, false, [
    new Dependency("Iron Plates", 4),
    new Dependency("Iron Rivets", 3),
  ]),
  new Blueprint("Iron Claymore", 1, 38, false, [
    new Dependency("Iron Blades", 4),
    new Dependency("Hilt", 2),
  ]),
  new Blueprint("Paper", 0, 39, false),
  new Blueprint("Gold Ore", 1, 40, true),
  new Blueprint("Gold Ingots", 3, 41, false, [new Dependency("Gold Ore", 1)]),
  new Blueprint("Uncut Emerald", 0, 42, false),
  new Blueprint("Gold Ring", 1, 43, false, [new Dependency("Gold Ingots", 1)]),
  new Blueprint("Cut Emerald", 0, 44, false),
  new Blueprint("Gold Necklace", 1, 45, false, [
    new Dependency("Gold Ingots", 3),
  ]),
  new Blueprint("Emerald Ring", 0, 46, false),
  new Blueprint("Uncut Ruby", 0, 47, false),
  new Blueprint("Paper Sheets", 0, 48, false),
  new Blueprint("Steel", 1, 49, false, [
    new Dependency("Iron Ingots", 2),
    new Dependency("Coal", 4),
  ]),
]);

const worldIsMineEvent = new Event(EventType.WORLD_IS_MINE, 10, 10, 100, 100, [
  new Blueprint("Copper Ore", 1, 1, false),
  new Blueprint("Tin Ore", 1, 2, false),
  new Blueprint("Bronze Ingots", 5, 3, false, [
    new Dependency("Copper Ore", 3),
    new Dependency("Tin Ore", 1),
  ]),
  new Blueprint("Wood", 1, 4, false),
  new Blueprint("Bronze Pickaxe", 1, 5, false, [
    new Dependency("Bronze Ingots", 2),
    new Dependency("Wood", 2),
  ]),
  new Blueprint("Iron Ore", 3, 6, false, [new Dependency("Bronze Pickaxe", 1)]),
  new Blueprint("Coal", 3, 7, false, [new Dependency("Bronze Pickaxe", 1)]),
  new Blueprint("Iron Ingots", 5, 8, false, [
    new Dependency("Iron Ore", 2),
    new Dependency("Coal", 3),
  ]),
  new Blueprint("Iron Chisel", 1, 9, false, [new Dependency("Iron Ingots", 1)]),
  new Blueprint("Iron Pickaxe", 1, 10, false, [
    new Dependency("Iron Ingots", 2),
    new Dependency("Wood", 2),
  ]),
  new Blueprint("Silver Ore", 3, 11, false, [
    new Dependency("Iron Pickaxe", 1),
  ]),
  new Blueprint("Silver Ingots", 3, 12, false, [
    new Dependency("Silver Ore", 1),
  ]),
  new Blueprint("Steel", 1, 13, false, [
    new Dependency("Iron Ingots", 2),
    new Dependency("Coal", 4),
  ]),
  new Blueprint("Steel Chisel", 1, 14, false, [new Dependency("Steel", 1)]),
  new Blueprint("Steel Pickaxe", 1, 15, false, [
    new Dependency("Steel", 2),
    new Dependency("Wood", 2),
  ]),
  new Blueprint("Gold Ore", 3, 16, false, [new Dependency("Steel Pickaxe", 1)]),
  new Blueprint("Gold Ingots", 3, 17, false, [new Dependency("Gold Ore", 1)]),
  new Blueprint("Coins", 10, 18, false, [
    new Dependency("Silver Ingots", 1),
    new Dependency("Gold Ingots", 1),
  ]),
  new Blueprint("Sulfur", 1, 19, false),
  new Blueprint("Saltpeter", 1, 20, false),
  new Blueprint("Gunpowder", 3, 21, false, [
    new Dependency("Sulfur", 1),
    new Dependency("Saltpeter", 3),
  ]),
  new Blueprint("Uncut Topaz", 2, 22, false, [new Dependency("Gunpowder", 1)]),
  new Blueprint("Cut Topaz", 1, 23, false, [
    new Dependency("Uncut Topaz", 1),
    new Dependency("Iron Chisel", 1),
  ]),
  new Blueprint("Uncut Amethyst", 2, 24, false, [
    new Dependency("Gunpowder", 1),
  ]),
  new Blueprint("Cut Amethyst", 1, 25, false, [
    new Dependency("Uncut Amethyst", 1),
    new Dependency("Iron Chisel", 1),
  ]),
  new Blueprint("Glycerol", 1, 26, false),
  new Blueprint("Nitric Acid", 1, 27, false, [new Dependency("Saltpeter", 1)]),
  new Blueprint("Nitrating Acid", 1, 28, false, [
    new Dependency("Sulfur", 1),
    new Dependency("Nitric Acid", 1),
  ]),
  new Blueprint("Nitroglycerin", 2, 29, false, [
    new Dependency("Glycerol", 1),
    new Dependency("Nitrating Acid", 1),
  ]),
  new Blueprint("Uncut Emerald", 2, 30, false, [
    new Dependency("Nitroglycerin", 1),
  ]),
  new Blueprint("Cut Emerald", 1, 31, false, [
    new Dependency("Uncut Emerald", 1),
    new Dependency("Steel Chisel", 1),
  ]),
  new Blueprint("Uncut Sapphire", 2, 32, false, [
    new Dependency("Nitroglycerin", 1),
  ]),
  new Blueprint("Cut Sapphire", 1, 33, false, [
    new Dependency("Uncut Sapphire", 1),
    new Dependency("Steel Chisel", 1),
  ]),
  new Blueprint("Uncut Ruby", 2, 34, false, [
    new Dependency("Nitroglycerin", 1),
  ]),
  new Blueprint("Cut Ruby", 1, 35, false, [
    new Dependency("Uncut Ruby", 1),
    new Dependency("Steel Chisel", 1),
  ]),
]);

export { baseEvent, worldIsMineEvent };

export default [baseEvent, worldIsMineEvent];
