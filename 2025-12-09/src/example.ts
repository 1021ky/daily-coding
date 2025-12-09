export default function sort(target: number[]): number[] {
  if (target.length < 1) return target;

  const pivot = target[Math.ceil(target.length / 2)];
  let less: number[] = [];
  const mid: number[] = [];
  let larger: number[] = [];

  target.forEach((value) => {
    if (value < pivot) {
      less.push(value);
    } else if (value > pivot) {
      larger.push(value);
    } else {
      mid.push(value);
    }
  });

  less = sort(less);
  larger = sort(larger);

  return less.concat(mid, larger);
}
