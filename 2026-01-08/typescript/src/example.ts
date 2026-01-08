export default function sort(param: number[]): void {
  quick_sort(param)
  return;
}

function quick_sort(param: number[], left = 0, right = param.length): void {
  // 残り1要素ならばソート終了
  if (right - left <= 1) return;

  // pivot取得
  const pivot = param[Math.floor((left + right) / 2)];
  let i = left;
  let j = right - 1;

  // pivotよりも左側でソートできないところを探して、並べ替える
  while (i <= j) {
    while (param[i] < pivot) i++;
    while (param[j] > pivot) j--;

    if (i <= j) {
      [param[i], param[j]] = [param[j], param[i]]
      i++;
      j--;
    }
  }

  // 未ソート部分をソートする
  quick_sort(param, left, j + 1);
  quick_sort(param, i, right);
}
