<template>
  <section class="coming_section">
    <div class="coming_content">
      <ul>
        <router-link tag="li" :to="'/moviecomingdetail/' + item.id" v-for="(item,index) in movieComingList" :key="index">
          <span class="time_month">{{item.rMonth}}月</span>
          <p class="time">{{item.rDay}}日</p>
          <div class="coming_img">
            <img
              :src="item.image"
              alt
            />
          </div>
          <div class="coming_detail">
            <h2>{{item.title}}</h2>
            <span>
              <b>{{item.wantedCount}}</b> 人想看 - {{item.type}}
            </span>
            <p>导演:{{item.director }}</p>
          </div>
          <p class="coming_yugao">
            <span>预告片</span>
          </p>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script>
import {movieComingApi} from "@api/movie"
export default {
  name: "Coming",
  data() {
    return {
      movieComingList: []
    };
  },
  async created() {
    let data = await movieComingApi(this.$store.state.city.cityId);
    this.movieComingList = data.moviecomings;
  }
};
</script>

<style>
.time_month{
  position: absolute;
  top: 0;
  left: -0.225rem;
  font-size: .1rem;
}

.coming_section {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0.954rem;
  overflow: auto;
}

.coming_content {
  width: 100%;
  /* background: red; */
  padding: 0 0 0.15rem 0.25rem;
}

.coming_content ul li {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: relative;
}

.coming_content ul li .time {
  position: absolute;
  width: 0.258rem;
  height: 0.158rem;
  font-size: 0.117rem;
  color: #777;
  left: -0.25rem;
  top: 0.125rem;
}

.coming_img {
  width: 0.65rem;
  height: 0.975rem;
}

.coming_img img {
  width: 100%;
  height: 100%;
}

.coming_detail {
  width: 2.175rem;
  height: 1.275rem;
  padding: 0.167rem 0 0 0.083rem;
}

.coming_detail h2 {
  font-size: 0.15rem;
  margin-bottom: 0.083rem;
}

.coming_detail span {
  font-size: 0.117rem;
}

.coming_detail span b {
  font-size: 0.117rem;
  color: #ff8600;
}

.coming_detail p {
  font-size: 0.117rem;
  margin-top: 0.083rem;
}

.coming_yugao {
  display: inline-block;
  min-width: 0.8rem;
  height: 0.275rem;
  line-height: 0.275rem;
  border-radius: 0.125rem;
  text-align: center;
  border: 1px solid #659c0d;
  color: #659c0d;
  position: absolute;
  right: 1.333rem;
  bottom: 0.083rem;
}
</style>