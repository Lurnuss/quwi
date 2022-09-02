<template>
  <div class="login">
    <div class="login__header-wrapper">
      <div class="login__header container">
        <img src="/Quwi_logo.png" alt="logo">
        <a href="https://quwi.com/signup" target="_blank">signup</a>
      </div>
    </div>
    <LoginForm @submit="submit()" :errorMessage="errorMessage"/>
  </div>
</template>

<script>
import LoginForm from "~/components/LoginForm";
export default {
  auth: 'guest',
  name: "SignUp",
  components: { LoginForm },
  data: () => ({
    errorMessage: ''
  }),
  methods: {
    async submit(login) {
      try {
        this.errorMessage = ''
        await this.$auth.loginWith('local', { data: login })
      } catch(e) {
        this.errorMessage = e.response?.data?.first_errors?.email
      }
    }
  },
}
</script>

<style scoped lang="scss">
.login {
  background-image: url('/login_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    & img {
      max-width: 20px;
      max-height: 20px;
    }
    & a {
      color: #6c6c6c;
      text-transform: uppercase;
      text-decoration: none;
    }

    &-wrapper {
      -webkit-box-shadow: 0 6px 6px 0 rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0 6px 6px 0 rgba(34, 60, 80, 0.2);
      box-shadow: 0 6px 6px 0 rgba(34, 60, 80, 0.2);
      background-color: #fff;
    }
  }
}
</style>
