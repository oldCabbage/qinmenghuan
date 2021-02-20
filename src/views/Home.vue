<template>
  <div class="home">
    <img class="bg" :src="require('../assets/images/CSDN-home.png')" />
    <img
      class="menu"
      :src="require('../assets/images/mymenuicon@2x.png')"
      @click="onMenu"
    />
    <div class="center">
      <img class="logo2" src="../assets/images/logo2@2x.png" alt="" />
      <div class="search">
        <input
          type="text"
          :value="value"
          placeholder="输入证书编号/身份证号查询证书"
          class="search-box"
        />
        <img
          class="search-icon"
          src="../../src/assets/images/search@2x.png"
          alt=""
        />
      </div>
    </div>
    <div class="footer">
      <router-link class="to-bespeak" to="exam-bespeak">考试预约 </router-link>
      <p class="right">© 2021 多助科技有限公司, All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
import { getCaptcha } from "../api/login";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      value: "",
    };
  },
  created() {
    getCaptcha("15997437231");
  },
  methods: {
    onSearch() {},
    onMenu() {
      this.$router.push("Login");
    },
  },
};
</script>
<style scoped lang="less">
.home {
  width: 100vw;
  height: 100vh;
  background-color: #242244;
}
.home .bg {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.menu {
  position: fixed;
  top: 9px;
  left: 12px;
  width: 24px;
  height: 24px;
}
.center {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50%;
  margin-left: 20px;
  padding-right: 20px;
}
.logo2 {
  height: 74px;
  width: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 56px;
}
.search {
  position: relative;
}
.search-box {
  background-color: #fff;
  height: 50px;
  border: none;
  border-radius: 24px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 51px 0 21px;
  
  font-size: 12px;
  font-family: MicrosoftYaHei;
  color: #666;
  line-height: 50px;
}
.search-box::placeholder {
  font-family: MicrosoftYaHei;
  color: #c9c9c9;

}
.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  height: 27px;
  width: 27px;
  background-image: "../assets/images/search@2x.png";
}
.search-btn {
  width: 27px;
  height: 27px;
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.to-bespeak {
  display: block;
  text-align: center;
  border-radius: 353px;
  opacity: 0.1;
  color: rgba(255, 255, 255);
  text-decoration: underline;

  font-size: 15px;
  font-family: MicrosoftYaHei;
  color: #ffffff;
  line-height: 20px;
}
.footer .right {
  text-align: center;
  font-size: 8px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255);
  line-height: 14px;
  opacity: 0.1;
  margin-top: 30px;
}
</style>
