<template>
  <div class="croll-container">
    <div class="scroll-loading" v-if="flag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BS-scroll",
  data() {
    return {
      flag: false,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollX:true,
      //滚动优化
      probeType: 1,
      //下拉刷新
      pullDownRefresh:{
          threshold:50
      },
      //上拉加载更多
      pullUpLoad:true,
      tap:true,
      click:true
    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 50 ) {
          this.flag = true;
        }
      });
    },
    handleScrollTo(y){
      this.scroll.scrollTo(0,y,300);
    },
    handleScrollToX(x){
      this.scroll.scrollTo(x,0,300);
    },

    
    //下来刷新获取数据
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        callback();
      });
    },
    //当数据请求成功后需要执行得方法
    handleRefreshDown() {
      //重新计算better-scroll
      this.scroll.refresh();
      //防止用户多次频繁下拉刷新做的防抖
      this.scroll.finishPullDown();
      setTimeout(() => {
        this.flag = false;
      }, 1000);
    },
    //上拉加载更多
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback();
        })
    },
    //当上拉加载更多请求完毕后
    handlefinishPullUp(){
        //重新计算better-scroll
        this.scroll.refresh();
        //当上拉加载更多请求数据后通过better-scroll可以进行下一次得加载了
        this.scroll.finishPullUp();

    }
  }
};
</script>

<style>
.wrapper,
.croll-container {
  height: 100%;
}
.scroll-loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.scroll-loading i {
  font-size: 0.25rem;
}
</style>