export function sort(target: Array<number>) : Array<number> {
  if (target.length <= 1) {
    return target;
  }
  const lesser: number[] = [];
  const mid: number[] = [];
  const larger: number[] = [];
  const pivot_index = Math.round(target.length / 2) - 1;
  const pivot = target[pivot_index];
  target.forEach((v) => {
    if (v < pivot) {
      lesser.push(v)
    } else if (v == pivot){
      mid.push(v);
    } else {
      larger.push(v)
    }
  })
  const sorted_lesser = sort(lesser)
  const sorted_larger = sort(larger)
  
  return sorted_lesser.concat(mid, sorted_larger);
}

export function run(): string {
  return "sample";
}
