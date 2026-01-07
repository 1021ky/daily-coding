import { expect, test } from "vitest";
import sort from "@/example";
test.each([
  { param: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { param: [2, 2, 3, 3, 3, 2, 2], expected: [2, 2, 2, 2, 3, 3, 3] },
  { param: [4, 1, 2, 0, 2, 1, 4, 5, 3], expected: [0, 1, 1, 2, 2, 3, 4, 4, 5] },
  { param: [], expected: [] },
])(
  "sample($param) -> $expected",
  ({ param, expected }: { param: number[]; expected: number[] }) => {
    sort(param);
    const actual = param;
    expect(actual).toEqual(expected);
  },
);
