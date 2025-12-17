export default function run(param: number[]): number[] {
  sort(param)
  return param;
}

function sort(target: number[], left:number = 0, right: number = target.length - 1): void {
  if(left >= right) return;
  const pivot = target[Math.floor((right - left) / 2) + left];
  let l_index = left;
  let r_index = right;
  while(l_index < r_index) {
    while(target[l_index] < pivot) l_index++
    while(target[r_index] > pivot) r_index--
    if (l_index < r_index) {
      const tmp = target[l_index];
      target[l_index] = target[r_index]
      target[r_index] = tmp
      l_index++
      r_index--
    }
  }
  // 残っている要素に対して再帰的にソートを行う
  sort(target, left, r_index)
  sort(target, r_index + 1, right);
  return;
}
