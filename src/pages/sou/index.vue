<template>
  <section class="index_section">
    <div>
      <header class="sou-header">
        <nav class="sou-nav">
          <router-link tag="a" to="/" class="sou-btn"></router-link>
          <input v-model="value" type="text" placeholder="影片/影院/影人，任你搜" />
          <a class="sou-box">
            <span>搜索</span>
          </a>
        </nav>
      </header>
      <div v-if="value.length == 0" class="sou-tao">
        <div class="sou-xx">
          <p>
            <b>42,560</b>
            <span>部影视剧集</span>
            <b>12,462</b>
            <span>位影人</span>
          </p>
        </div>
        <div class="sou-title">
          <b>热门搜索</b>
        </div>
        <div class="serch">
          <a v-for="(item,index) in hotList" :key="index">
            <span>{{item}}</span>
          </a>
        </div>
      </div>
      <div v-if="value.length > 0" class="sou-libiao">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="sou-pic">
              <img :src="item.cover" />
            </div>
            <dl class="sou-td">
              <dt>
                <strong>{{item.titlecn}} ({{item.year}})</strong>
                <span>[{{item.contentType}}]</span>
              </dt>
              <dd class="sou-tip">
                <span>{{item.titleen}}</span>
              </dd>
              <dd>
                <span>{{item.movieType}}, {{item.locationName}}</span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import {throttle} from '@utils/throttle';
import {SoumovieApi,SoumoviehotApi} from '@api/sou';
console.log(throttle);
export default {
  name: "Sou",
  data(){
    return {
      value:"",
      list:[],
      hotList:[]
    }
  },
  watch:{
    value(newVal){

      throttle (async ()=>{
        let data = await SoumovieApi(newVal,this.$store.state.city.cityId);
        // console.log(111);
        this.list = data.suggestions ? data.suggestions:[];
      })

      
    }
  },
  async created(){
    let data = await SoumoviehotApi();
    this.hotList = data.keywords;
    console.log(this.hotList)
  }
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
.sou-header {
  height: 0.44rem;
  background: #1c2635;
  z-index: 200;
  top: 0;
  left: 0;
  position: fixed;
}

.sou-nav {
  padding: 0 0.15rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.sou-btn {
  width: 0.44rem;
  height: 0.44rem;
  position: absolute;
  left: 0;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png)
    no-repeat 0.15rem center;
  background-size: auto 0.15rem;
}

.sou-nav input {
  margin-left: 0.22rem;
  width: 2.104rem;
  height: 0.328rem;
  border-radius: 0.067rem;
  padding: 0 0.246rem 0 0.273rem;
  font-size: 0.133rem;
  color: #757575;
  outline: none;
  border: none;
  background: #fff
    url(http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png)
    no-repeat 0.047rem center;
  background-size: 0.183rem 0.183rem;
}

.sou-box {
  width: 0.45rem;
  height: 0.279rem;
  border: 1px solid #fff;
  text-align: center;
  line-height: 0.263rem;
  display: block;
  color: #fff;
  font-size: 0.142rem;
  margin-left: 0.05rem;
  border-radius: 0.042rem;
}

.sou-xx {
  padding: 0.14rem 0 0.15rem 0.05rem;
  max-height: 0.95rem;
  overflow: hidden;
}

.sou-xx p {
  padding: 0.1rem 0.15rem 0.11rem 0.15rem;
  color: #e3e3e3;
}

.sou-xx p b {
  font-weight: normal;
  font-size: 0.24rem;
}

.sou-xx p span {
  padding-left: 0.035rem;
  font-size: 0.12rem;
}

.sou-tao {
  min-height: 4.167rem;
}

.sou-title {
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  background-color: #f6f6f6;
  color: #999;
  padding: 0.07rem 0.15rem;
}

.sou-title b {
  font-size: 0.1rem;
}

.serch {
  max-height: 0.95rem;
  overflow: hidden;
  padding: 0.055rem 0 0.15rem 0.05rem;
}

.serch a {
  display: inline-block;
  margin: 0.095rem 0.03rem 0.05rem 0.1rem;
  padding: 0.06rem 0.12rem;
  border: 1px solid #b6dcff;
  color: #1e7dd7;
  border-radius: 0.167rem;
}

.serch a span {
  font-size: 0.125rem;
}
.sou-libiao ul {
  margin-left: 0.15rem;
}
.sou-libiao ul li {
  border-bottom: 1px solid #d8d8d8;
  padding: 0.15rem 0;
}
.sou-pic {
  width: 0.35rem;
  height: 0.517rem;
  overflow: hidden;
}
.sou-pic img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
}

.sou-td {
  margin-left: 0.15rem;
}
.sou-td dt strong {
  font-size: 0.167rem;
  padding-right: 0.044rem;
  vertical-align: middle;
}
.sou-td dt span {
  vertical-align: middle;
  font-weight: normal;
  color: #999;
  font-size: 0.108rem;
}
.sou-tip {
  color: #999;
}
.sou-tip span {
  font-size: 0.1rem;
}
.sou-td dd span {
  font-size: 0.1rem;
}
.sou-libiao ul li {
  display: flex;
}
</style>