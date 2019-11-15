<template>
  <div style="background-color:#f6f6f6;">
    <section class="index_section">
    <article class="shopping_search">
      <div class="shopping_search-1">
        <router-link tag="input" to="/shopsou" type="text" class="shopping_input" placeholder="搜索正版电影周边" /></router-link>
        <a href="#" class="shopping_car"></a>
      </div>
    </article>
    <article class="shopping_lunbo">
      <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F09%2F19%2F104138.65713207.jpg" alt />
    </article>
    <nav class="shopping_nav">
      <ul>
        <li v-for="(item,index) in navigatorIcon" :key="index">
          <router-link tag="a" to="/shopmowan">
            <img :src="item.image" />
            <p>{{item.iconTitle}}</p>
          </router-link>
        </li>
      </ul>
    </nav>
    <article class="shopping_zhuanqu">
      <div class="shopping_zhuanqu01">
        <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F08%2F19%2F141732.33138431.jpg&width=375&height=450&clipType=4" alt />
      </div>
      <div class="shopping_zhuanqu02">
        <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174427.96016382.jpg&width=374&height=225&clipType=4" alt />
      </div>
      <div class="shopping_zhuanqu03">
        <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F09%2F19%2F104402.67521002.jpg&width=374&height=224&clipType=4" alt />
      </div>
      <div class="shopping_zhuanqu04">
        <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F03%2F174012.80503273.jpg&width=750&height=223&clipType=4" alt />
      </div>
    </article>
    <article class="shopping_products">
      <div class="caption">
        <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F08%2F01%2F155611.53476727.jpg" alt />
        <ul>
          <li>
            <img
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg"
              alt
            />
          </li>
          <li>
            <img
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg"
              alt
            />
          </li>
          <li>
            <img
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg"
              alt
            />
          </li>
          <li>
            <img
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F20%2F145740.56878791.jpg"
              alt
            />
          </li>
        </ul>
      </div>
      <div class="mall_actul">
        <ul class="table">
          <li class="td">
            <div class="acttitle">
              <h4>Justice League</h4>
              <h3>正义联盟</h3>
            </div>
            <dl class="actdd">
              <dd>
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg"
                  class="m_img"
                />
                <h3>正义联盟迷你人偶套装正义联盟迷你人偶套装</h3>
                <p>
                  ￥
                  <strong>598</strong>
                </p>
              </dd>
              <dd>
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg"
                  class="m_img"
                />
                <h3>正义联盟迷你人偶套装正义联盟迷你人偶套装</h3>
                <p>
                  ￥
                  <strong>598</strong>
                </p>
              </dd>
              <dd>
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg"
                  class="m_img"
                />
                <h3>正义联盟迷你人偶套装正义联盟迷你人偶套装</h3>
                <p>
                  ￥
                  <strong>598</strong>
                </p>
              </dd>
              <dd>
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg"
                  class="m_img"
                />
                <h3>正义联盟迷你人偶套装正义联盟迷你人偶套装</h3>
                <p>
                  ￥
                  <strong>598</strong>
                </p>
              </dd>
              <dd>
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg"
                  class="m_img"
                />
                <h3>正义联盟迷你人偶套装正义联盟迷你人偶套装</h3>
                <p>
                  ￥
                  <strong>598</strong>
                </p>
              </dd>
              <dd>
                <img
                  src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F07%2F27%2F143439.62420403_600X600X1.jpg"
                  class="m_img"
                />
                <h3>正义联盟迷你人偶套装正义联盟迷你人偶套装</h3>
                <p>
                  ￥
                  <strong>598</strong>
                </p>
              </dd>
            </dl>
            <!--list-->
            <div class="actmore">
              <a>更多商品&gt;</a>
            </div>
          </li>
        </ul>
      </div>
    </article>
    <article class="shopping_type">
      <div class="typetit table">
        <h2 style="color:#FFB90F;">
          <i style="background:#FFB90F;"></i>玩具模型
        </h2>
        <div class="td tr">
          <a>
            更多
            <i class="i_tnext">&gt;</i>
          </a>
        </div>
      </div>
      <dl>
        <dt>
          <a>
            <img
              class="m_img"
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F10%2F14%2F100954.66520415.jpg"
              style="display: block;"
            />
          </a>
        </dt>
        <dd>
          <ul class="table1">
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F165749.26122400_600X600X1.jpg"
                style="display: block;"
              />
              <h3>变形金刚1:32合金小车</h3>
              <p>
                ￥
                <strong>79</strong>
              </p>
            </li>
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F172351.82032772_600X600X1.jpg"
                style="display: block;"
              />
              <h3>变形金刚1:24合金小车</h3>
              <p>
                ￥
                <strong>165</strong>
              </p>
            </li>
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F24%2F184822.40485767_600X600X1.jpg"
                style="display: block;"
              />
              <h3>孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具</h3>
              <p>
                ￥
                <strong>129</strong>
              </p>
            </li>
          </ul>
        </dd>
      </dl>
    </article>
    <article class="shopping_type">
      <div class="typetit table">
        <h2 style="color:#e16364;">
          <i style="background:#e16364;"></i>数码配件
        </h2>
        <div class="td tr">
          <a>
            更多
            <i class="i_tnext">&gt;</i>
          </a>
        </div>
      </div>
      <dl>
        <dt>
          <a>
            <img
              class="m_img"
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F04%2F26%2F111115.12315065.jpg"
              style="display: block;"
            />
          </a>
        </dt>
        <dd>
          <ul class="table1">
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F165749.26122400_600X600X1.jpg"
                style="display: block;"
              />
              <h3>变形金刚1:32合金小车</h3>
              <p>
                ￥
                <strong>79</strong>
              </p>
            </li>
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F172351.82032772_600X600X1.jpg"
                style="display: block;"
              />
              <h3>变形金刚1:24合金小车</h3>
              <p>
                ￥
                <strong>165</strong>
              </p>
            </li>
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F24%2F184822.40485767_600X600X1.jpg"
                style="display: block;"
              />
              <h3>孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具</h3>
              <p>
                ￥
                <strong>129</strong>
              </p>
            </li>
          </ul>
        </dd>
      </dl>
    </article>
    <article class="shopping_type">
      <div class="typetit table">
        <h2 style="color:#e16364;">
          <i style="background:#e16364;"></i>服饰配件
        </h2>
        <div class="td tr">
          <a>
            更多
            <i class="i_tnext">&gt;</i>
          </a>
        </div>
      </div>
      <dl>
        <dt>
          <a>
            <img
              class="m_img"
              src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F10%2F14%2F095358.64092658.jpg"
              style="display: block;"
            />
          </a>
        </dt>
        <dd>
          <ul class="table1">
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F165749.26122400_600X600X1.jpg"
                style="display: block;"
              />
              <h3>变形金刚1:32合金小车</h3>
              <p>
                ￥
                <strong>79</strong>
              </p>
            </li>
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2018%2F11%2F09%2F172351.82032772_600X600X1.jpg"
                style="display: block;"
              />
              <h3>变形金刚1:24合金小车</h3>
              <p>
                ￥
                <strong>165</strong>
              </p>
            </li>
            <li class="td1">
              <img
                class="m_img"
                src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2017%2F05%2F24%2F184822.40485767_600X600X1.jpg"
                style="display: block;"
              />
              <h3>孩之宝 变形金刚擎天柱/大黄蜂/路障快速变形系列儿童玩具</h3>
              <p>
                ￥
                <strong>129</strong>
              </p>
            </li>
          </ul>
        </dd>
      </dl>
    </article>
    </section>
  </div>
