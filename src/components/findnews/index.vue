<template>
  <div class="findnews">
    <div class="newpic">
      <a :data-id="NewTitle.newsID">
        <img :src="NewTitle.imageUrl" alt />
        <h2>
          <b>{{NewTitle.title}}</b>
        </h2>
      </a>
    </div>
    <div class="newlist">
      <ul>
        <!-- 三图模板 -->
        <li v-for="(item,index) in NewContent" :key="index" :class="item.type != 1? 'xiaotu-list':''">
          <!-- 三图模板 -->
          <div class="santu" v-if="item.type == 1">
            <h2>
              <a>{{item.title}}</a>
            </h2>
            <div class="picList">
              <a href v-for="(child,ndx) in item.images" :key="ndx">
                <img
                  :src="child.url1"
                  alt
                />
              </a>
            </div>

            <p>
              <!-- 后期过滤使用 需要过滤事件计算已过去时间 -->
              <time>{{item.publishTime}}</time>
              <b v-if="item.commentCount != 0" class="newlist-ping">评论 {{item.commentCount}}</b>
            </p>
          </div>
          <!-- 小图模板 -->
           <div class="table" v-if="item.type == 0">
            <div class="table_lists-pic">
              <img
                class="img_box"
                :src="item.image"
                alt
              />
            </div>
            <div class="table-text">
              <h2>{{item.title}}</h2>
              <p>
                <time>13小时前</time>
                <b v-if="item.commentCount != 0" class="newlist-ping">评论 {{item.commentCount}}</b>
              </p>
            </div>
          </div>
          <!-- 小图带video -->
          <div class="table" v-if="item.type == 2">
            <div class="table_lists-pic">
              <i class="index-radio"></i>
              <img
                class="img_box"
                :src="item.image"
                alt
              />
            </div>
            <div class="table-text">
              <h2>{{item.title}}</h2>
              <p>
                <time>15小时前</time>
                <b v-if="item.commentCount != 0" class="newlist-ping">评论 {{item.commentCount}}</b>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
     <div class="index_more">查看更多</div>
  </div>
  
</template>

<script>
import { mapState } from "vuex";
import { findnewcontentApi } from "@api/find";
export default {
  name: "FindNews",
  data() {
    return {
      NewContent: []
    };
  },
  computed: {
    ...mapState({
      NewTitle: state => state.find.Findnew
    })
  },
  async created() {
    let data = await findnewcontentApi();
    console.log(data);
    this.NewContent = data.newsList;
  }
};
</script>

<style>
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

.newpic b {
  color: #fff;
  font-size: 0.158rem;
  display: block;
}

.newlist ul {
  padding-left: 0.15rem;
}

.newlist ul li {
  padding: 0.15rem 0 0.05rem;
  border-bottom: 1px solid #d8d8d8;
}

.santu h2 {
  padding-bottom: 0.042rem;
  font-size: 0.158rem;
}

.picList {
  overflow: hidden;
}

.picList a {
  display: block;
  padding: 0.042rem 0;
  float: left;
  width: 0.95rem;
  height: 0.733rem;
  margin: auto;
}

.picList a img {
  border: 1px solid #d8d8d8;
  width: 100%;
  height: 1.083rem;
}

.santu p {
  font-size: 0.083rem;
  color: #acacac;
  margin-top: 0.025rem;
}

.newlist-ping {
  font-weight: normal;
  font-size: 0.1rem;
  margin-left: 0.375rem;
}

.table {
  display: flex;
}

.table_lists-pic {
  margin-right: 0.15rem;
  width: 0.92rem;
  height: 0.8rem;
  position: relative;
}

.findnews .img_box {
  border: 1px solid #ddd;
  width: 0.75rem;
  height: 0.75rem;
}

.table-text {
  padding-right: 0.15rem;
}

.table-text h2 {
  font-size: 0.15rem;
}

.table-text p {
  margin-top: 0.117rem;
  font-size: 0.083rem;
  color: #acacac;
}

.newlist ul .xiaotu-list {
  padding-bottom: 0.135rem;
}

.index-radio {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/viceoplay.png)
    no-repeat center center;
  width: 0.29rem;
  height: 0.29rem;
  position: absolute;
  right: 0.05rem;
  bottom: 0.05rem;
  margin-top: -0.145rem;
  margin-left: -0.145rem;
  z-index: 2;
  background-size: cover;
}

/*清楚莫名多得right*/
.clearboth {
  margin-right: 0;
}
.index_more {
  font-size: 0.133rem;
  padding: 0.108rem 0;
  color: #1e7dd7;
  text-align: center;
}
</style>