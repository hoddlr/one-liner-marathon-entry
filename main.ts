import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My smoke alarm sends me a weekly performance review, and honestly, the feedback is fair.";

mkdirSync("/output", { recursive: true });

// Validation guard: exactly one line, 1-280 chars, not only whitespace.
if (joke.length < 1 || joke.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${joke.length}`);
}
if (joke.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (joke.includes("\n") || joke.includes("\r")) {
  throw new Error("entry must be a single line");
}

writeFileSync("/output/entry.txt", joke, "utf8");
