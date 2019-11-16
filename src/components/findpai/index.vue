<template>
  <div>
    <div class="newpic">
      <a :data-id="Findtoplist.id">
        <img
          :src="Findtoplist.imageUrl"
          alt
        />
        <h2>
          <b>{{Findtoplist.title}}</b>
        </h2>
      </a>
    </div>
    <div class="toplist">
      <div class="topmeu">
        <ul>
          <li>
            <i class="top1"></i>
            <p class="blue">时光Top100</p>
          </li>
          <li>
            <i class="top2"></i>
            <p class="danlan">华语Top100</p>
          </li>
          <li>
            <i class="top3"></i>
            <p class="yellow">全球票房榜</p>
          </li>
        </ul>
      </div>
    </div>
    <ul class="topnews">
      <li v-for="(item,index) in Paicontent" :key="index" :data-id="item.id">
        <a>
          <div class="top-text">
            <h2>{{item.topListNameCn}}</h2>
            <p>{{item.summary}}</p>
          </div>
          <i class="top-i-tnext"></i>
        </a>
      </li>
    </ul>
     <v-touch tag="div" @tap="handleMorePai()" class="index_more">查看更多</v-touch>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { findpaicontentApi } from "@api/find";

export default {
  name: "Yu",
  data(){
    return{
      Paicontent:[],
      Number:1
    }
  },
  computed: {
    ...mapState({
      Findtoplist: state => state.find.Findtoplist
    })
  },
  async created() {
    let data = await findpaicontentApi();
    this.Paicontent = data.topLists;
  },
  methods: {
    async handleMorePai(){
      ++this.Number;
      let content =  await findpaicontentApi(this.Number);
      for(var i=0; i<content.topLists.length;i++){
        this.Paicontent.push(content.topLists[i]);
      }
    }
  },
};
</script>

<style>
/*toplist*/
.topmeu ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.topmeu ul li {
  flex: 1;
}

.topmeu ul li p {
  font-size: 0.1rem;
  text-align: center;
  margin-top: 0.14rem;
}

.top1 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/top01.png)
    no-repeat;
  background-size: cover;
}

.top2 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/top02.png)
    no-repeat;
  background-size: cover;
}

.top3 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/top03.png)
    no-repeat;
  background-size: cover;
}

.top1,
.top2,
.top3 {
  display: block;
  margin: auto;
  width: 0.492rem;
  height: 0.492rem;
  border-radius: 0.492rem;
}

.blue {
  color: #1498c9;
}

.danlan {
  color: #3bc7c2;
}

.yellow {
  color: yellow;
}

/*topnews*/
.topnews {
  border-top: 1px solid #d8d8d8;
  margin-top: 0.21rem;
}

.topnews li {
  padding-left: 0.15rem;
}

.topnews li a {
  display: block;
  text-align: left;
  padding: 0.17rem 0;
  position: relative;
  border-bottom: 1px solid #d8d8d8;
}

.top-text h2 {
  margin-right: 0.3rem;
  font-size: 0.133rem;
  line-height: 1.4;
}

.top-text p {
  margin-top: 0.065rem;
  padding-right: 0.3rem;
  color: #777;
  font-size: 0.117rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*箭头*/
.top-i-tnext {
  width: 0.14rem;
  height: 0.08rem;
  position: absolute;
  top: 50%;
  transform: rotate(-90deg);
  margin-top: -0.04rem;
  right: 0.1rem;
  display: block;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png)
    no-repeat center center;
  background-size: auto 0.08rem;
}

.newpic a img{
  width: 100%;
  height: 100%;
}
.index_more {
  font-size: 0.133rem;
  padding: 0.108rem 0;
  color: #1e7dd7;
  text-align: center;
}
</style>