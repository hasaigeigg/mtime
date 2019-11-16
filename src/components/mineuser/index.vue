<template>
  <div>
    <section class="user-section">
      <article class="people">
        <div class="people_xinxi">
          <div class="people_pic">
            <img
              src="http://b.hiphotos.baidu.com/image/h%3D300/sign=ad628627aacc7cd9e52d32d909032104/32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg"
              alt="贤惠的钟祺"
            />
          </div>
          <div class="people_name">
            <i class="i_grade">M0</i>
            <b>{{UserName}}</b>
            <p>余额：¥0</p>
          </div>
          <div></div>
        </div>
      </article>
      <nav class="people_nav">
        <ul>
          <li v-for="(item,index) in title" :key="index">
            <a>
              <img
                :src="item.img"
              />
              <p>{{item.name}}</p>
            </a>
          </li>
        </ul>
      </nav>
      <article class="people_list">
        <ul>
          <li v-for="(item,index) in content" :key="index">
            <i>
              <img :src="item.img" alt />
            </i>
            <p>{{item.name}}</p>
            <b>{{item.num}}</b>
            <i>></i>
          </li>
        </ul>
      </article>
      <v-touch tag="article" @tap="handleExitUser()" class="tuichu">
        <span>退出登录</span>
      </v-touch>
      <TabBar />
    </section>
  </div>
</template>

<script>
import TabBar from '@common/components/tabBar'
import Cookies from 'js-cookie';
export default {
  name:"User",
  components:{
    TabBar
  },
  data() {
    return {
      title:[
        {
          img:"//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161141.82690725.jpg",
          name:"购物车"
        },
        {
          img:"//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161148.25620959.jpg",
          name:"影票订单"
        },
        {
          img:"//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161155.82939104.jpg",
          name:"商品订单"
        }
      ],
      content:[
        {
          img:"http://static1.mtime.cn/html5/20191022151144/images/2014/my_card.png",
          num:2,
          name:"电影票优惠券"
        },
        {
          img:"http://static1.mtime.cn/html5/20191022151144/images/2014/my_card.png",
          num:2,
          name:"商品优惠券"
        },
        {
          img:"http://static1.mtime.cn/html5/20191022151144/images/2014/my_radio.png",
          num:"",
          name:"我的活动"
        },
        {
          img:"http://static1.mtime.cn/html5/20191022151144/images/2014/my_movie.png",
          num:"",
          name:"我的电影"
        },
      ],
      UserName:JSON.parse(sessionStorage.getItem("UserName"))||""
    }
  },
  methods: {
    handleExitUser(){
      Cookies.remove('token');
      this.$router.push('/home');
    }
  },
};
</script>

<style>
.user-section {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  height: 100%;
}

.people {
  width: 100%;
  height: 1.45rem;
  position: relative;
  background: url(//static1.mtime.cn/html5/20191022151144/images/2014/set_endlogin.jpg)
    no-repeat;
  background-size: cover;
  padding: 0 0.15rem 0 0.25rem;
}

.people_xinxi {
  width: 2.725rem;
  height: 0.917rem;
  padding-top: 0.358rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.people_pic {
  width: 0.567rem;
  height: 0.567rem;
  overflow: hidden;
  border-radius: 50%;
}

.people_xinxi img {
  width: 100%;
  height: auto;
}

.i_grade {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  font-size: 0.12rem;
  color: #fff;
  width: 0.25rem;
  height: 0.16rem;
  line-height: 0.15rem;
  text-align: center;
  background: url(//static1.mtime.cn/html5/20191022151144/images/2014/vip_grade.png)
    no-repeat 0 0;
  background-size: auto 0.15rem;
  font-style: normal;
}

.people_name {
  margin-right: 0.417rem;
}

.people_name b {
  font-size: 0.16rem;
  font-weight: normal;
  color: #fff;
}

.people_name p {
  font-size: 0.1rem;
  font-weight: normal;
  color: #fff;
}

.people_nav {
  width: 3.125rem;
  height: 1.008rem;
  margin-bottom: 0.133rem;
  background: #fff;
}

.people_nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.people_nav ul li {
  width: 0.767rem;
  height: 1.008rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.people_nav ul li img {
  width: 0.45rem;
  height: 0.45rem;
}

.people_nav ul li p {
  font-size: 0.117rem;
  text-align: center;
  margin-top: 0.042rem;
}

.people_list ul {
  background: #fff;
  padding: 0 0 0 0.167rem;
  margin-bottom: 0.165em;
}

.people_list ul li {
  width: 100%;
  height: 0.433rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
  padding: 0.083rem 0;
}

.people_list ul li i {
  width: 0.25rem;
  height: 0.175rem;
  display: block;
}

.people_list ul li i img {
  width: 100%;
  height: 100%;
}

.people_list ul li p {
  flex: 1;
  margin-left: 0.083rem;
  color: #333;
}

.people_list ul li b {
  font-weight: normal;
  color: #333;
  margin-right: 0.042rem;
  font-size: 0.117rem;
}

.tuichu {
  background: #f13900;
  color: #fff;
  width: 2.825rem;
  border-radius: 0.333rem;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.167rem auto 0;
  font-size: 0.167rem;
}
</style>