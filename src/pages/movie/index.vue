<template>
  <div class="movie_header">
    <header class="hot_header">
      <v-touch @tap="handleback()" to="div" class="back">
        <span>&lt;</span>
      </v-touch>
      <div class="hot_comming">
        <router-link tag="a" to="/movie/hot" href="javascript:;">
          <span>正在热映</span>
        </router-link>
        <router-link tag="a" to="/movie/coming" href="javascript:;">
          <span>即将上映</span>
        </router-link>
      </div>
      <div></div>
    </header>
    <nav class="movie_nav">
      <router-link tag="div" to="/city" class="movie_nav_left">
        <b>{{this.$store.state.city.n}}</b>
        <i class="nav_city"></i>
      </router-link>
      <router-link tag="p" to="/sou">
        <a href>影片/影院/影人，任你搜</a>
      </router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "movie",
  
  methods: {
    handleback() {
      this.$router.push("/home");
    }
  }
};
</script>

<style>
.movie_header {
  height: 100%;
  width: 100%;
}
.hot_header {
  width: 100%;
  height: 0.442rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1c2635;
  color: #fff;
  position: relative;
  z-index: 10;
}

.hot_header .hot_comming {
  background: #000;
  height: 0.275rem;
  border-radius: .167rem;
}

.hot_header .hot_comming a {
  display: inline-block;
  background: #000;
  color: #1c2635;
  padding: .05rem .225rem;
  border-radius: .167rem;

}

.hot_header .hot_comming .router-link-active {
  background: #1c2635;
  color: #fff;
}

.hot_header .back {
  margin-left: 0.167rem;
}
.hot_header .back span {
  font-size: 0.233rem;
  color: grey;
}

.movie_nav {
  height: 0.512rem;
  line-height: 0.338rem;
  width: 100%;
  background: #f6f6f6;
  border-bottom: 1px solid #d8d8d8;
  padding: 0.083rem 0 0.083rem 0.167rem;
  position: relative;
  z-index: 10;
}

.nav_city {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png)
    no-repeat;
  background-size: cover;
}

.movie_nav_left {
  margin-right: 0.083rem;
  width: 0.458rem;
  float: left;
}

.movie_nav_left b {
  font-weight: normal;
  font-size: 0.15rem;
}

.movie_nav_left i {
  display: inline-block;
  width: 0.083rem;
  height: 0.042rem;
  position: relative;
  top: -0.025rem;
}

.movie_nav p {
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

.movie_nav p a {
  color: #777;
  font-size: 0.133rem;
}
</style>