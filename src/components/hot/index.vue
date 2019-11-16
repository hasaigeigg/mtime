<template>
  <section class="hot_section">
    <div class="hot_content">
      <ul>
        <router-link tag="li" :to="'/moviedetail/'+item.movieId" v-for="(item,index) in movieList" :key="index">
          <div class="hot_img">
            <img
              :src="item.img"
              alt
            />
          </div>
          <div class="hot_detail">
            <b>{{item.t}}</b>
            <em v-if="item.r != -1" class="m_score">
              <i>{{item.r}}</i>
            </em>
            <p class="movie_tip">
              <span>{{item.commonSpecial}}</span>
              <i class="hot_pic"></i>
            </p>
            <div class="btns">
              <b class="i_block">{{item.NearestCinemaCount}}家影院上映{{item.NearestShowtimeCount}}场</b>
              <span>{{item.isTicket?'购票':'查影讯'}}</span>
            </div>
          </div>
        </router-link >
      </ul>
    </div>
  </section>
</template>
<script>
import { movieHotApi } from "@api/movie";
export default {
  name: "Hot",
  data() {
    return {
      movieList: []
    };
  },
  async created() {
    let data = await movieHotApi(this.$store.state.city.cityId);
    this.movieList = data.ms;
  }
};
</script>

<style>
.hot_section {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0.954rem;
  overflow: auto;
}

.hot_content {
  width: 100%;
  padding: 0 0 0.15rem 0.15rem;
}

.hot_content ul li {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.hot_img {
  width: 0.65rem;
  height: 0.975rem;
}

.hot_img img {
  width: 100%;
  height: 100%;
}

.hot_detail {
  width: 2.175rem;
  height: 1.275rem;
  padding-top: 0.167rem;
}

.m_score {
  background: #659d0e;
  width: .2rem;
  height: .183rem;
  color: #fff;
  border-radius: 0;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  line-height: .183rem;
  text-align: center;
  margin-left: .05rem;
}

.hot_detail b {
  font-size: 0.167rem;
  vertical-align: middle;
}

.movie_tip {
  color: #659d0e;
}

/* .movie_tip .hot_pic {
  display: inline-block;
  width: .108rem;
  height: .083rem;
  background: url(//static1.mtime.cn/html5/20191022151144/images/2014/i_dot_01.png)
    no-repeat 0 0;
  background-size: cover;
  position: absolute;
} */

.movie_tip span {
  width:1.9rem;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}



.btns {
  margin-top: 0.208rem;
  position: relative;
}

.btns b {
  font-size: 0.1rem;
  color: #999;
  font-weight: normal;
}

.btns span {
  position: absolute;
  display: block;
  width: 0.75rem;
  height: 0.283rem;
  right: 0.167rem;
  bottom: -0.083rem;
  text-align: center;
  line-height: 0.283rem;
  background: #ff8600;
  color: #fff;
  border: 1px solid #ff8600;
  border-radius: 0.167rem;
}
</style>