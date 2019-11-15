<template>
  <div class="headerF">
    <div>
      <v-touch class="left_icon" v-if="icon" @tap="handleBack()">
        <i class="iconfont">&#xe618;</i>
      </v-touch>
    </div>

    <a v-if="!(title)">
        <i class="logo-mtime"></i>
    </a>
    <a class="biaoti" v-if="title">{{title}}</a>

    <div class="zhanwei">
        <i class="iconfont" v-html="tubiao"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderFan",
  props: {
    title: {
      type: String,
    },
    tubiao:{
      type:String,
    },
    icon:{
        type:Boolean
    }
  },
  methods:{
      handleBack(){
          this.$router.back();
      }
  }
};
</script>

<style>
.headerF{
    height: .44rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #1c2635;
    z-index: 50;

}
.iconfont{
  font-size: 0.25rem;
}
.left_icon{
    width: .44rem;
    height: .44rem;
    display: block;
    font-size: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
}
.logo-mtime{
    display: block;
    width: .56rem;
    height: .18rem;
    background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/logo_mtime.png) no-repeat;
    background-size: contain;
}
.zhanwei{
    width: .44rem;
}
.biaoti{
  font-size: .167rem;
  color: #fff;
}
.zhanwei i{
  color: #fff
}
</style>