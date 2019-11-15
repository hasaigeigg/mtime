<template>
  <div>
    <nav class="Ticket_nav">
      <div class="nav_left">
        <b>北京</b>
        <i class="nav_city"></i>
      </div>
      <p>
        <a href>筛选影院</a>
      </p>
      <span>
        <a>搜索</a>
      </span>
    </nav>
    <div class="xuan">
      <ul>
        <li>
          <p>
            <span>离我最近</span>
            <i></i>
          </p>
        </li>
        <li>
          <p>
            <span>全城</span>
            <i></i>
          </p>
        </li>
        <li>
          <span>影院特效</span>
          <i></i>
        </li>
      </ul>
    </div>
    <!-- 定位失败显示 -->
    <div class="Ticket-show">
      <div class="dingwei">
        <i></i>
        <p>位置获取失败，请开启定位功能</p>
        <a>
          <span>刷新</span>
        </a>
      </div>
    </div>
    <div class="shengming">以下影院均非时光网自营</div>
    <ul class="xinxi">
      <li>
        <dl>
          <dt>
            <p class="xinxi_b">
              <span>金逸国际影城荟聚店</span>
            </p>
            <p class="xinxi_j">
              <b>44</b>
              <span>元起</span>
            </p>
          </dt>
          <dd class="adress">
            <p>北京市大兴区欣宁大街15号7-03-122-C1</p>
          </dd>
          <dd class="xx-biao">
            <i>3D</i>
            <i>IMAX</i>
            <i>VIP</i>
            <i>4K</i>
            <i>情侣座</i>
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <p class="xinxi_b">
              <span>金逸国际影城荟聚店</span>
            </p>
            <p class="xinxi_j">
              <b>44</b>
              <span>元起</span>
            </p>
          </dt>
          <dd class="adress">
            <p>北京市大兴区欣宁大街15号7-03-122-C1</p>
          </dd>
          <dd class="xx-biao">
            <i>3D</i>
            <i>IMAX</i>
            <i>VIP</i>
            <i>4K</i>
            <i>情侣座</i>
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <p class="xinxi_b">
              <span>金逸国际影城荟聚店</span>
            </p>
            <p class="xinxi_j">
              <b>44</b>
              <span>元起</span>
            </p>
          </dt>
          <dd class="adress">
            <p>北京市大兴区欣宁大街15号7-03-122-C1</p>
          </dd>
          <dd class="xx-biao">
            <i>3D</i>
            <i>IMAX</i>
            <i>VIP</i>
            <i>4K</i>
            <i>情侣座</i>
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>
            <p class="xinxi_b">
              <span>金逸国际影城荟聚店</span>
            </p>
            <p class="xinxi_j">
              <b>44</b>
              <span>元起</span>
            </p>
          </dt>
          <dd class="adress">
            <p>北京市大兴区欣宁大街15号7-03-122-C1</p>
          </dd>
          <dd class="xx-biao">
            <i>3D</i>
            <i>IMAX</i>
            <i>VIP</i>
            <i>4K</i>
            <i>情侣座</i>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Ticket"
};
</script>

<style>
/*nav*/
.Ticket_nav {
  height: 0.512rem;
  line-height: 0.338rem;
  width: 100%;
  background: #f6f6f6;
  border-bottom: 1px solid #d8d8d8;
  padding: 0.083rem 0 0.083rem 0.167rem;
}

.nav_city {
  background: url(https://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png)
    no-repeat;
  background-size: cover;
}

.nav_left {
  margin-right: 0.083rem;
  width: 0.458rem;
  float: left;
}

.nav_left b {
  font-weight: normal;
  font-size: 0.133rem;
}

.nav_left i {
  display: inline-block;
  width: 0.083rem;
  height: 0.042rem;
  position: relative;
  top: -0.025rem;
}

.Ticket_nav p {
  width: 1.458rem;
  height: 0.292rem;
  float: left;
  border: 1px solid #bbbbbb;
  line-height: 0.233rem;
  border-radius: 0.083rem;
  padding: 0.025rem 0.221rem 0.017rem 0.292rem;
  margin-left: 0.208rem;
  margin-top: 0.017rem;
  background: #fff
    url(http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png)
    no-repeat 0.047rem center;
  background-size: 0.183rem 0.183rem;
  display: block;
}

.Ticket_nav p a {
  color: #777;
  font-size: 0.133rem;
}
.Ticket_nav span {
  width: 0.6rem;
  height: 0.279rem;
  border: 1px solid #fff;
  border-radius: 0.042rem;
  margin-left: 0.067rem;
  display: inline-block;
  text-align: center;
  line-height: 0.263rem;
  font-size: 0.1rem;
}
.xuan ul {
  display: flex;
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
.Ticket-show {
  padding-bottom: 0.125rem;
  border-bottom: 0.083rem solid #f5f5f5;
}
.dingwei {
  width: 1.833rem;
  height: 1.708rem;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.dingwei i {
  width: 1rem;
  height: 1rem;
  display: block;
  background: url(https://static1.mtime.cn/frontend.ticket.ticket-h5/1.0.80/script/assets/404_location_3x_4eee0d46.png)
    0 0 no-repeat transparent;
  background-size: contain;
}
.dingwei p {
  color: #999;
  font-weight: 100;
  line-height: 0.175rem;
  font-size: 0.125rem;
}
.dingwei a {
  width: 0.725rem;
  height: 0.3rem;
  padding: 0.054rem 0.229rem;
  border: 1px solid #777;
  color: #777;
  border-radius: 0.033rem;
  font-size: 0.125rem;
}
.shengming {
  background: rgb(246, 246, 246);
  font-size: 0.1rem;
  line-height: 0.233rem;
  color: rgb(153, 153, 153);
  text-align: center;
  margin-top: -0.067rem;
}
.xinxi li {
  margin-left: 0.083rem;
  padding: 0.125rem 0.125rem 0.125rem 0;
  border-bottom: 1px solid #d8d8d8;
}
.xinxi li dt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xixi_b span {
  line-height: 0.158rem;
  font-size: 0.133rem;
}
.xinxi_j {
  color: #ff8600;
}
.xinxi_j b {
  font-size: 0.167rem;
  font-weight: normal;
}
.xinxi_j span {
  font-size: 0.125rem;
  position: relative;
  left: -0.042rem;
}
.adress p {
  padding-right: 0.033rem;
  color: #777;
  line-height: 0.15rem;
  font-size: 0.1rem;
}
.xx-biao i {
  display: inline-block;
  /* height: .167rem; */
  /* width: .162rem; */
  color: #6d8297;
  border: 1px solid #6d8297;
  padding: 0.008rem;
  padding-top: 0.025rem;
  margin: 0.058rem 0.042rem 0 0;
  font-size: 0.075rem;
  text-align: center;
}
</style>