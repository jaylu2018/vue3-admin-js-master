<template>
  <div class="container" :class="{ 'sign-up-mode': signUpMode }">
    <!-- form表单容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <!-- 登录 -->
          <a-form
              class="loginForm sign-in-form"
              name="custom-validation"
              ref="ruleForm"
              :model="account_form"
              :rules="rules_form"
          >
            <a-form-item name="username">
              <label>用户名</label>
              <a-input v-model:value="account_form.username" type="text" autocomplete="off" />
            </a-form-item>

            <a-form-item name="password">
              <label>密码</label>
              <a-input v-model:value="account_form.password" type="password" utocomplete="off" />
            </a-form-item>

            <a-form-item>
              <a-button type="primary" html-type="submit" block>
                登陆
              </a-button>
            </a-form-item>
            <!-- 找回密码 -->
            <div class="tiparea">
              <p>忘记密码？ <a>立即找回</a></p>
            </div>
          </a-form>

        <!-- 注册 -->

      </div>
    </div>
    <!-- 左右切换动画 -->
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>我重申，我没有背叛，但逃亡是事实</h3>
          <h3>我用了两个世纪来实施这个计划</h3>
          <p>自然选择，前进四！</p>
          <button @click="signUpMode = !signUpMode" class="btn transparent">
            注册
          </button>
        </div>
        <img src="@/assets/img/log.svg" class="image" alt="" />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h3>我，面壁者罗辑！</h3>
          <h3>现在，对三体世界说话！</h3>
          <p>为什么选择我，我只是个普通人</p>
          <button @click="signUpMode = !signUpMode" class="btn transparent">
            登录
          </button>
        </div>
        <img src="@/assets/img/register.svg" class="image" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
// 导入验证类的方法
import { onMounted, reactive, toRefs,ref} from "vue";
import { checkPhone, checkPassword as password } from "@/utils/verification";

export default {
  name: "Login",
  setup(){
    //校验用户名
    const checkUsername = async (rule, value, callback) => {
      console.log(rule)
      if (!value) {
        return Promise.reject('请输入用户名');            //不存在的情况
      }else if(!checkPhone(value)){
        return Promise.reject('请输入11位数字的手机号');  //手机号错误的情况
      }else{
        // callback();
        return Promise.resolve();
      }
    };
    /** 检验密码 */
    const checkPassword = async (rule, value, callback) => {
      const passwords = formConfig.account_form.passwords;
      if (!value) {
        return Promise.reject('请输入密码');            //不存在的情况
      }else if(!password(value)){
        return Promise.reject('请输入6~20位的，数字+英文');  //密码错误的情况
      }else if(passwords && value && (passwords !== value)){  // 必须是两个密码都存在的情况下，才会检测密码是否一致。否则不检测
        return Promise.reject('两次密码不一致');  //密码错误的情况
      }else{
        // callback();
        return Promise.resolve();
      }
    };

    const formConfig = reactive({  // 类似于JSON对象的语法
      layout: {
        labelCol: { span: 10 },
        wrapperCol: { span: 14 },
      },
      account_form: {
        username: "",
        password: "",
      },
      rules_form: {
        username: [{ validator: checkUsername, trigger: 'change' }],
        password: [{ validator: checkPassword, trigger: 'change' }],
      },

    })

    const form = toRefs(formConfig);
    const signUpMode = ref(false);

    onMounted(() => {})


    return {
      ...form,
      signUpMode,
    }
  }
};
</script>
<style lang="scss">
@import "./style.scss";
</style>
