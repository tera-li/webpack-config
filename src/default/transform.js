export function defaults(a, ...b) {
  let arr = Array.from([a, ...b]);
  new Promise(() => {});
  console.log("js：", arr.reverse());
}
