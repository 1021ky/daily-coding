import { expect, test } from "vitest";
import run from "@/example";
test.each([
  { param: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { param: [2, 1], expected: [1, 2] },
  {
    param: [11, 29, 76, 84, 3, 94, 9, 4, 23, 52],
    expected: [3, 4, 9, 11, 23, 29, 52, 76, 84, 94],
  },
  { param: [999], expected: [999] },
  { param: [], expected: [] },
])(
  "sample($param) -> $expected",
  ({ param, expected }: { param: number[]; expected: number[] }) => {
    expect(run(param)).toEqual(expected);
  }
);
