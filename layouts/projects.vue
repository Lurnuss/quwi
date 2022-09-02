<template>
<div>
  <header>
    <div class="header container">
      <img src="/Quwi_logo.png" alt="logo">
      <div>
        <p>projects</p>
        <p @click="logout()">logout</p>
      </div>
    </div>
  </header>
  <main>
    <Nuxt />
  </main>
</div>
</template>

<script>
export default {
  name: "projects",
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        await this.$router.push({ path: 'login' })
      }
      catch(e) {
        this.toast('error', e.response?.data?.message ? e.response.data.message : 'oops, something went wrong')
        e.response ? console.log(e.response.data) : console.log(e)
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background: #ababab;
    width: 100vw;
   }
}
</style>
