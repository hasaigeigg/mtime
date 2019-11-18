<template>
  <div>
    <HeaderFan icon title="评论" />
    <section class="findnewdetailping">
      <div class="findnewdetailping-box">
        <ul>
          <li v-for="(item,index) in content" :key="index">
            <div class="fndp-table">
              <div class="fndp-user">
                <a>
                  <img :src="item.userImage" />
                </a>
              </div>
              <dl class="fndp-text">
                <dt>
                  <time>{{item.date}}</time>
                  <b>{{item.nickname}}</b>
                </dt>
                <dd>
                  <p>{{item.content}}</p>
                </dd>
                <dd>
                  <a class="fndp-hui">
                    <i class="fndp-huifu"></i>
                    <span v-if="!item.replyCount">回复</span>
                    <span v-if="item.replyCount">{{item.replyCount}}</span>
                  </a>
                </dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="footer-ping">
      <p class="footer-ping-td">
        <textarea v-model="Pcontent" placeholder="留下我想说的..."></textarea>
      </p>
      <a :class="BcolorBtn ? 'btn-send btn-color':'btn-send'">
        <span>发送</span>
      </a>
    </div>
  </div>
</template>

<script>
import { findnewdetailpingApi } from "@api/findnewdetailping";
export default {
  name: "findnewdetailping",
  props: ["id"],
  data() {
    return {
      Pcontent: "",
      BcolorBtn: false,
      content: []
    };
  },
  updated() {
    if (this.BcolorBtn == false) {
      if (this.Pcontent.length > 0) {
        this.BcolorBtn = true;
      }
    }
    if (this.Pcontent.length == 0) {
      this.BcolorBtn = false;
    }
  },
  async created() {
    let data = await findnewdetailpingApi(this.id);
    this.content = data;
  }
};
</script>

<style>
.findnewdetailping {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding-top: 0.43rem;
  padding-bottom: 0.446rem;
}
.findnewdetailping-box {
  padding: 0.15rem 0 0.15rem 0.15rem;
}
.footer-ping {
  background: #f6f6f6;
  border-top: 1px solid #979797;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0.04rem 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-ping-td {
  border: 1px solid #bababa;
  padding: 0 0.05rem;
  background: #fff;
  border-radius: 0.025rem;
  display: block;
  flex: 1;
}
.footer-ping-td textarea {
  width: 100%;
  font-size: 0.133rem;
  line-height: 1.3;
  display: block;
  padding-top: 0.096rem;
  padding-bottom: 0.068rem;
  height: 0.333rem;
  border: none;
  outline: none;
}
.btn-send {
  text-align: right;
  margin-right: -0.15rem;
  display: block;
}
.btn-send span {
  display: block;
  padding: 0 0.1rem;
  margin: 0 0.1rem;
  line-height: 0.358rem;
  height: 0.358rem;
  font-size: 0.133rem;
}
.btn-color span {
  background: #1e7dd7;
  color: #fff;
  border-radius: 0.025rem;
}
.findnewdetailping-box ul li {
  padding-top: 0.15rem;
  border-bottom: 1px solid #d8d8d8;
}
.fndp-table {
  width: 100%;
  display: flex;
}
.fndp-user {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.13rem;
  overflow: hidden;
}
.fndp-user a {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  overflow: hidden;
  border-radius: 0.408rem;
}
.fndp-user a img{
    width: 100%;
}
.fndp-text {
  border: 0;
  padding-bottom: 0.15rem;
  padding-right: 0.15rem;
  flex: 1;
}
.fndp-text dt {
  color: #999;
  line-height: 1.8;
  margin-bottom: 0.05rem;
}
.fndp-text dt time {
  float: right;
}
.fndp-text dt b {
  font-weight: normal;
  font-size: 0.108rem;
}
.fndp-text dd p {
  line-height: 1.5;
  font-size: 0.125rem;
}
.fndp-hui {
  width: 0.5rem;
  text-align: left;
  padding-top: 0.125rem;
  color: #777;
  float: right;
}
.fndp-huifu {
  width: 0.2rem;
  height: 0.2rem;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/ico_reply.png)
    no-repeat center center;
  background-size: cover;
  margin-right: .03rem;
  display: inline-block;
}
.fndp-hui span{
    font-size: .108rem;
}
</style>