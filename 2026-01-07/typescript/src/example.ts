export default function run(param: number[]): void {
  sort(param);
  return;
}

function sort(param: number[]): void {
  for (let index = 0; index < (param.length - 1); index++) {
    for (let innerIndex = index + 1; innerIndex < param.length; innerIndex++) {
      if (param[index] > param[innerIndex]) {
        [param[index], param[innerIndex]] = [param[innerIndex], param[index]]
      }
    }
  }
}