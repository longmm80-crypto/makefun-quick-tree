import {readFileSync, writeFileSync} from "node:fs";
import {setFlagsFromString} from "node:v8";

setFlagsFromString("--no-incremental-marking");
const {run} = await import("./solve.js");
const input = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const output = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const cases = JSON.parse(readFileSync(input + "/cases.json", "utf8"));
writeFileSync(output + "/answers.json", JSON.stringify(cases.map(c => run(c.input))));
