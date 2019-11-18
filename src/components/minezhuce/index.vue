<template>
  <div>
    <div class="zhucebox">
      <ul>
        <li>
          <div class="textbox">
            <label>账 &nbsp;&nbsp;&nbsp;号:</label>
            <input v-model="user" class="phone" type="text" placeholder="请输入手机号" />
            <!-- <a class="btn-blue">
              <span>获取验证码</span>
            </a>-->
          </div>
        </li>
        <!-- <li>
          <div class="textbox">
            <label>验证码:</label>
            <input type="text" placeholder />
          </div>
        </li>-->
        <li>
          <div class="textbox">
            <label>密 &nbsp;&nbsp;&nbsp;码:</label>
            <input v-model="password" type="password" placeholder="6-20位字母、数字、符号组成" />
          </div>
        </li>
      </ul>
      <div class="agree">
        <v-touch tag="i" @tap="handleZcTy()" :class="sure? 'iconfont sureC': 'iconfont'">&#xe634;</v-touch>
        <label>我已阅读并同意</label>
        <span class="c-green">《Mtime时光网服务条款》</span>
        <span class="c-green">《隐私政策》</span>
      </div>
      <v-touch tag="div" @tap="handleZhuCe()" class="zhuce">
        <span>注册</span>
      </v-touch>
    </div>
  </div>
</template>

<script>
import { ZhuceApi } from "@api/login";
export default {
  name: "minezhuce",
  data() {
    return {
      user: "",
      password: "",
      sure: false
    };
  },
  methods: {
    handleZcTy() {
      this.sure = !this.sure;
    },
    async handleZhuCe() {
      if (this.sure) {
        let data = await ZhuceApi(this.user, this.password);
        if (data.data.status == 1) {
          alert("注册成功");
          this.$router.push("/mine/load");
        } else {
          alert(data.data.info);
        }
      }else{
        alert("请阅读并同意条款");
      }
    }
  }
};
</script>

<style>
.zhucebox {
  padding: 0.15rem 0;
}

.zhucebox ul {
  background: #fff;
  box-shadow: 1px 1px 1px rgba(51, 51, 51, 0.1);
}

.zhucebox ul li {
  margin-left: 0.15rem;
  border-bottom: 1px solid #d8d8d8;
}

.textbox {
  padding: 0.05rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.125rem;
}

.textbox label {
  color: #777;
  text-align: right;
  margin-right: 0.068rem;
  width: 0.588rem;
}

.textbox input {
  flex: 1;
  line-height: 0.267rem;
  font-size: 0.133rem;
  border: none;
  outline: none;
}

.textbox .phone {
  width: 1.208rem;
}

.btn-blue {
  margin-right: 0.15rem;
  height: 0.3rem;
  line-height: 0.283rem;
  width: 1.11rem;
  text-align: center;
  color: #1e7dd7;
  border: 1px solid #1e7dd7;
  display: block;
  border-radius: 0.15rem;
  /* font-size: ; */
}

.agree {
  padding: 0.15rem 0 0.15rem 0.15rem;
  line-height: 1.6;
}

.agree label {
  color: #777;
  font-size: 0.133rem;
}

.agree .iconfont {
  font-size: 0.167rem;
  margin-right: 0.083rem;
}

.sureC {
  color: #75ca00;
}

.c-green {
  color: #1e7dd7;
  font-size: 0.133rem;
}

.zhuce {
  margin: 0 0.15rem;
  padding: 0.067rem 0.115rem;
  background: #1e7dd7;
  border: 1px solid #1e7dd7;
  text-align: center;
  border-radius: 0.333rem;
}

.zhuce span {
  font-size: 0.167rem;
  color: #fff;
}
</style>