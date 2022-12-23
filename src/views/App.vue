<template>
  <div>使用 Vue</div>
  <div>{{ rawHtml }}</div>
  <div>{{ message }}</div>
</template>

<script setup>
import { ref, reactive } from "vue";
const rawHtml = ref("This is Vue");
const message = reactive("This is Vue");
console.log(rawHtml);
</script>
