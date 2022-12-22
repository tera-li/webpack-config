export function defaultsTs(a: number, ...b: number[]) {
  let arr: number[] = Array.from([a, ...b]);
  new Promise(() => {});
  console.log("ts：", arr);
}

export const defaultsTsArrow = (a: number, ...b: number[]) => {
  let arr: number[] = Array.from([a, ...b]);
  new Promise(() => {});
  console.log("ts：", arr);
};
