<template>
  <div class="main">
    <div class="str">
      <el-button type="primary" @click="test">hello</el-button>
      <p>{{ str }}</p>
    </div>

    <div class="feign">
      <el-button type="primary" @click="feign">feign</el-button>
      <p>{{ helloFeign }}</p>
    </div>

  </div>
</template>


<script setup>
import {onMounted, reactive, ref} from "vue";
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
let helloFeign = ref('')
const args = reactive({
  args: "hello feign"
})
const feign = () => {
  return service({
    url: "dream-demo/feign",
    method: "post",
    params: args
  }).then((res) => {
    helloFeign.value = res.data
  })
}
</script>

<style scoped>
.str{
  float: left;
}
.feign{

}
</style>