<template>
<div class="test1">
  <el-input class="input" v-model="name" placeholder="请输入内容"/>
   <el-button type="primary" @click="searchEs">查询</el-button>

  <div class="main" v-if="dataList.length">
    <div
        style="
          width: 100%;
          height: calc(100% - 160px);
          overflow-y: scroll;
          margin-bottom: 30px;
        "
    >
      <div
          class="main_item"
          v-for="(item, index) in dataList"
          :key="index"
      >
        <h2 v-html="item.caseId"></h2>
        <ul>
          <li v-html="item.title"></li>
          <li>丨</li>
<!--          <li>{{ item.opportunityTypeName }}</li>-->
<!--          <li>丨</li>-->
<!--          <li>{{ item.budget }}万元</li>-->
        </ul>
<!--        <p>{{ item.tenderee }}</p>-->
<!--        <p>截止时间：{{ item.endTime }}</p>-->
      </div>
    </div>
  </div>
  <div
      v-else
      style="
        width: 300px;
        height: 280px;
        margin-top: 79px;
        margin-left: 50%;
        transform: translate(-50%);
      "
  >
    <img :src="img" alt="" />
    <p style="text-align: center; color: #999999; font-size: 14px">
      暂无内容
    </p>
  </div>
</div>
</template>

<script setup>
import service from "../../api";
import {reactive, ref} from "vue";
import qs from "qs";
import img from "../../assets/缺省图.png"

const name = ref('')
const params = reactive(({
  pageIndex: 1,
  pageSize: 20,
  name: name
}))
const dataList = ref([])
const searchEs = () => {
  return service({
    url: `dream-demo/es?${qs.stringify(
        params
    )}`,
    method: "get"
  }).then((res) => {
    dataList.value = res.data.data.list
  })
}
</script>

<style scoped>
.input{
  width: 300px;
  margin-right: 50px;
}
ul li {
  list-style: none;
}
.test1 {
  position: relative;
   /*padding: 12px;*/
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .main {
    margin-top: 50px;
    width: 100%;
    background-color: #f0f2f5;
    height: calc(100% - v-bind("filHeight"));
    .main_item {
      padding: 22px 20px;
      width: 370px;
      height: 158px;
      border-radius: 2px;
      background-color: #fff;
      margin-right: 17px;
      /*// margin-bottom: 18px;*/
      margin-top: 20px;
      position: relative;
      float: left;
      h2 {
        line-height: 24px;
        font-size: 16px;
        margin-bottom: 12px;
      }
      ul {
        display: flex;
        margin-bottom: 17px;
        margin-left: -40px;
        li {
          line-height: 22px;
          font-size: 14px;
          color: #999999;
        }
      }
      p {
        color: #999999;
        font-size: 13px;
        line-height: 22px;
        margin-bottom: 2px;
      }

    }
  }
}

</style>