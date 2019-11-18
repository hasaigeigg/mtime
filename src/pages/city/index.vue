<template>
  <div >
      
    <HeaderFan icon title="当前城市" />
    <section ref="cityContainer" class="index_section">
      <BS-scroll ref="scroll">
        <div>
      <div ref="cityListTitle" class="City-pd-top">
        <div class="City-box" >
          <div class="adress-sou">
            <div class="city-sou-box">
              <input type="text" placeholder="请输入搜索关键词" />
            </div>
          </div>
          <div class="nowcity">
            <p>当前城市:</p>
            <ul class="clearfix">
              <li>
                <a>{{n}}</a>
              </li>
            </ul>
          </div>
          <!-- 热门 -->
          <div class="nowcity">
            <p>热门城市:</p>
            <ul class="clearfix" >
              <li v-for="(item,index) in hotList" :city-id="item.id" :key="index">
                <a >{{item.n}}</a>
              </li>
            </ul>
          </div>
          <!-- 列表 -->
          <div  class="nowcity" v-for="item in cityList" :key="item.id">
            <p class="city-list-title">{{item.index}}</p>
            <ul class="clearfix">
              <v-touch tag="li" @tap="handleCityTo(child)" v-for="(child) in item.list" :city-id="child.id" :key="child.id">
                <a>{{child.n}}</a>
              </v-touch>
            </ul>
          </div>
          
        </div>
      </div>
      </div>
    </BS-scroll>
    <!-- 城市列表 -->
          <div class="city-list">
            <v-touch tag="div" @tap="handleTo(index)" class="index-item" v-for="(item,index) in cityList" :key="item.id">{{item.index}}</v-touch>
          </div>
    </section>

  </div>
</template>

<script>
import {mapState} from 'vuex'
// import BScroll from "better-scroll";
export default {
  name: "City",
  // mounted() {
  //   this.$refs.scroll.handleScroll();
  // },
  created() {
    if (!(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotList"))) {
      this.$store.dispatch("city/handleGetCityList");
    }
  },
  computed:{
    ...mapState({
      hotList:state=>state.city.hotList,
      cityList:state=>state.city.cityList,
      n:state=>state.city.n
    })
  },
  methods: {
    handleTo(index){
      let t = this.$refs.cityListTitle.querySelectorAll(".city-list-title")[index].offsetTop;
      // this.$refs.cityContainer.scrollTop = t -55;
      this.$refs.scroll.handleScrollTo(-t);
    },
    handleCityTo(city){
      this.$router.back();
      this.$store.commit("city/handleUpdateCityInfo",city);
    }
  },

};
</script>

<style>
.index_section {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding-top: 0.43rem;
}
.adress-sou {
  padding: 0.08rem 0.15rem 0.075rem 0.367rem;
}

.city-sou-box {
  width: 100%;
  height: 100%;
}

.adress-sou input {
  width: 100%;
  height: 100%;
  padding: 0.062rem 0.246rem 0.062rem 0.273rem;
  border: 1px solid #bbb;
  font-size: 0.133rem;
  height: 0.333rem;
  border-radius: 0.042rem;
  outline: none;
  background: url(http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png)
    no-repeat 0.075rem center;
  background-size: 0.175rem 0.175rem;
}

.nowcity {
  font-size: 0.15rem;
}

.nowcity p {
  color: #777;
  background: #ebebeb;
  padding: 0 0.147rem;
  line-height: 0.292rem;
}

.clearfix {
  padding: 0 0.15rem 0.15rem;
  overflow: hidden;
}

.clearfix li {
  float: left;
  width: 25%;
  padding: 0.15rem 0 0;
}

.clearfix li a {
  color: black;
}
/*城市列表下标*/
.city-list {
  position: fixed;
  right: 0;
  top: .833rem;
}
.city-list > div {
  font-size: .117rem;
  padding: .017rem .042rem ;
}
</style>