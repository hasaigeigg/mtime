<template>
  <div>
    <section class="homehotnew-section">
      <div class="homehot-box">
        <h1 class="homehot-title">{{content.title}}</h1>
        <p class="homehot-zuozhe">
          <span class="homehot-from">
            <img
              src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F06%2F05%2F171025.60475309.jpg&width=100&height=100&clipType=2"
              alt
            />
            <span>时光快讯</span>
          </span>
          <span class="homehot-dian">·</span>
          <span class="homehot-name">{{this.zuozhe}}</span>
          <time>{{this.time | toAllTime()}}</time>
        </p>
        <div class="homehot-content">
          <div>
            <span class="homehot-title-img">
              <img
                :src="content.img"
              />
            </span>
            <br />
            <br />
          </div>
          <div>
            <b>时光网讯</b>
            &nbsp;导演
            <a>吴宇森</a>
            日前在夏威夷国际电影节上透露，女星
            <a>露皮塔·尼永奥</a>
            已经退出美版
            <a>《喋血双雄》</a>

            ，但这个项目仍在运作中。剧组正在继续物色主演，仍是一位女性。
          </div>
        </div>
      </div>
      <TabBar />
    </section>
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar";
import {homehotnewApi} from '@api/homehotnew'
export default {
  name: "HomeHotNew",
  props:["zuozhe","time","id"],
  components: {
    TabBar
  },
  data() {
    return {
      content:[],
    }
  },
  async created() {
    let data = await homehotnewApi(this.id);
    this.content = data.data.email;
    console.log(this.content,111);
    console.log(this.zuozhe,this.id,this.time);
  },
};
</script>

<style>
.homehotnew-section{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
}
.homehot-box {
  padding: 0.125rem;
  box-shadow: 0 0.017rem 0.083rem rgba(0, 0, 0, 0.1);
  background: #fff;
}
.homehot-title {
  font-size: 0.167rem;
  color: #1d2736;
  padding-bottom: 0.125rem;
  border-bottom: 1px solid rgba(48, 58, 71, 0.06);
  font-weight: 700;
}
.homehot-zuozhe {
  font-size: 0.1rem;
  color: #4e5e73;
  margin-bottom: 0.125rem;
  display: flex;
  align-items: center;
}
.homehot-from {
  margin-right: 0.042rem;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.homehot-from img {
  vertical-align: middle;
  width: 0.242rem;
  height: 0.242rem;
  margin-right: 0.042rem;
  border-radius: 50%;
  overflow: hidden;
}
.homehot-dian {
  color: #8798af;
}

.homehot-zuozhe time,
.homehot-name {
  color: #8798af;
  margin-left: 0.042rem;
  font-size: 0.092rem;
}
.homehot-content {
  color: #333;
}
.homehot-content div {
  font-size: 0.117rem;
  margin: 0.083rem 0 0.167rem;
  line-height: 0.208rem;
  text-align: justify;
}
.homehot-title-img img {
  width: 100%;
  vertical-align: middle;
}
.homehot-content b {
  font-weight: 700;
}
.homehot-content div a {
  color: #20a0da;
  text-decoration: underline;
}
</style>