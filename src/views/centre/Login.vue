<template>
  <div class="login">
    <div class="title">验证手机登录</div>
    <div class="input-box">
      <div class="left">
        +86<van-icon name="arrow-down" class="arrow-down" /><span
          class="line"
        />
      </div>
      <van-field v-model="tel" type="number" placeholder="手机号码"></van-field>
      <div class="rigth">
       <img src="../../assets/images/close@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
    };
  },
};
</script>

<style scoped >
.title{
height: 24px;
font-size: 22px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
line-height: 24px;
}
.input-box {
  display: flex;
  align-items: center;
  margin: 12px;
  border-bottom: 0.5px solid #ddd;
}
.input-box .left {
  display: flex;
  align-items: center;
}
.line {
  width: 1px;
  height: 20px;
  background-color: #ebebeb;
  margin-left: 6pt;
}
.arrow-down {
  margin-left: 4pt;
}
.input-box .rigth img{
  width: 20px;
  height: 20px;
}
</style>