<template>
  <div>
    <div class="newpic">
      <a>
        <img
          :src="Yutitle.coverImg"
          alt
        />
        <h2>
          <b>{{Yutitle.movieName}}</b>
        </h2>
        <i class="index-radio"></i>
      </a>
    </div>
    <div class="newlist">
      <ul>
        <li class="xiaotu-list" v-for="(item,index) in Yucontent" :key="index">
          <div class="table">
            <div class="table_lists-pic-yu">
              <i class="index-radio"></i>
              <img
                class="img_box-yu"
                :src="item.coverImg"
                alt
              />
            </div>
            <div class="Y-table-text">
              <h2>{{item.movieName}}</h2>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { findyugaocontentApi } from "@api/find";
export default {
  name: "Yu",
  data(){
    return{
      Yutitle:{},
      Yucontent:[]
    }
  },
  computed: {
    ...mapState({
      // Findtrailer: state => state.find.Findtrailer   无用,预告顶部真实在content中
    })
  },
   async created() {
    let data = await findyugaocontentApi();
    this.Yutitle = data.data.trailers.shift(0);
    this.Yucontent = data.data.trailers;

  }
};
</script>

<style>
.index-radio {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/viceoplay.png)
    no-repeat center center;
  width: 0.29rem;
  height: 0.29rem;
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
  z-index: 2;
  background-size: cover;
}

.newpic a {
  display: block;
  height: 1.8rem;
  position: relative;
  overflow: hidden;
}

.newpic a img {
  width: 100%;
}

.newpic h2 {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.12rem 0;
  text-align: center;
}

.newlist ul {
  padding-left: 0.15rem;
}

.newlist ul li {
  padding: 0.15rem 0 0.05rem;
  border-bottom: 1px solid #d8d8d8;
}

.table {
  display: flex;
}

.Y-table-text {
  width: 1.725rem;
  padding-right: 0.15rem;
  padding-left: 0.15rem;
}

.newpic b {
  color: #fff;
  font-size: 0.158rem;
  display: block;
}

.table_lists-pic-yu {
  width: 1.25rem;
  height: .75rem;
  position: relative;
}

.img_box-yu {
  border: 1px solid #ddd;
  width: 100%;
  height: 100%;
}

.Y-table-text h2 {
  font-size: 0.15rem;
}

.Y-table-text p {
  margin-top: 0.117rem;
  font-size: 0.083rem;
  color: #acacac;
}

.newlist ul .xiaotu-list {
  padding-bottom: 0.135rem;
}

.xiaotu-list {
  padding: 0.15rem 0 0.05rem;
  padding-bottom: 0.135rem;
}

.newlist ul {
  padding-left: 0.15rem;
}
</style>