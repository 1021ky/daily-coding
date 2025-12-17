export default function sort(
  target: number[],
  left_index: number = 0,
  right_index: number = target.length - 1,
): void {
  // 要素が1しかないならばなにもせずおえる
  if (left_index >= right_index) return;
  // ピボットをとる
  const pivot = target[Math.floor((left_index + right_index) / 2)];
  // よせる
  let left_i = left_index;
  let right_i = right_index;
  while (left_i <= right_i) {
    while (target[left_i] < pivot) left_i++;
    while (target[right_i] > pivot) right_i--;
    if (left_i <= right_i) {
      const tmp = target[left_i];
      target[left_i] = target[right_i];
      target[right_i] = tmp;
      left_i++;
      right_i--;
    }
  }
  if (left_index < left_i) sort(target, left_index, right_i);
  if (right_i < right_index) sort(target, left_i, right_index);
  return;
}
