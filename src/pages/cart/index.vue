<template>
  <div>
    <header>
      <div class="cart_header">
        <v-touch tag="a" @tap="handleback()" href="#">&lt;</v-touch>
        <span class="car">购物车(1)</span>
        <span class="bianji">编辑</span>
      </div>
    </header>
    <section>
      <ul class="carlist">
        <li>
          <v-touch tag="input" @tap="handleCartPrice()" type="checkbox" class="car_input" />
          <div class="table_big">
            <h3 class="titlebox">
              <em class="zy">{{content.goodsTip}}</em>
              <a>{{content.jingle}}</a>
            </h3>
            <div class="table">
              <div class="pic">
                <img :src="content.image" />
              </div>
              <div class="count">
                <v-touch tag="span" @tap="handleCartReducer()">-</v-touch>
                <input type="text" size="1" :value="num" class="pic_input" />
                <v-touch tag="span" @tap="handleCartAdd()">+</v-touch>
              </div>
              <div class="carprice">
                <p>￥{{content.txnSalePrice / 100}}</p>
                <p>x{{content.status}}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <div class="footer">
        <div class="selectall">
          <input type="checkbox"  />全选
        </div>
        <div class="heji">
          <span>合计</span>
          <b>￥:{{spice}}</b>
        </div>
        <div @click="handleCartAdd()" class="jiesuan">
          <span>结算</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "cart",
  props: ["goodsId"],
  methods: {
    ...mapActions({}),
    ...mapMutations({
      handleCartReducer: "cart/handleCartReducer",
      handleCartAdd: "cart/handleCartAdd",
      handleCartPrice:"cart/handleCartPrice",
      handleback(){
          this.$router.back("/shopdetail");
      }
    })
  },
  created() {
    this.$store.dispatch("cart/handleCartConent", {
      id: this.goodsId,
      city: this.$store.state.city.cityId
    });
  },
  computed: {
    ...mapState({
      content: state => state.cart.content,
      spice: state => state.cart.spice,
      num: state => state.cart.num
    })
  }
};
</script>


<style>
header {
  width: 100%;
  height: 0.442rem;
  background-color: #1c2635;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.cart_header {
  width: 100%;
  height: 0.442rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.cart_header a {
  margin-left: 0.083rem;
  color: #fff;
}

.cart_header .bianji {
  margin-right: 0.083rem;
}

section {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 0.442rem;
  padding-bottom: 0.448rem;
  overflow: auto;
}
.carlist li {
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  padding: 0.15rem 0 0 0.15rem;
  position: relative;
}
.carlist .car_input {
  position: absolute;
  top: 0.167rem;
  left: 0;
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
.titlebox {
  font-size: 0.13rem;
  margin-bottom: 0.042rem;
}

.table {
  width: 100%;
  height: 0.65rem;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pic {
  width: 0.6rem;
  height: 0.6rem;
}
.pic img {
  width: 100%;
  height: 100%;
}
.pic_input {
  text-align: center;
  border: none;
  outline: none;
}
.carprice p {
  text-align: center;
}
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 0.448rem;
  border-top: 0.008rem solid #eee;
  box-sizing: border-box;
  background: #777;
}
.footer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer .selectall {
  margin-left: 0.15rem;
  flex: 1;
}
.footer .jiesuan {
  width: 0.85rem;
  height: 100%;
  text-align: center;
  line-height: 0.448rem;
}
.count span{
  display: inline-block;
  font-size: .167rem;
  width: .417rem;
  text-align: center;
}
</style>