<template>
  <div style="background-color:#f6f6f6;">
    <section class="index_section">
      <header>
        <div class="detail_header">
          <div>
            <v-touch
              tag="img"
              @tap="handleback()"
              src="http://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png"
            />
          </div>
          <p>
            <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/ico_home.png" alt />
            <img
              src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_h_shopping.png"
              alt
            />
            <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_h_share.png" alt />
          </p>
        </div>
      </header>
      <article class="detail_section">
        <div class="detail-lun-shop">
          <div class="detail_pic" >
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,index) in goods.imageRects" :key="index"><img :src="item" /></mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
        <div class="detail_container">
          <ul>
            <li>
              <div class="title">
                <a href="#">
                  <em class="zy">{{goods.goodsTip}}</em>
                  {{goods.longGoodsName}}
                  <span
                    class="xinpin"
                    style="background-color:#25ACBD"
                  >新品</span>
                </a>
              </div>
              <div class="price">
                <b>
                  <i>￥</i>
                  {{goods.minSalePrice/100}}
                </b>
              </div>
              <p class="huiyuan">
                <span>{{goods.postAgeText}}</span>
                <span class="consignment-time"></span>
              </p>
              <div class="cuxiao">
                <p class="tf">
                  促销
                  <span>优惠券</span>
                  点击查看可用优惠券
                  <i>></i>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="pingjia">
          <span>评价晒单(1人评论)</span>
          <a>100%好评&nbsp;&nbsp;&nbsp;&nbsp;&gt;</a>
        </div>
        <div class="tuwen">
          <span>图文详情</span>
          <span>规格参数</span>
          <span>购买须知</span>
        </div>
        <div class="jieshao">
          <p>{{goods.longName}}</p>
        </div>
        <div class="zhuyi">
          <b>随机发 拆盒不退不换</b>
        </div>
      </article>

      <div class="shop_footer">
        <footer>
          <div class="footer">
            <span>收藏</span>
            <span>咨询</span>
            <router-link tag="a" :to="'/cart/' + this.goodsId" href="#" style="background-color: #ff8600;">加入购物车</router-link>
            <a href="#" style="background-color: #f23030;">立即购买</a>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "mint-ui/lib/style.css";
import { shoppingdetailApi } from "@api/shopping";
export default {
  name: "Shopdetail",
  props: ["goodsId"],
  data() {
    return {
      goods: ""
    };
  },
  methods: {
    handleback() {
      this.$router.push("/shopping");
    }
  },
  async created() {
    let data = await shoppingdetailApi(this.goodsId);
    this.goods = data.data.productDetail.goods;
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
  padding-bottom: 0.43rem;
  background-color: #fff;
}

header {
  width: 100%;
  background-color: #1c2635;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.detail_header {
  width: 100%;
  height: 0.442rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail_header p {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail_header div img {
  width: 0.083rem;
  height: 0.167rem;
  margin-left: 0.125rem;
}

.detail_header p img {
  width: 0.25rem;
  height: 0.25rem;
  margin: 0 0.117rem;
}

section {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  height: 100%;
  /* padding-top: 0.442rem;
  padding-bottom: 0.442rem; */
}

.detail_section .detail_pic {
  width: 2.6rem;
  height: 2.6rem;
}

.detail_section .detail_pic img {
  width: 2.6rem;
  height: 2.6rem;
  margin: 0.083rem auto 0;
}

.detail_container {
  margin-bottom: 0.12rem;
  background-color: #fff;
}

.detail_container ul li {
  font-size: 0.133rem;
  padding: 0 0.167rem;
}

.detail_container ul li .title {
  margin-top: 0.083rem;
  width: 2.925rem;
  height: 0.367rem;
}

.detail_container ul li .title a {
  font-size: 16px;
  font-weight: bold;
  margin-top: 0.083rem;
  color: #333;
  display: block;
}

.detail_container ul li .title .xinpin {
  color: #fff;
  font-size: 0.09rem;
  padding: 0.01rem 0.02rem;
  vertical-align: middle;
  margin-left: 0.1rem;
  font-weight: normal;
  line-height: 0.12rem;
  display: inline-block;
}

.detail_container ul li .price {
  padding: 0.06rem 0 0 0;
}

.detail_container ul li .price b {
  font-size: 0.2rem;
  color: #ff8600;
  padding: 0 0.08rem 0 0;
  font-weight: normal;
  display: inline-block;
  vertical-align: top;
}

.detail_container ul li .huiyuan {
  padding-top: 0.08rem;
  border-bottom: 1px solid #e9e9e9;
  width: 100%;
  padding-bottom: 0.08rem;
}

.detail_container ul li .huiyuan span {
  font-size: 0.11rem;
  color: #f97a3e !important;
}

.detail_container ul li .cuxiao {
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  height: 0.367rem;
  width: 100%;
  line-height: 0.367rem;
}

.cuxiao .tf span {
  font-size: 0.1rem;
  color: #ff8600;
  border: 1px solid #ff8600;
  margin-right: 0.05rem;
  padding: 0 0.02rem;
}

.cuxiao .tf i {
  margin-left: 0.5rem;
  font-size: 0.183rem;
}

.zy {
  font-size: 0.08rem;
  color: #ff8600;
  border: 1px solid #ff8600;
  border-radius: 0.02rem;
  display: inline-block;
  vertical-align: middle;
  padding: 0.01rem;
  line-height: 0.1rem;
  margin-right: 0.04rem;
  margin-top: -2px;
  font-style: normal;
}

.pingjia {
  font-size: 0.133rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.167rem;
  background-color: #fff;
}

.tuwen {
  font-size: 0.133rem;
  width: 100%;
  height: 0.392rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  margin-top: 0.12rem;
}

.jieshao {
  width: 100%;
  height: 0.683rem;
  font-size: 0.13rem;
  background-color: #fff;
  padding: 0.083rem 0.167rem;
}

.zhuyi b {
  display: inline-block;
  vertical-align: middle;
  line-height: 0.2rem;
  padding: 0 0.05rem;
  background: #333;
  color: #fff;
  font-size: 0.133rem;
}
.m_img img {
  width: 100%;
  height: 4.267rem;
}
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 0.448rem;
  border-top: 0.008rem solid #eee;
  box-sizing: border-box;
  background: #fff;
}
.footer {
  height: 0.448rem;
  font-size: 0.133rem;
  line-height: 0.448rem;
}
.footer a {
  width: 1.092rem;
  height: 100%;
  display: inline-block;
  text-align: center;
  color: #fff;
}
.footer span {
  margin-left: 0.125rem;
}
.footer span:nth-of-type(2) {
  margin-right: 0.15rem;
}
.detail-lun-shop{
  width:2.6rem;
  overflow: hidden;
  height: 2.6rem;
  margin: 0 auto;
}
</style>