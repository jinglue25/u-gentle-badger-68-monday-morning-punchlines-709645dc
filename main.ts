import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Monday morning is just Friday's unfinished business wearing a fake moustache and pretending we haven't met.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDirectory}/entry.txt`;

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, `${line}\n`, "utf8");

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `Competition gate failed in ${import.meta.url}: ${outputFile} contains ${characterCount} trimmed characters; expected 1–200.`,
  );
}
