<template>
  <div class="center">
    <div class="top">
      <div class="logo">公司图标</div>
      <!-- <img src="../assets/image/logo.png"> -->
      <div class="daohang">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="2">首页</el-menu-item>
          <el-submenu index="3">
            <template slot="title">产品</template>
            <el-menu-item index="2-1">验证码</el-menu-item>
            <el-submenu index="2-2">
              <template slot="title">营销</template>
              <el-menu-item index="2-2-1">网贷</el-menu-item>
              <el-menu-item index="2-2-2">信用卡</el-menu-item>
              <el-menu-item index="2-2-3">游戏</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4">价格</el-menu-item>
          <el-menu-item index="5">
            <a href="www.baidu.com" target="_blank">案例</a>
          </el-menu-item>
          <el-menu-item index="6">下载</el-menu-item>
          <el-menu-item index="7">文档帮助</el-menu-item>
          <el-menu-item index="8">关于我们</el-menu-item>
        </el-menu>
      </div>
    </div>

    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="xuanxiang">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      activeName: 'second'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
        console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.center{
  margin: 0px;
  padding: 0px;
}
.top {
  height: 100%;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.logo {
  height: 100px;
  width: 100px;
  margin-top: 40px;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
}
.daohang {
  left: 200px;

  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}
.carousel {
  position: relative;
  top: 100px;
}
.xuanxiang{
  width: 1200px;
  height: 700px;
  align:center;
  top: 100px;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

 