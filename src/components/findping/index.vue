<template>
  <div>
    <div class="showphoto">
      <!-- 页面加载不出来回来加上图片 -->
      <img class="m_img" src alt />
      <div class="smallpic">
        <img
          :src="Findreview.posterUrl"
          alt
          class="m_img"
        />
      </div>
      <h2>
        <b>{{Findreview.movieName}}</b>
        <span>
          <i class="i-book"></i> {{Findreview.title}}
        </span>
      </h2>
    </div>

    <ul class="reviewList">
      <li v-for="(item,index) in PingContent" :key="index" :data-id="item.id">
        <h2>{{item.title}}</h2>
        <a>
          <i class="usepic">
            <img
              class="m_img"
              :src="item.userImage"
              alt
            />
          </i>
          <span>
            {{item.nickname}}-评分
            <b>
              <strong>{{item.title}}</strong>
            </b>
            <em class="m_score">
              <i>{{item.rating}}</i>
            </em>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { findyingcontentApi } from "@api/find";;
export default {
  name:"Ping",
   data(){
    return{
      PingContent:[]
    }
  },
  computed: {
    ...mapState({
      Findreview: state => state.find.Findreview
    })
  },
  async created() {
    let data = await findyingcontentApi();
    this.PingContent = data;
  },
 
};
</script>

<style>
/*顶部大图*/
.showphoto {
  height: 1.8rem;
  overflow: hidden;
  position: relative;
}

/*公用图片100%标签*/
.m_img {
  width: 100%;
  height: auto;
  display: block;
}

.smallpic {
  width: 0.63rem;
  height: 0.95rem;
  position: absolute;
  left: 0.15rem;
  top: 0.75rem;
  z-index: 2;
}

.showphoto h2 {
  text-align: left;
  padding: 0.125rem 0 0.135rem 0.9rem;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.625rem;
}

.showphoto h2 b {
  color: #fff;
  font-size: 0.175rem;
}

/*书名引号*/
.i-book {
  display: inline-block;
  width: 0.108rem;
  height: 0.1rem;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i_dot_03.png)
    no-repeat;
  background-size: cover;
  margin: -0.04rem 0.03rem 0 0;
}

.showphoto h2 span {
  color: #ddd;
  font-size: 0.125rem;
  display: block;
}

/*评论列表*/
.reviewList {
  padding: 0.15rem;
}

.reviewList li {
  border-bottom: 1px solid #d8d8d8;
  padding: 0.15rem 0.15rem 0.13rem 0;
  margin-right: -0.15rem;
}

.reviewList li:first-child {
  padding-top: 0;
}

.reviewList li h2 {
  padding-bottom: 0.07rem;
  font-size: 0.158rem;
}

.reviewList li a {
  display: block;
  display: flex;
  align-items: center;
}

.reviewList li a .usepic {
  width: 0.21rem;
  height: 0.21rem;
  margin-right: 0.05rem;
}

.reviewList li a i img {
  border: 0;
  border-radius: 0.42rem;
}

.reviewList li a span {
  font-size: 0.117rem;
}

.reviewList b strong {
  color: #333;
}

.m_score {
  margin-left: 0.05rem;
  background: #659d0e;
  width: 0.2rem;
  height: 0.18rem;
  text-align: center;
  line-height: 0.18rem;
  display: inline-block;
  color: #fff;
}
</style>