<template>
  <div class="dialog" v-if="show" @click.stop="$emit('toggle')">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
<style scoped lang="scss">
.dialog {
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  position: fixed;
  display: flex;
  justify-content: center;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: auto;
    background: #fff;
    border-radius: 10px;
    min-height: 50px;
    min-width: 300px;
  }
}
</style>

