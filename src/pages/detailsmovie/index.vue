<template>
  <section class="index_section">
    <div>
      <HeaderFan icon tubiao="&#xe61f;" />
      <!-- 详情页头部显示 -->
      <div class="filmtitle">
        <ul>
          <li class="detail-td">
            <h2>{{Movname}}</h2>
            <p class="detail-td-flim">
              <i v-if="Movtitle.hasCardPay" class="i_cine_01"></i>
              <i v-if="Movtitle.hasFeatureDolby" class="i_cine_02"></i>
              <i v-if="Movtitle.hasIMAX" class="i_cine_04"></i>
              <i v-if="Movtitle.has3D" class="i_cine_05"></i>
            </p>
          </li>
          <li>
            <a>
              <i class="i-tel"></i>
            </a>
          </li>
          <li>
            <a>
              <i class="i-address"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="hotmovie">
        <div class="scrollpic">
          <BS-scroll ref="scroll">
          <ul ref="Xscroll">
            <!-- class="curr" 点击哪个哪个加上这个属性 -->
            <v-touch
              tag="li"
              @tap="handleTaoMVL(index)"
              v-for="(item,index) in MovieXq"
              :key="index"
              :class="Index == index ? 'XcrollL curr':'XcrollL'"
              
            >
              <a>
                <b>
                  <img :src="item.img" alt class="detail-img" />
                </b>
              </a>
              <p>
                <span>{{item.title}}</span>
              </p>
              <em class="m_score" v-if="(item.ratingFinal != -1)">
                <i>{{item.ratingFinal}}</i>
              </em>
            </v-touch>
          </ul>
          </BS-scroll>
        </div>
      </div>
      <div class="detail-title">
        <a>
          <h2>{{MovieXq[Index].title}}</h2>
          <p>
            <b>
              <a v-if="MovieXq[Index].length">{{MovieXq[Index].length}}-</a>
              {{MovieXq[Index].type}}
            </b>
          </p>
          <span class="detail-i_tnext"></span>
        </a>
      </div>
      <div class="detail-box-qie">
        <div class="detail-data-box">
          <ul>
            <v-touch tag="li" v-for="(item,index) in Day" :key="index" :class="TimeIndex == index ? 'on':''" @tap="handleTimeDay(index)">
              <a>
                <span>{{item}}({{MVLDay | toDay(index)}})</span>
              </a>
            </v-touch>
           
          </ul>
        </div>
      </div>
      <div class="datail-showtimes">
        <ul>
          <li v-for="(item,index) in MVLshowtime" :key="index">
            <div class="mstime">
              <time>{{item.startTime | toTime()}} </time>
              <p>
                <b>{{item.showDay | toTime()}}散场</b>
              </p>
            </div>
            <div class="mstype">
              <strong>{{item.versionDesc}} / {{item.language}}</strong>
              <p>
                <b>{{item.hall}}</b>
              </p>
            </div>
            <div class="msprice">
              <strong>￥{{item.price}}</strong>
            </div>
            <div class="msgo">
              <a>
                <span>购票</span>
              </a>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { detailsmovieApi } from "@api/ticket";
export default {
  name: "Detailsmovie",
  props: ["id"],
  data() {
    return {
      MovieXq: [],
      Movname: "",
      Movtitle: [],
      Index: 0,
      MVLtitle: "",
      MVLshowtime:[],
      MVLYtime:"",
      MVLDay: new Date(),
      Day:["今天","明天","后天"],
      TimeIndex:0
    };
  },
  async created() {
    let data = await detailsmovieApi(this.id);
    this.Movname = data.data.cinema.name;
    this.Movtitle = data.data.cinema.feature;
    this.MovieXq = data.data.movies;
    this.MVLtitle = this.MovieXq.title;
    this.MVLshowtime = data.data.showtimes[0].list;
  },
  methods: {
    handleTaoMVL(index) {
      this.Index = index;
      let t = this.$refs.Xscroll.querySelectorAll(".XcrollL")[index].offsetLeft;
      this.$refs.scroll.handleScrollToX(-t);
    },
    handleTimeDay(index){
      this.TimeIndex = index;
    }
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
.filmtitle {
  padding: 0.15rem 0.05rem 0.115rem 0.15rem;
}

.filmtitle .detail-td {
  padding-right: 0.1rem;
  border: none;
  padding-left: 0;
  flex: 1;
}

.filmtitle .detail-td h2 {
  font-size: 0.133rem;
}

.detail-td-flim {
  padding-top: 0.1rem;
  display: flex;
}

.detail-td-flim i {
  width: 0.18rem;
  height: 0.18rem;
  margin-right: 0.05rem;
  margin-bottom: 0.02rem;
  display: block;
}

.detail-td-flim .i_cine_01 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i_cine_01.png)
    no-repeat;
  background-size: cover;
}

.detail-td-flim .i_cine_05 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/is_cine_05.png)
    no-repeat;
  background-size: cover;
}

.detail-td-flim .i_cine_02 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/is_cine_02.png)
    no-repeat;
  background-size: cover;
}

.detail-td-flim .i_cine_04 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/is_cine_04.png)
    no-repeat;
  background-size: cover;
}
.filmtitle ul {
  display: flex;
  align-items: center;
}

