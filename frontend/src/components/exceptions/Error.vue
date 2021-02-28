<template>
  <div class="error">
    <div class="error-content">
      <p class="error-title">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error"
}
</script>

<style lang="scss" scoped>

.error {
  &-content {
    background-color: rgb(255, 170, 170);
    border: 1px solid rgb(240, 193, 193);
    border-radius: 3px;
    max-width: 500px;
    padding: 5px 10px;
  }

  &-title {
    font-size: 14px;

    color: rgb(143, 73, 73);
  }
}

</style>