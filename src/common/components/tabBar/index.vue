<template>
  <div>
    <footer class="index_footer">
      <ul class="footer-ul">
        <v-touch
          v-for="(item,index) in TabList"
          @tap="handleDiTitle(index)"
          :key="index"
          tag="li"
        >
          <a>
            <span>{{item.title}}</span>
          </a>
        </v-touch>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      TabList: [
        {
          title: "首页",
          path: "/home"
        },
        {
          title: "购票",
          path: "/ticket"
        },
        {
          title: "商城",
          path: "/shopping"
        },
        {
          title: "发现",
          path: "/find"
        },
        {
          title: "我的",
          path: "/mine"
        }
      ]
    };
  },
  methods: {
    handleDiTitle(index) {
      sessionStorage.setItem("Header-Nm", JSON.stringify(index+1));
      this.$router.push(this.TabList[index].path)
    }
  }
};
</script>

<style>
.footer-ul {
  display: flex;
  border-top: 1px solid #f6f6f6;
}
.footer-ul li {
  flex: 1;
  text-align: center;
  padding: 0.138rem;
}
.footer-ul li a {
  color: #0074c5;
  font-size: 0.15rem;
}
</style>