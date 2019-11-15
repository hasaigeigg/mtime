<template>
  <div>
    <header class="sou-header">
      <nav class="sou-nav">
        <router-link tag="a" to="/"  class="sou-btn"></router-link>
        <input type="text" placeholder="影片/影院/影人，任你搜" />
        <a class="sou-box">
          <span>搜索</span>
        </a>
      </nav>
    </header>
      <div class="sou-tao">
        <div class="sou-xx">
          <p>
            <b>42,560</b>
            <span>部影视剧集</span>
            <b>12,462</b>
            <span>位影人</span>
          </p>
        </div>
        <div class="sou-title">
          <b>热门搜索</b>
        </div>
        <div class="serch">
          <a>
            <span>终结者</span>
          </a>
          <a>
            <span>少年的你</span>
          </a>
          <a>
            <span>决战中途岛</span>
          </a>
          <a>
            <span>沉睡魔咒2</span>
          </a>
          <a>
            <span>受益人</span>
          </a>
          <a>
            <span>我和我的祖国</span>
          </a>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "Sou"
};
</script>

<style>
.sou-header {
  height: 0.44rem;
  background: #1c2635;
  z-index: 200;
  top: 0;
  left: 0;
  position: fixed;
}

.sou-nav {
  padding: 0 0.15rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.sou-btn {
  width: 0.44rem;
  height: 0.44rem;
  position: absolute;
  left: 0;
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png)
    no-repeat 0.15rem center;
  background-size: auto 0.15rem;
}

.sou-nav input {
  margin-left: 0.22rem;
  width: 2.104rem;
  height: 0.328rem;
  border-radius: 0.067rem;
  padding: 0 0.246rem 0 0.273rem;
  font-size: 0.133rem;
  color: #757575;
  outline: none;
  border: none;
  background: #fff
    url(http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png)
    no-repeat 0.047rem center;
  background-size: 0.183rem 0.183rem;
}

.sou-box {
  width: 0.45rem;
  height: 0.279rem;
  border: 1px solid #fff;
  text-align: center;
  line-height: 0.263rem;
  display: block;
  color: #fff;
  font-size: 0.142rem;
  margin-left: 0.05rem;
  border-radius: 0.042rem;
}



.sou-xx {
  padding: 0.14rem 0 0.15rem 0.05rem;
  max-height: 0.95rem;
  overflow: hidden;
}

.sou-xx p {
  padding: 0.1rem 0.15rem 0.11rem 0.15rem;
  color: #e3e3e3;
}

.sou-xx p b {
  font-weight: normal;
  font-size: 0.24rem;
}

.sou-xx p span {
  padding-left: 0.035rem;
  font-size: 0.12rem;
}

.sou-tao {
  min-height: 4.167rem;
}

.sou-title {
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  background-color: #f6f6f6;
  color: #999;
  padding: 0.07rem 0.15rem;
}

.sou-title b {
  font-size: 0.1rem;
}

.serch {
  max-height: 0.95rem;
  overflow: hidden;
  padding: 0.055rem 0 0.15rem 0.05rem;
}

.serch a {
  display: inline-block;
  margin: 0.095rem 0.03rem 0.05rem 0.1rem;
  padding: 0.06rem 0.12rem;
  border: 1px solid #b6dcff;
  color: #1e7dd7;
  border-radius: 0.167rem;
}

.serch a span {
  font-size: 0.125rem;
}
</style>