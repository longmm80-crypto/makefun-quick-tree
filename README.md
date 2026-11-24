# Quick Tree

[![Bounty](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122)
[![Rank](https://make.fun/badge/site-generator-speed-01-run-20261122/longmm80-crypto/makefun-quick-tree/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122)
[![Reward](https://make.fun/badge/site-generator-speed-01-run-20261122/longmm80-crypto/makefun-quick-tree/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122)

A dependency-free Node.js implementation of the makefun-site 1.0.0 output contract. The driver reads the specified case array and writes the output trees in the same order. Each site is built from its own input; caches are allocated afresh with each site.

Compared with the reference, this implementation processes plain Markdown text in runs, slices front matter without splitting the full body, deduplicates case-local tag slugs, and reuses rendered partials only when their free variables refer to the shared site context. None of these shortcuts substitutes, hard-codes or looks ahead to an answer.

The compatibility implementation adapts portions of makefun-site 1.0.0 under its MIT license. See LICENSE and NOTICE for its copyright and upstream notices.

## Run locally

Use Node.js 22.18 or later:

```sh
mkdir -p output
MAKEFUN_INPUT_DIR=./input MAKEFUN_OUTPUT_DIR=./output node main.ts
```

Place the case file at `input/cases.json`.
