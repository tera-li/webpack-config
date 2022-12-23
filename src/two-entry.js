const two_entry = () => {
  console.log("加载第二个入口");
};
two_entry();

import { createApp } from "vue";

const app = createApp({
  data() {
    return {
      count: 0,
    };
  },
});

app.mount("#app");
