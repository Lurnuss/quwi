<template>
  <div class="login__form-wrapper">
    <div class="login__form">
      <div>
        <img src="/Quwi_logo.png" alt="logo">
        <span>quwi</span>
      </div>
      <input
        type="text"
        v-model="form.email"
        class="login__form-field"
        placeholder="email"
      >
      <input
        type="password"
        v-model="form.password"
        class="login__form-field"
        placeholder="password"
      >
      <div
        v-if="errorMessage"
        class="login__form-err"
      >
        {{ errorMessage }}
      </div>
      <div
        class="login__form-btn"
        @click="submit"
      >
        Login
      </div>
      <a
        href="https://quwi.com/forgot"
        target="_blank"
      >
        Forgot password?
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    errorMessage: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  methods: {
    submit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  &__form {
    background-color: #fff;
    padding: 30px;
    width: 400px;
    position: absolute;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 50px));
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 600px) {
      width: 230px;
    }

    & div:first-child {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 0 auto 15px;

      & span {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 30px;
      }

      & img {
        width: 45px;
        height: 45px;
      }
    }

    &-field {
      border: 1px solid #c2c2c2;
      padding: 20px 20px;
      background: #FFFFFF;
      border-radius: 8px;
      outline: none;
      &:focus {
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.21);
      }
      &::placeholder {
        color: #bebebe;
      }
    }

    &-btn {
      color: #fff;
      font-size: 18px;
      text-align: center;
      background-color: #2668c1;
      padding: 20px 0;
      border-radius: 12px;
      cursor: pointer;
    }
    &>a {
      margin: 15px auto 0;
      color: #2668c1;
      text-decoration: none;
    }

    &-err {
      margin-left: 4px;
      color: red;
      font-size: 14px;
    }
  }
}
</style>
