export default function sort(target: number[], left = 0, right = target.length - 1): void {
  if (left >= right) return;

  const pivot = target[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  // 部分配列を作らず、左右から走査して入れ替える
  while (i <= j) {
    // 期待通り並んでいないところを探しては入れ替える
    while (target[i] < pivot) i++;
    while (target[j] > pivot) j--;
    if (i <= j) {
      const tmp = target[i];
      target[i] = target[j];
      target[j] = tmp;
      i++;
      j--;
    }
  }

  // 同じ配列を参照渡しで再帰（境界のみ渡す）
  // 1要素だけになるまで、再帰的に大きいものは右、小さいものは左に分けていく
  if (left < j) sort(target, left, j);
  if (i < right) sort(target, i, right);
}
