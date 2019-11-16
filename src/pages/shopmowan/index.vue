<template>
  <div style="background-color:#f6f6f6;">
    <section class="index_section">
    <header class="mowan_header">
      <div class="mowan_search">
        <v-touch tag="img" @tap="handleback()" src="http://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" class="img1" />
        <input type="text" class="mowan_input" placeholder="搜索正版电影周边" />
        <img src="//static1.mtime.cn/html5/20191022151144/images/2014/send.png" class="img2"/>
      </div>
    </header>
      <div class="xuan">
        <ul>
          <li>
            <p>
              <span>综合排序</span>
              <i></i>
            </p>
          </li>
          <li>
            <p>
              <span>主体角色</span>
              <i></i>
            </p>
          </li>
          <li>
            <span>全部分类</span>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="h5">&nbsp;</div>
      <aside class="othershop mallother">
        <ul>
          <router-link tag="li" :to="'/shopdetail/'+item.goodsId" v-for="(item,index) in goodsList" :key="index">
            <div class="goodsbox">
              <a>
                <div class="mtips">
                  <i class="i_purchase">{{item.iconText}}</i>
                </div>
                <div class="picbox">
                  <img
                    class="m_img"
                    :src="item.imageSrc"
                  />
                </div>
                <dl class="txtbox">
                  <dt>
                    <em class="zy">{{item.goodsTip}}</em>{{item.name}}
                  </dt>
                  <dd>
                    <b>￥{{(item.minSalePrice/100)}}</b>
                  </dd>
                </dl>
              </a>
            </div>
          </router-link>
        </ul>
      </aside>
      </section>
  </div>
</template>

<script>
import {shoppingmowanApi , shoppingmowanwenziApi,urlnullApi} from "@api/shopping"
export default {
  name: "Shopmowan",
  methods:{
      handleback(){
          this.$router.back("/shopping");
      }
  },
  data(){
    return {
      goodsList:[]
    }
  },
  async created(){
    console.log(this.$route.query.id)
    if(/\d+/g.test(this.$route.query.id)){
      console.log(1);
      let data = await shoppingmowanApi(this.$route.query.id);
    this.goodsList = data.content.goods.goodsList;

    }else if(this.$route.query.id == "undefined"){
      console.log(3);
      let data = await urlnullApi();
    this.goodsList = data.content.goods.goodsList;

    }else{
      console.log(2);

      let data = await shoppingmowanwenziApi(this.$route.query.id);
    this.goodsList = data.content.goods.goodsList;

    }
  },
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
.mowan_header {
  width: 100%;
  height: 0.442rem;
  background-color: #1c2635;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.mowan_search {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.mowan_header .img1 {
  width: .083rem;
  height: .167rem;
}
.mowan_header .img2 {
  width: .167rem;
  height: .167rem;
}
.mowan_header input {
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
.xuan ul {
  display: flex;
  background: #fff;
}

.xuan ul li {
  flex: 1;
  padding: 0.092rem 0;
  font-size: 0.117rem;
  color: #777777;
  text-align: center;
}

.xuan ul li p {
  border-right: 1px solid #999;
}

.xuan ul li i {
  display: inline-block;
  width: 0.05rem;
  height: 0.025rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC)
    50% no-repeat transparent;
  background-size: cover;
  position: relative;
  top: -0.027rem;
}

.h5 {
  height: 0.1rem;
}

.mallother {
  padding-bottom: 0.1rem;
}

.othershop ul {
  overflow: hidden;
  position: relative;
}

.othershop li:nth-child(odd) {
  margin-right: 0.017rem;
}

.othershop li {
  width: 1.533rem;
  min-height: 2.2rem;
  float: left;
  display: inline-block;
  position: relative;
  background-color: #fff;
  margin-bottom: 0.05rem;
}

.othershop li .goodsbox {
  background: #fff;
  position: relative;
}

.othershop li .mtips {
  top: 0.04rem;
}

.othershop li .mtips {
  position: absolute;
  left: 0rem;
  top: 0rem;
  z-index: 3;
}

.mtips i {
  color: #fff;
  font-style: normal;
  background: #25ACBD;
}

.othershop li .picbox {
  height: auto;
  margin-bottom: 0.1rem;
}

.picbox {
  position: relative;
}

.m_img {
  width: 100%;
  height: auto;
  display: block;
}

.othershop li .txtbox {
  padding: 0 0.1rem;
}

.othershop li .txtbox dt {
  font-size: 0.11rem;
  line-height: 0.15rem;
  min-height: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.02rem;
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

.othershop li .txtbox dd {
  padding: 0rem 0 0.05rem;
}

.othershop li .txtbox dd b {
  color: #ff8600;
  font-size: 0.13rem;
  font-weight: normal;
}

</style>