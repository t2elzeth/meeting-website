<template>
  <div>
    <button @click="isOpen = true" class="open-btn">
      <slot name="buttonContent">Показать</slot>
    </button>

    <transition name="modal" v-if="isOpen">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <button class="closebtn" @click="isOpen = false"></button>
            <div class="modal-header">
              <slot name="modalHeader"></slot>
            </div>

            <div class="modal-body">
              <slot name="modalBody"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "QuestionnaireCreateModal",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;

  .closebtn {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    width: 30px;
    height: 30px;
    background: white;
    cursor: pointer;

    &:after {
      display: inline-block;
      content: "\00d7";
      color: black;
    }

    &:hover {
      transition: .65s;
      background: black;

      &:after {
        color: white;
      }
    }
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin-top: 15px;

  &-input, &-mess {
    padding: 5px;
    border-width: 1px;
  }

  &-input {
    margin: 5px 0;
  }

  &-mess {
    resize: none;
    margin: 10px 0;
  }


}

.btn {
  border: 1px solid #fff;
  color: #fff;
  outline: none;
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all .4s;

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: white;
  }
}

.open-btn {
  @extend .btn;
  background: white;
  color: black;
  border-color: black;
}
</style>