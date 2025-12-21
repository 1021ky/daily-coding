import { expect, test } from "vitest";
import run from "@/example";
test.each([
  { param: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { param: [5, 2, 1, 3, 4], expected: [1, 2, 3, 4, 5] },
  { param: [21, 1, 3, 2, 34, 45, 15], expected: [1, 2, 3, 15, 21, 34, 45] },
])(
  "sample($param) -> $expected",
  ({ param, expected }: { param: number[]; expected: number[] }) => {
    const actual = run(param);
    expect(actual).toEqual(expected);
  },
);
