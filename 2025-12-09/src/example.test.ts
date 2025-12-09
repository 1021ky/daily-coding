import { expect, test } from "vitest";
import sort from "@/example";
test.each([
  { param: [3, 5, 1, 2, 4], expected: [1, 2, 3, 4, 5] },
  { param: [], expected: [] },
  { param: [2, 2, 2, 2, 2, 2, 2, 2], expected: [2, 2, 2, 2, 2, 2, 2, 2] },
])(
  "sample($param) -> $expected",
  ({ param, expected }: { param: number[]; expected: number[] }) => {
    expect(sort(param)).toEqual(expected);
  },
);
