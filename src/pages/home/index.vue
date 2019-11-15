<template>
  <section class="index_section">
    <div>
      <nav class="index_nav">
        <div class="nav_left">
          <router-link tag="b" to="/city">{{this.$store.state.city.n}}</router-link>
          <i class="nav_city"></i>
        </div>
        <router-link tag="p" to="/sou">
          <a>影片/影院/影人，任你搜</a>
        </router-link>
      </nav>
      <div class="reying">
        <h2>
          <a href="javascript:;">
            <i class="i_next"></i>
            <b>正在热映（{{Reying}}部）</b>
          </a>
        </h2>
        <ul>
          <li v-for="(item,index) in HomeList" :key="index">
            <a>
              <div class="pic">
                <img :src="item.img" alt />
                <em v-show="item.r != -1" class="pfen">{{item.r}}</em>
              </div>
              <p>{{item.t}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="jijiang">
        <a>
          <h2>即将上映（62部）</h2>
          <i class="i_next i_xnext"></i>
        </a>
      </div>
      <div class="content">
        <div class="gg">
          <img
            src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&width=640&height=320&clipType=4"
            alt
          />
        </div>
        <div class="b_bj">
          <h2 class="hot">今日热点</h2>
          <ul>
            <li v-for="(item,index) in HomeRedian" :key="index">
              <!-- 小图模板 -->
              <div v-if="item.styleType == 1" class="table">
                <div class="table-pic">
                  <img class="img_box" :src="item.images[0].imgUrl" alt />
                </div>
                <div class="table-text">
                  <h2>{{item.title}}</h2>
                  <p>
                    <time>{{item.publishTime | toLastTime()}}</time>
                  </p>
                </div>
              </div>
              <!-- 大图模板 -->
              <div v-else-if="item.styleType == 2">
                <div class="big-img">
                  <img class="img_box" :src="item.images[0].imgUrl" alt />
                  <i class="index-radio"></i>
                </div>
                <div class="big-text">
                  <h2>{{item.title}}</h2>
                  <p>
                    <time>{{item.publishTime | toLastTime()}}</time>
                  </p>
                </div>
              </div>
              <!-- 三图模板 -->
              <div v-else-if="item.styleType == 3" class="santu">
                <h2>
                  <a>{{item.title}}</a>
                </h2>
                <div class="picList">
                  <a href>
                    <img :src="item.images[0].imgUrl" alt />
                  </a>
                  <a href>
                    <img :src="item.images[1].imgUrl" alt />
                  </a>
                  <a href>
                    <img :src="item.images[2].imgUrl" alt />
                  </a>
                </div>
                <p>
                  <time>{{item.publishTime | toLastTime()}}</time>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="index_more">查看更多</div>
  </section>
</template>

<script>
import { homereApi, homecontentApi, mcApi } from "@api/home";
import MessageBox from "../../lib/messageBox/index.js";
export default {
  name: "Home",
  data() {
    return {
      HomeList: JSON.parse(sessionStorage.getItem("HomeList")) || [],
      Reying: "51",
      HomeRedian: JSON.parse(sessionStorage.getItem("HomeRedian")) || [],
      IdType:""
    };
  },
  methods: {
   async handleGengXinShuJu(){
       if (!(this.IdType == this.$store.state.city.cityId)) {
      let homeList = await homereApi(this.$store.state.city.cityId);
      this.Reying = homeList.ms.length;
      this.HomeList = homeList.ms.slice(0, 8);

      let content = await homecontentApi(this.$store.state.city.cityId);
      this.HomeRedian = content.data.list;
      sessionStorage.setItem("HomeList", JSON.stringify(homeList.ms.slice(0, 8)));
      sessionStorage.setItem("HomeRedian", JSON.stringify(content.data.list));

      this.IdType = this.$store.state.city.cityId;
    }
    }
  },
  created() {
    this.handleGengXinShuJu();

    MessageBox({
      title:"城市定位",
      content:this.$store.state.city.n,
      ok:()=>{
        alert(1)
      }
    });
  },
  updated() {
   this.handleGengXinShuJu();
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
/*nav*/
.index_nav {
  height: 0.512rem;
  line-height: 0.338rem;
  width: 100%;
  background: #f6f6f6;
  border-bottom: 1px solid #d8d8d8;
  padding: 0.083rem 0 0.083rem 0.167rem;
}

.nav_city {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png)
    no-repeat;
  background-size: cover;
}

.nav_left {
  margin-right: 0.083rem;
  width: 0.458rem;
  float: left;
}

.nav_left b {
  font-weight: normal;
  font-size: 0.15rem;
}

.nav_left i {
  display: inline-block;
  width: 0.083rem;
  height: 0.042rem;
  position: relative;
  top: -0.025rem;
}

.index_nav p {
  width: 2.225rem;
  height: 0.325rem;
  float: left;
  border: 1px solid #bbbbbb;
  border-radius: 0.083rem;
  padding: 0 0.275rem;
  background: #fff
    url(http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png)
    no-repeat 0.047rem center;
  background-size: 0.183rem 0.183rem;
  display: block;
}

.index_nav p a {
  color: #777;
  font-size: 0.133rem;
}

.reying {
  padding: 0.058rem 0.183rem 0.183rem;
}
.reying h2 {
  font-size: 0.167rem;
  position: relative;
  line-height: 2;
}
.reying h2 a {
  color: #333333;
}
.i_next {
  display: block;
  width: 0.15rem;
  height: 0.1rem;
  background: #fff
    url(http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png)
    no-repeat center;
  transform: rotate(-90deg);
  position: absolute;
  right: 0;
  background-size: auto 0.1rem;
  top: 0.127rem;
}
.reying ul {
  overflow: hidden;
}
.reying ul li {
  width: 25%;
  float: left;
  text-align: center;
  overflow: hidden;
}
.reying ul li .pic {
  height: 0.979rem;
  width: 0.65rem;
  margin: auto;
  position: relative;
}
.pic img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
}
.pfen {
  position: absolute;
  top: 0.025rem;
  right: 0.025rem;
  background: #659d0e;
  color: #fff;
  width: 0.2rem;
  height: 0.183rem;
  font-size: 0.092rem;
  text-align: center;
  font-style: normal;
  line-height: 0.183rem;
}
.reying p {
  color: #000;
  font-size: 0.125rem;
  margin-top: 0.042rem;
  margin-bottom: 0.083rem;
  width: 0.65rem;
  height: 0.317rem;
}
.jijiang {
  border-top: 1px solid #d8d8dd;
  margin-left: 0.125rem;
  height: 0.458rem;
  position: relative;
  padding: 0.05rem 0.15rem 0.05rem 0;
}
.jijiang a {
  line-height: 2;
  color: #333;
}
.jijiang a h2 {
  font-size: 0.167rem;
}
.i_xnext {
  right: 0.183rem;
  top: 0.187rem;
}

.content {
  width: 100%;
}
.gg {
  background: #f6f6f6;
  padding: 0.167rem 0;
}
.gg img {
  width: 100%;
}
.b_bj {
  padding: 0.042rem 0.125rem 0;
}
.b_bj .hot {
  line-height: 2;
  font-size: 0.167rem;
}
.b_bj ul li {
  padding: 0.13rem 0;
  border-bottom: 1px solid #d8d8d8;
}
.b_bj ul li:last-child {
  border-bottom: none;
}
.table {
  display: flex;
}
.table-pic {
  margin-right: 0.1rem;
  width: 1.517rem;
  height: 0.8rem;
}
.img_box {
  border: 1px solid #ddd;
  width: 100%;
  height: 100%;
}
.table-text time {
  font-size: 0.083rem;
  color: #acacac;
}
.table-text h2 {
  font-size: 0.15rem;
}
.table-text p {
  margin-top: 0.117rem;
}
.big-img {
  margin-bottom: 0.15rem;
  position: relative;
}
.big-text h2 {
  font-size: 0.158rem;
  padding-bottom: 0.167rem;
}
.big-text p {
  padding: 0.042rem 0;
  font-size: 0.1rem;
  color: #c5c5c5;
}
.index-radio {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/viceoplay.png)
    no-repeat center center;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -0.15rem;
  margin-left: -0.15rem;
  z-index: 2;
  background-size: cover;
}
.santu h2 {
  padding-bottom: 0.042rem;
  font-size: 0.158rem;
}
.picList {
  overflow: hidden;
}
.picList a {
  display: block;
  padding: 0.042rem 0;
  float: left;
  width: 0.95rem;
  height: 0.733rem;
  margin: auto;
}
.picList a img {
  border: 1px solid #d8d8d8;
  width: 100%;
  height: 100%;
}
.santu p {
  font-size: 0.083rem;
  color: #acacac;
  margin-top: 0.083rem;
}
.index_more {
  font-size: 0.133rem;
  padding: 0.108rem 0;
  color: #1e7dd7;
  text-align: center;
}
</style>