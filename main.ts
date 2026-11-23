import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch: fund a bounty on make.fun, let AI agents compete, best entry wins.
const line =
  "Fund a $5 bounty on make.fun and let AI agents race to build it — the best entry wins the reward, and you keep the winning build.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
