<template>
  <section class="index_section">
    <header>
      <div class="detail_header">
        <div>
          <v-touch
            tag="img"
            @tap="handleback()"
            src="http://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png"
          />
        </div>
        <p>
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/ico_home.png" alt />
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_h_share.png" alt />
        </p>
      </div>
    </header>
    <div class="moviedetail_container" >
      <div class="moviedetail_content">
        <div class="movie_pic">
          <img
            :src="detailList.image"
            alt
          />
        </div>
        <div class="movie_con">
          <h2>{{detailList.titleCn}}</h2>
          <p class="movie_en">{{detailList.titleEn}}</p>
          <p class="movie_type"><b v-for="(item,index) in detailList.type" :key="index">/{{item}}</b></p>
          <p class="movie_time">上映时间:{{time.date}}</p>
          <a>
            <span>我想看</span>
          </a>
          <a>
            <span>我要评分</span>
          </a>
        </div>
      </div>
      <div class="moviedetail_two">
        <p class="moviedetail_jieshao">{{detailList.commonSpecial}}</p>
        <p class="moviedetail_piao">查影讯/购票</p>
      </div>
      <div class="wenzi">
        <p>{{detailList.content}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { movieDetailApi } from "@api/movie";
export default {
  name: "Moviedetail",
  props: ["movieId"],
  data() {
    return {
      detailList: [],
      time:[],
    };
  },
  methods: {
    handleback() {
      this.$router.push("/movie/hot");
    }
  },
  async created() {
    let data = await movieDetailApi(this.movieId);
    this.detailList = data;
    this.time = data.release;
  }
};
</script>

<style>
.moviedetail_content {
  width: 100%;
  height: 1.6rem;
  /* background: red; */
  display: flex;
}
.moviedetail_content .movie_pic {
  width: 1.05rem;
  height: 1.583rem;
  padding: 0.083rem 0 0 0.083rem;
}
.moviedetail_content .movie_pic img {
  width: 100%;
  height: 100%;
}
.movie_con {
  text-align: left;
  padding: 0.167rem 0 0 0.167rem;
}
.movie_con h2 {
  color: #ccc;
  margin-bottom: 0.033rem;
}
.movie_con .movie_en {
  color: #ccc;
  margin-bottom: 0.083rem;
}
.movie_con a {
  display: inline-block;
  width: 0.808rem;
  /* height: .333rem; */
  text-align: center;
  padding: 0.1rem 0;
  border: 1px solid grey;
  margin-right: 0.042rem;
  border-radius: 0.417rem;
}

.movie_time {
  margin-bottom: 0.042rem;
}
.moviedetail_two {
  width: 100%;
  height: 0.983rem;
  /* background: yellow; */
  text-align: center;
}

.moviedetail_jieshao {
  color: #fd8900;
  margin-bottom: 0.25rem;
}

.moviedetail_piao {
  width: 2.825rem;
  height: 0.392rem;
  background: #ff8600;
  color: #fff;
  border: 1px solid #ff8600;
  margin: 0 auto;
  line-height: 0.392rem;
  border-radius: 0.167rem;
}
.wenzi {
  padding: 0 0.125rem;
}
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
  padding-bottom: 0.43rem;
  background-color: #fff;
}

header {
  width: 100%;
  background-color: #1c2635;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.detail_header {
  width: 100%;
  height: 0.442rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail_header p {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail_header div img {
  width: 0.083rem;
  height: 0.167rem;
  margin-left: 0.125rem;
}

.detail_header p img {
  width: 0.25rem;
  height: 0.25rem;
  margin: 0 0.117rem;
}

section {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  height: 100%;
  padding-top: 0.442rem;
}
</style>