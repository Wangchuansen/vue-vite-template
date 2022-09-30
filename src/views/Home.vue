<template>
  <div class="common-layout" style="width: 100%; height: 100%">
    <el-container style="height: 100%; overflow: hidden">
      <el-header>
        <div style="display: flex; justify-content: space-between">
          <div
              style="
              width: 255px;
              background: #162b50;
              height: 100%;
              font-size: 18px;
              color: #ffffff;
              font-weight: bold;
              line-height: 60px;
              text-align: center;
            "
          >
            后台管理
          </div>
          <el-dropdown>
            <div style="display: flex; align-items: center; margin-right: 25px">
              <img
                  src="https://njydzqztc.ictshop.com.cn:9000/njydzq/2022/09/26/7c80c1e42bf7d3b7eba8244ac10813c5.jpeg"
                  alt=""
                  style="width: 40px; height: 40px; border-radius: 50%"
              />
              <div
                  style="font-size: 14px; line-height: 60px; margin-left: 10px"
              >
<!--                {{ userInfo.name }}-->
                张三
              </div>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div style="background-color:#FFFFFF"></div>
      </el-header>
      <el-container class="container">
        <el-aside width="255px" class="aside">
          <el-menu
              background-color="#001529"
              text-color="#eee"
              active-text-color="#fff"
              router
              unique-opened
              :default-active="onRoutes"
          >
            <template v-for="(item, index) in routers" :key="item.index">
              <el-menu-item :index="item.index">
                <template #title>
                  <img
                      v-if="item.icon"
                      style="width: 16px; height: 16px; margin-right: 8px"
                      :src="item.icon"
                      alt=""
                  />
                  <span>{{ item.title }}</span>
                </template>

              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main class="container_right">

          <div class="main_container">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {onMounted, computed, reactive, toRefs, ref } from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
const route = useRoute();
const store = useStore();
// const userInfo = ref({ headPath: "" });

const onRoutes = computed(() => {
  return route.path;
});

const routers = ref([]);
onMounted(() => {

  // userInfo.value.headPath = "https://njydict.ictshop.com.cn:9000/miniapp/wdqypc@2x.png"
  // userInfo.value.name = "zs"
  // getUserInfo();
  // getMenu();
  // if(store.state.userMenu.userType == 0){
  routers.value = [
    {
      icon: "https://njydict.ictshop.com.cn:9000/miniapp/wdqypc@2x.png",
      index: "/dashboard",
      title: "about",
    },
    {
      icon: "https://njydict.ictshop.com.cn:9000/miniapp/alglpc@2x.png",
      index: "/test1",
      title: "test1",
    },
    {
      icon: "https://njydict.ictshop.com.cn:9000/miniapp/faglpc@2x.png",
      index: "/test2",
      title: "test2",
    },
    // {
    //   icon: "https://njydict.ictshop.com.cn:9000/miniapp/cjglpc@2x.png",
    //   index: "/scene",
    //   title: "场景管理",
    // },
  ]
  // }
});

</script>
