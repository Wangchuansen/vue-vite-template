<template>
  <div>
    <el-button type="primary" @click="test">about</el-button>
    <p>{{str}}</p>
  </div>
</template>


<script setup>
import {onMounted, ref} from "vue";
import service from "../api/index";
let str = ref()
  const test = () => {
    return service({
      url: "dream-demo/demo",
      method: "get",
    }).then((res) => {
      str.value = res.data
    });
  }

</script>

<style scoped>

</style>