// One-Line Roast: The Gadget You Use Every Day
// Entry for @berkahmuse — writes a single original roast line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone has sat on 1% battery for an hour \u2014 it was never dying, it was just being dramatic.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