</template>

<script>
import {shoppingApi} from "@api/shopping"
export default {
  name: "Shopping",
  data(){
    return {
      navigatorIcon:[],
    }
  },
  async created(){
    let data = await shoppingApi();
    this.navigatorIcon = data.navigatorIcon;
  },

};
</script>

<style>
/* search 查询 */

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
.shopping_search {
  padding: 0 0.05rem 0 0.15rem;
  height: 0.442rem;
}

.shopping_search-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.925rem;
  height: 0.442rem;
}

.shopping_input {
  width: 2.525rem;
  height: 0.333rem;
  padding: 0 0.242rem 0 0.267rem;
  border-radius: 0.5em;
  font-size: 0.133rem;
  background: #fff
    url(//static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png)
    no-repeat 2% 50%;
  background-size: 0.167rem 0.167rem;
  outline: none;
  border: none;
}

.shopping_car {
  width: 0.4rem;
  height: 0.442rem;
  background: url(//static1.mtime.cn/html5/20191022151144/images/2014/i_h_shopping01.png)
    no-repeat center center;
  background-size: 0.292rem 0.25rem;
}

/* 轮播 */
.shopping_lunbo {
  width: 3.125rem;
  height: 1.842rem;
}

.shopping_lunbo img {
  width: 100%;
  height: 100%;
}
/* nav 导航 */
.shopping_nav {
  width: 3.125rem;
  height: 1.75rem;
  margin-bottom: 0.133rem;
  background: #fff;
}

.shopping_nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.shopping_nav ul li {
  width: 0.775rem;
  height: 0.858rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shopping_nav ul li img {
  width: 0.4rem;
  height: 0.4rem;
}

.shopping_nav ul li p {
  font-size: 0.133rem;
  text-align: center;
  margin-top: 0.042rem;
}

/* 专区 */
.shopping_zhuanqu {
  width: 3.125rem;
  height: 2.875rem;
  background: #fff;
  position: relative;
  margin-bottom: 0.133rem;
}

.shopping_zhuanqu img {
  width: 100%;
  height: 100%;
}

.shopping_zhuanqu01,
.shopping_zhuanqu02,
.shopping_zhuanqu03,
.shopping_zhuanqu04 {
  position: absolute;
}

.shopping_zhuanqu01 {
  width: 1.558rem;
  height: 1.917rem;
}

.shopping_zhuanqu02 {
  width: 1.558rem;
  height: 0.933rem;
  right: 0;
  z-index: 2;
}

.shopping_zhuanqu03 {
  width: 1.558rem;
  height: 0.95rem;
  top: 0.95rem;
  right: 0;
}

.shopping_zhuanqu04 {
  width: 100%;
  height: 0.925rem;
  bottom: 0;
  left: 0;
  z-index: 3;
}

/* products 产品 */
.shopping_products {
  width: 100%;
  height: 4.933rem;
  background: #fff;
  margin-bottom: 0.133rem;
}

.shopping_products .caption {
  width: 100%;
  height: 1.267rem;
  position: relative;
}

.shopping_products .caption img {
  width: 100%;
  height: 100%;
}

.shopping_products .caption ul {
  width: 100%;
  height: 1.267rem;
  position: absolute;
  top: 0.6rem;
}

.shopping_products .caption ul li {
  width: 0.658rem;
  height: 84px;
  float: left;
  margin: 0 0.06rem;
}

.shopping_products .mall_actul {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.shopping_products .table {
  position: relative;
}

.shopping_products .td {
  width: 100%;
}

.shopping_products .acttitle {
  text-align: center;
}

.shopping_products .acttitle h4 {
  font-size: 0.1rem;
  font-weight: normal;
  margin-top: 0.042rem;
}

.shopping_products .acttitle h3 {
  font-size: 0.183rem;
  font-weight: normal;
}

.shopping_products .actdd {
  margin: 0.125rem 0.067rem 0;
}

.shopping_products .actdd dd {
  width: 0.983rem;
  height: 1.275rem;
  float: left;
  text-align: center;
  overflow: hidden;
}

.shopping_products .actdd img {
  width: 0.85rem;
  height: 0.85rem;
  margin: 0 auto;
}

.shopping_products .actdd dd h3 {
  padding: 0.067rem 0;
  font-size: 0.1rem;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}

.shopping_products .actdd dd p {
  font-size: 0.1rem;
  color: #f15353;
}

.shopping_products .actdd dd p strong {
  font-size: 0.133rem;
}

.shopping_products .actmore {
  text-align: center;
  padding: 2.667rem 0 0.208rem;
}

.shopping_products .actmore a {
  background: #f26262;
  width: 0.975rem;
  height: 0.275rem;
  line-height: 0.275rem;
  display: inline-block;
  position: relative;
  text-align: center;
  border-radius: 0.167rem;
  font-size: 0.133rem;
  color: #fff;
}

/* type类型 */
.shopping_type {
  margin-bottom: 0.117rem;
  padding-bottom: 0.133rem;
  background: #fff;
}

.shopping_type .typetit {
  padding-top: 0.167rem;
}

.shopping_type .typetit h2 {
  font-size: 0.133rem;
  position: relative;
  font-weight: normal;
}

.shopping_type .typetit h2 i {
  width: 0.06rem;
  height: 0.18rem;
  display: inline-block;
  position: relative;
  margin-right: 0.05rem;
  vertical-align: middle;
  overflow: hidden;
}

.shopping_type .typetit div {
  position: absolute;
  font-size: 0.13rem;
  color: #666;
  margin-right: 0.15rem;
  padding-right: 0.15rem;
  margin-top: 0.02rem;
  text-align: right;
  top: 0.142rem;
  right: 0.083rem;
}
.shopping_type dl {
  margin: 0 0.128rem;
}
.shopping_type dl dd {
  overflow: hidden;
}
.shopping_type dt {
  border-bottom: 1px solid #d8d8d8;
  padding: 0.05rem 0;
  margin-bottom: 0.064rem;
}

.shopping_type dt img {
  width: 100%;
  height: 100%;
  max-height: 15.5rem;
}

.shopping_type .table1 {
  position: relative;
  float: left;
}

.shopping_type .table1 .td1 {
  width: 0.95rem;
  height: 1.275rem;
  float: left;
  text-align: center;
  overflow: hidden;
}

.shopping_type .table1 .td1 img {
  width: 0.85rem;
  height: 0.85rem;
  margin: 0 auto;
}

.shopping_type .table1 .td1 h3 {
  padding: 0.067rem 0;
  font-size: 0.1rem;
  font-weight: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}

.shopping_type .table1 .td1 p {
  font-size: 0.1rem;
  color: #f15353;
}

.shopping_type .table1 .td1 p strong {
  font-size: 0.133rem;
}
</style>