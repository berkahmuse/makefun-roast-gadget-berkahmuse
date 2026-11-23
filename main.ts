// One-Line Roast: The Gadget You Use Every Day
// Entry for @berkahmuse — writes a single original roast line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My phone has sat on 1% battery for an hour \u2014 it was never dying, it was just being dramatic.";

// Competition gate: the entry must be a single line, 1–200 characters,
// non-whitespace, and valid UTF-8. Validate before writing so a bad line
// can never reach /output/entry.txt; the line itself is unchanged.
function validateRoastLine(line: string): void {
  if (typeof line !== "string" || line.trim().length === 0) {
    throw new Error("Roast line must be non-empty and not only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Roast line must be a single line");
  }
  const charCount = [...line].length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`Roast line must be 1–200 characters, got ${charCount}`);
  }
  if (Buffer.from(line, "utf8").toString("utf8") !== line) {
    throw new Error("Roast line must be valid UTF-8");
  }
}

validateRoastLine(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
