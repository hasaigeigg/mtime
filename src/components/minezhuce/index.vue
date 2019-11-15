<template>
  <div>
    <div class="zhucebox">
      <ul>
        <li>
          <div class="textbox">
            <label>手机号:</label>
            <input class="phone" type="text" placeholder="请输入手机号" />
            <a class="btn-blue">
              <span>获取验证码</span>
            </a>
          </div>
        </li>
        <li>
          <div class="textbox">
            <label>验证码:</label>
            <input type="text" placeholder />
          </div>
        </li>
        <li>
          <div class="textbox">
            <label>密 &nbsp;&nbsp;&nbsp;码:</label>
            <input type="text" placeholder="6-20位字母、数字、符号组成" />
          </div>
        </li>
      </ul>
      <div class="agree">
        <i></i>
        <label>我已阅读并同意</label>
        <span class="c-green">《Mtime时光网服务条款》</span>
        <span class="c-green">《隐私政策》</span>
      </div>
      <div class="zhuce">
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"minezhuce"
};
</script>

<style>
  .zhucebox {
      padding: .15rem 0;
    }

    .zhucebox ul {
      background: #fff;
      box-shadow: 1px 1px 1px rgba(51, 51, 51, 0.1);
    }

    .zhucebox ul li {
      margin-left: .15rem;
      border-bottom: 1px solid #d8d8d8;
    }

    .textbox {
      padding: .05rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      font-size: .125rem;
    }

    .textbox label {
      color: #777;
      text-align: right;
      margin-right: .068rem;
      width: .588rem;
    }

    .textbox input {
      flex: 1;
      line-height: .267rem;
      font-size: .133rem;
      border: none;
      outline: none;
    }

    .textbox .phone {
      width: 1.208rem;
    }

    .btn-blue {
      margin-right: .15rem;
      height: .3rem;
      line-height: .283rem;
      width: 1.11rem;
      text-align: center;
      color: #1e7dd7;
      border: 1px solid #1e7dd7;
      display: block;
      border-radius: .15rem;
      /* font-size: ; */
    }

    .agree {
      padding: .15rem 0 .15rem .15rem;
      line-height: 1.6;
    }

    .agree label {
      color: #777;
      font-size: .133rem;
    }

    .c-green {
      color: #1e7dd7;
      font-size: .133rem;
    }

    .zhuce {
      margin: 0 .15rem;
      padding: .067rem .115rem;
      background: #1e7dd7;
      border: 1px solid #1e7dd7;
      text-align: center;
      border-radius: .333rem;
    }

    .zhuce span {
      font-size: .167rem;
      color: #fff;
    }
</style>