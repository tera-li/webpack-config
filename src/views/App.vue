<template>
  <div>使用 Vue</div>
  <div>{{ rawHtml }}</div>
  <div>{{ message }}</div>
  <span>hhhh</span>
  <helloWorld />
</template>

<script setup>
import { ref, reactive } from "vue";
import helloWorld from "@/views/components/helloWorld.vue";
const rawHtml = ref("This is Vue");
const message = reactive("This is Vue");
console.log(rawHtml);
</script>
<style scoped>
span {
  color: seagreen;
}
</style>
