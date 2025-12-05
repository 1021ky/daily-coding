import { expect, test } from "vitest";
import { sort } from "@/quick_sort";


test.each([
  { param: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  {
    param: [1, 8, 2, 1, 3, 5, 8, 9, 4, 7],
    expected: [1, 1, 2, 3, 4, 5, 7, 8, 8, 9],
  },
  { param: [], expected: [] },
])(
  "sort($param) -> $expected",
  ({ param, expected }: { param: Array<number>; expected: Array<number> }) => {
    expect(sort(param)).toStrictEqual(expected);
  }
);
