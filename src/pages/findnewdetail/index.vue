<template>
  <div>
    <HeaderFan icon title=" " tubiao="&#xe61f;" />

    <section class="findnewdetail-section">
      <div class="findnewdetail-box">
        <div class="toptitle">
          <h2>{{content.title}}</h2>
          <p>
            <span>
              <a v-if="content.commentCount">评论{{content.commentCount}}</a>
              <a>相关电影/影人</a>
            </span>
            <time>{{content.time}}</time>
          </p>
        </div>
        <div v-html="content.content" class="text-mit"></div>
        <div class="newdetail-zuozhe" v-if="content.editor">
          <p class>(编辑：{{content.editor}})</p>
        </div>
        <div class="findnewdetail-ping">
          <router-link tag="div" :to="'/findnewdetailping/'+content.id" class="new-ping-num">
            <i class="newdetail-xinxi"></i>
            <b>
              <span>{{content.commentCount}}</span>
            </b>
          </router-link>
          <div class="new-about">
            <span>相关电影/影人</span>
          </div>
        </div>
      </div>
      <TabBar />
    </section>
  </div>
</template>

<script>
import TabBar from '@common/components/tabBar'
import { findnewdetailApi } from "@api/findnew";
export default {
  name: "FindNewDetail",
  props: ["id"],
  components:{
    TabBar
  },
  data() {
    return {
      content: []
    };
  },
  async created() {
    let data = await findnewdetailApi(this.id);
    this.content = data.data;
    console.log(this.content);
  }
};
</script>

<style>
.findnewdetail-section {
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
.findnewdetail-box {
  padding: 0.125rem;
  box-shadow: 0 0.017rem 0.083rem rgba(0, 0, 0, 0.1);
  background: #fff;
}
.toptitle {
  padding-bottom: 0.15rem;
}
.toptitle h2 {
  font-size: 0.217rem;
  line-height: 1.5;
  font-weight: normal;
}
.toptitle p {
  margin-top: 0.15rem;
  font-size: 0.1rem;
}
.toptitle p span {
  float: right;
}
.toptitle p time {
  color: #999;
}
.toptitle p span a {
  color: #1e7dd7;
  margin-left: 0.117rem;
}
.text-mit {
  font-size: 0.167rem;
  line-height: 1.6;
  position: relative;
  z-index: 0;
}
.text-mit div {
  margin-top: 0.167rem;
}
.newdetail-zuozhe {
  font-size: 0.133rem;
  padding-top: 0.083rem;
}
.text-mit img {
  width: 100%;
}
.findnewdetail-ping {
  margin: 0.1rem -0.15rem -0.15rem;
  border: 1px solid #d8d8d8;
  height: 0.5rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 1px -1px 3px rgba(51, 51, 51, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.new-ping-num {
  position: relative;
  width: 0.4rem;
  height: 0.4rem;
}
.newdetail-xinxi {
  width: 0.2rem;
  height: 0.2rem;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/ico_reply.png)
    no-repeat center center;
  background-size: cover;
  position: absolute;
  margin-top: 0.08rem;
  margin-left: 0.08rem;
}
.new-ping-num b {
  font-weight: normal;
  background: red;
  color: #fff;
  position: absolute;
  text-align: center;
  min-width: 0.14rem;
  line-height: 0.14rem;
  height: 0.14rem;
  border-radius: 0.283rem;
  left: 0.183rem;
  top: 0.042rem;
}
.new-ping-num span {
  font-size: 0.1rem;
  line-height: 0.14rem;
}
.findnewdetail-ping .new-about {
  width: 1.183rem;
  height: 0.342rem;
  margin-right: 0.15rem;
  text-align: center;
  line-height: 0.342rem;
  border: 1px solid #979797;
  border-radius: 1.183rem;
}
.findnewdetail-ping .new-about span{
  color: #777;
  font-size: .15rem;
}
</style>