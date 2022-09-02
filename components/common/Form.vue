<template>
  <div class="form__wrapper">
    <input
      type="text"
      v-model="form.name"
      placeholder="name"
    >
    <div
      class="form__btn"
      @click="$emit('update', form)"
    >
      Update
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    form: {
      name: ''
    }
  }),
  mounted() {
    this.form.name = this.project?.name ?? ''
  },
}
</script>

<style scoped lang="scss">
.form{
  &__wrapper {
    width: 100%;

    & input {
      border: 1px solid #c2c2c2;
      padding: 20px 20px;
      background: #FFFFFF;
      border-radius: 8px;
      outline: none;
      width: 80%;
      display: block;
      margin: 0 auto;
      &:focus {
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.21);
      }
      &::placeholder {
        color: #bebebe;
      }
    }
  }
  &__btn {
    color: #fff;
    font-size: 18px;
    text-align: center;
    background-color: #2668c1;
    padding: 20px 0;
    margin: 20px auto 0;
    width: 50%;
    border-radius: 12px;
    cursor: pointer;
  }
}
</style>