.filmtitle li {
  border-left: 1px solid #d8d8d8;
  padding: 0 0.1rem;
}

.i-tel {
  width: 0.17rem;
  height: 0.22rem;
  display: block;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i_tel_01.png)
    no-repeat;
  background-size: cover;
}

.i-address {
  width: 0.17rem;
  height: 0.22rem;
  display: block;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i_address_01.png)
    no-repeat;
  background-size: cover;
}

.hotmovie {
  background: #828282;
  height: 1.5rem;
  overflow: hidden;
  padding-bottom: 0.083rem;
}

.scrollpic {
  padding-top: 0.15rem;
  overflow-x: auto;
}

.scrollpic ul {
  position: relative;
  display: flex;
  left: 0.15rem;
  height: 1.5rem;
  left: 1.113rem;
}

.scrollpic ul li {
  text-align: center;
  margin-left: 0.15rem;
  transition: 0.6 all;
  width: 0.75rem;
  position: relative;
}

.scrollpic ul li a {
  width: 0.75rem;
  display: block;
}

.scrollpic ul li a b {
  display: block;
  width: 0.75rem;
  height: 1.05rem;
  overflow: hidden;
  position: relative;
}

.detail-img {
  width: 100%;
  height: auto;
  display: block;
}

.scrollpic p {
  color: #fff;
  width: 0.7rem;
  height: 0.19rem;
  margin-top: 0.05rem;
    white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
}

.scrollpic p span {
  color: #fff;
  font-size: 0.1rem;
  line-height: 1.2;

}

.m_score {
  background: #659d0e;
  width: 0.2rem;
  height: 0.18rem;
  color: #fff;
  line-height: 0.18rem;
  text-align: center;
  position: absolute;
  right: 0.02rem;
  top: 0.02rem;
}

/*选中的电影加一个curr取消span*/
.scrollpic ul .curr p {
  text-indent: -9999px;
}

.detail-title {
  position: relative;
}

.detail-title a {
  padding: 0.13rem 0.15rem 0.125rem 0;
  text-align: center;
}

.detail-title a h2 {
  font-size: 0.15rem;
}

.detail-title p {
  margin-top: 0.05rem;
}

.detail-title p b {
  font-weight: normal;
  color: #777;
  font-size: 0.117rem;
}

.detail-i_tnext {
  width: 0.14rem;
  height: 0.08rem;
  position: absolute;
  top: 50%;
  margin-top: -0.04rem;
  display: block;
  transform: rotate(-90deg);
  background: #fff
    url(https://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png)
    no-repeat center center;
  background-size: auto 0.1rem;
  right: 0.15rem;
}

.detail-data-box {
  background: #f6f6f6;
  overflow-x: auto;
}

.detail-data-box ul {
  min-width: 3.75rem;
  height: 0.583rem;
  overflow: hidden;
  left: 0;
  display: flex;
  position: relative;
}

.detail-data-box ul li {
  width: 1.25rem;
  overflow: hidden;
  font-size: 0.15rem;
}

.detail-data-box .on a {
  color: #1e7dd7;
  font-weight: 800;
}

.detail-data-box li a {
  padding: 0.145rem 0 0.15rem 0;
  display: block;
  background: #f6f6f6;
  text-align: center;
  border-bottom: 1px solid #dfdfdf;
  position: relative;
}

.detail-box-qie {
  overflow: hidden;
  height: 0.5rem;
}

.detail-data-box .on::after {
  content: "";
  /* display: none; */
  position: absolute;
  width: 100%;
  height: 0.02rem;
  overflow: hidden;
  background: #1e7dd7;
  bottom: 0.083rem;
}

.datail-showtimes ul {
  padding-left: 0.15rem;
}

.datail-showtimes ul li {
  padding: 0.13rem 0;
  margin-left: 0.15rem;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
}

.datail-showtimes .mstime {
  max-width: 0.558rem;
}

.datail-showtimes .mstime time {
  font-size: 0.183rem;
  font-weight: bold;
}

.datail-showtimes .mstime p {
  margin-top: 0.05rem;
}

.datail-showtimes .mstime p b {
  color: #777;
  font-weight: normal;
  font-size: 0.1rem;
}

.datail-showtimes .mstype strong {
  font-weight: normal;
}

.datail-showtimes .mstype {
  font-size: 0.117rem;
  flex: 1;
}

.datail-showtimes .mstype p {
  margin-top: 0.05rem;
}

.datail-showtimes .mstype p b {
  font-weight: normal;
  color: #333;
}

.datail-showtimes .msprice {
  width: 0.75rem;
  font-weight: bold;
}

.datail-showtimes .msprice strong {
  font-size: 0.133rem;
  color: #ff8600;
  font-weight: bold;
}

.datail-showtimes .msgo {
  width: 0.7rem;
  margin-right: 0.15rem;
  background: #ff8600;
  border: 1px solid #ff8600;
  min-width: 0.75rem;
  border-radius: 0.15rem;
}

.datail-showtimes .msgo a {
  display: block;
  padding: 0.065rem 0;
}

.datail-showtimes .msgo span {
  color: #fff;
  font-size: 0.133rem;
}
</style>