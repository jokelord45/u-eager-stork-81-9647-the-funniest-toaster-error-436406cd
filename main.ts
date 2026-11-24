// The Funniest Toaster Error Message — make.fun entry (program/v1).
// Writes one toaster error message (<= 120 chars) to /output/entry.txt.
// Deterministic: the same line on every run. Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised line (60 chars): "the air" was flat and literal; "the void"
// escalates the deadpan absurdity — the toaster isn't heating empty air,
// it's heating the void, out of spite. Same length, stronger image, and
// it lands on one read with no setup. No "bread not found" cliche.
const LINE =
  "ERROR E01: No bread detected. Heating the void out of spite.";

const TEXT = LINE.trim().replace(/\s+/g, " ");
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 120) {
  throw new Error(`Entry must be 1-120 characters, got ${codePoints}.`);
}
if (TEXT.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
