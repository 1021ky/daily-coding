export default function run(param: number[]): number[] {
  sort(param);
  return param;
}

function sort(
  target: number[],
  left: number = 0,
  right: number = target.length - 1,
): void {
  if (left >= right) return;

  const pivot = target[Math.floor((right - left) / 2) + left];
  let lindex = left;
  let rindex = right; // パーティションとして扱う
  while (lindex <= rindex) {
    while (lindex <= rindex && target[lindex] < pivot) lindex++;
    while (lindex <= rindex && target[rindex] > pivot) rindex--;
    if (lindex <= rindex) {
      const tmp = target[lindex];
      target[lindex] = target[rindex];
      target[rindex] = tmp;
      lindex++;
      rindex--;
    }
  }

  sort(target, left, rindex);
  sort(target, lindex, right);
  return;
}
