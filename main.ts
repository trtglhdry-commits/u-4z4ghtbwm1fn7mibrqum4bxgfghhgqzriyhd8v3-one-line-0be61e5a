// One Line, One Laugh — make.fun entry.
// Writes one original one-line joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no randomness, no network, no clock. The joke's turn is
// the AI dodging the apology by blaming the author's personality instead.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked the AI to write my apology; it apologized for my personality instead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
