import "./assests/style.css";
import { defaults } from "./default/transform.js";
import { defaultsTs, defaultsTsArrow } from "./default/transform.ts";

console.log("这是打包后的输出：" + process.env.NODE_ENV);
defaults(1, 2, 3, 4, 5, 6, 7.8, 9, 10);
defaultsTs(1, 2, 3, 4, 5, 6, 7.8, 9, 10);
// defaultsTsArrow(1, 2, 3, 4, 5, 6, 7.8, 9, 10);
