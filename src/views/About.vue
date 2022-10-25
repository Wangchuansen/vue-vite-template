<template>
  <div>
    <el-button type="primary" @click="test">about</el-button>
  </div>
</template>


<script setup>
import {onMounted} from "vue";
import service from "../api/index";

  const test = () => {
    return service({
      url: "dream-demo/demo",
      method: "get",
    }).then((res) => {
      console.log(res)
    });
  }

</script>

<style scoped>

</style>