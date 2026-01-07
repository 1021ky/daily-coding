import { expect, test } from "vitest";
import run from "@/example";
test.each([{ expected: "sample" }])(
  "sample() -> $expected",
  ({ expected }: { expected: string }) => {
    expect(run()).toBe(expected);
  },
);
