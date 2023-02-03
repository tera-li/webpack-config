import "@/assets/style.css";
import { defaults } from "./default/transform.js";
import { defaultsTs, defaultsTsArrow } from "./default/transform.ts";
import "@/assets/assets.js";
// 引入自定义文件
import("@/default/custom.custom");

console.log("这是打包后的输出：" + process.env.NODE_ENV);
defaults(1, 2, 3, 4, 5, 6, 7.8, 9, 10);
defaultsTs(1, 2, 3, 4, 5, 6, 7.8, 9, 10);
// defaultsTsArrow(1, 2, 3, 4, 5, 6, 7.8, 9, 10);

async function run() {
  const customJs = await import(/* webpackPrefetch: true */ "./assets/customJs.js");
  console.log(customJs);
}
setTimeout(() => {
  run();
}, 3000);
