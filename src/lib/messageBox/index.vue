<template>
  <div class="mbContainer">
    <div class="ms_title">
      <div>{{title}}</div>
       <v-touch tag="div" @tap="handleClose()">X</v-touch>
    </div>
    <div class="ms_content">{{content}}</div>
    <div class="ms_btn">
      <v-touch tag="div" @tap="handleOk()">确认</v-touch>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mbContainer {
  background: #fff;
  width: 2.133rem;
  height: 1.325rem;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 20;
  font-size: .133rem;
}
.ms_title {
  width: 100%;
  height: 0.358rem;
  background: #f8f8f8;
  padding: 0 0.083rem;
  line-height: 0.358rem;
  display: flex;
  justify-content: space-between;
}
.ms_content {
  padding: 0.167rem 0.833rem;
  text-align: center;
}
.ms_btn {
  height: 0.642rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* -- */
</style>

