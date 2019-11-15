<template>
  <div>
    <div class="newpic">
      <a>
        <img
          src="https://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F03%2F01%2F173620.86296561.jpg&width=640&height=360&clipType=3"
          alt
        />
        <h2>
          <b>那些荣获奥斯卡的LGBT电影</b>
        </h2>
      </a>
    </div>
    <div class="toplist">
      <div class="topmeu">
        <ul>
          <li>
            <i class="top1"></i>
            <p class="blue">时光Top100</p>
          </li>
          <li>
            <i class="top2"></i>
            <p class="danlan">华语Top100</p>
          </li>
          <li>
            <i class="top3"></i>
            <p class="yellow">全球票房榜</p>
          </li>
        </ul>
      </div>
    </div>
    <ul class="topnews">
      <li>
        <a>
          <div class="top-text">
            <h2>昆汀·塔伦蒂诺个人推荐私宠电影Top20</h2>
            <p>昆汀也是一个狂热的影迷昆汀也是一个狂热的影迷昆汀也是一个狂热的影迷</p>
          </div>
          <i class="top-i-tnext"></i>
        </a>
      </li>
      <li>
        <a>
          <div class="top-text">
            <h2>昆汀·塔伦蒂诺个人推荐私宠电影Top20</h2>
            <p>昆汀也是一个狂热的影迷</p>
          </div>
          <i class="top-i-tnext"></i>
        </a>
      </li>
      <li>
        <a>
          <div class="top-text">
            <h2>昆汀·塔伦蒂诺个人推荐私宠电影Top20</h2>
            <p>昆汀也是一个狂热的影迷</p>
          </div>
          <i class="top-i-tnext"></i>
        </a>
      </li>
      <li>
        <a>
          <div class="top-text">
            <h2>昆汀·塔伦蒂诺个人推荐私宠电影Top20</h2>
            <p>昆汀也是一个狂热的影迷</p>
          </div>
          <i class="top-i-tnext"></i>
        </a>
      </li>
      <li>
        <a>
          <div class="top-text">
            <h2>昆汀·塔伦蒂诺个人推荐私宠电影Top20</h2>
            <p>昆汀也是一个狂热的影迷</p>
          </div>
          <i class="top-i-tnext"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"Yu"
};
</script>

<style>
/*toplist*/
.topmeu ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.topmeu ul li {
  flex: 1;
}

.topmeu ul li p {
  font-size: 0.1rem;
  text-align: center;
  margin-top: 0.14rem;
}

.top1 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/top01.png)
    no-repeat;
  background-size: cover;
}

.top2 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/top02.png)
    no-repeat;
  background-size: cover;
}

.top3 {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/top03.png)
    no-repeat;
  background-size: cover;
}

.top1,
.top2,
.top3 {
  display: block;
  margin: auto;
  width: 0.492rem;
  height: 0.492rem;
  border-radius: 0.492rem;
}

.blue {
  color: #1498c9;
}

.danlan {
  color: #3bc7c2;
}

.yellow {
  color: yellow;
}

/*topnews*/
.topnews {
  border-top: 1px solid #d8d8d8;
  margin-top: 0.21rem;
}

.topnews li {
  padding-left: 0.15rem;
}

.topnews li a {
  display: block;
  text-align: left;
  padding: 0.17rem 0;
  position: relative;
  border-bottom: 1px solid #d8d8d8;
}

.top-text h2 {
  margin-right: 0.3rem;
  font-size: 0.133rem;
  line-height: 1.4;
}

.top-text p {
  margin-top: 0.065rem;
  padding-right: 0.3rem;
  color: #777;
  font-size: 0.117rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*箭头*/
.top-i-tnext {
  width: 0.14rem;
  height: 0.08rem;
  position: absolute;
  top: 50%;
  transform: rotate(-90deg);
  margin-top: -0.04rem;
  right: 0.1rem;
  display: block;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png)
    no-repeat center center;
  background-size: auto 0.08rem;
}
</style>