import { expect, test } from "vitest";
import run from "@/example";
test.each([
  { expected: [1, 2, 3], param: [2, 1, 3] },
  { expected: [1, 1, 1, 1], param: [1, 1, 1, 1] },
  { expected: [-31, -1, 1, 2, 4], param: [4, 2, -1, -31, 1] },
  { expected: [], param: [] },

])(
  "sample() -> $expected",
  ({ expected, param }: { expected: number[]; param: number[] }) => {
    run(param);
    const actual = param
    expect(actual).toEqual(expected);
  },
);
