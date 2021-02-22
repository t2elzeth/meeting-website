<template>
  <div>
    s
    <div class="sidenav">
      <div class="dropdown2">
        <button class="btn-dropdown2" @click="isOpen = !isOpen">CLick me hard</button>
        <ul :class="isOpen ? 'active'  : ''">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 4</a></li>
        </ul>
      </div>
    </div>

    <div class="main">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <button class="btn">Button</button>
      <div class="dropdown">
        <button class="btn" style="border-left:1px solid navy">
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isOpen: true
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 250px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

.dropdown2 {
  width: 100%;

  > ul {
    height: 200px;
    list-style: none;
    transform-origin: top;
    transform: perspective(1000px) rotateX(-90deg);
    transition: 0.5s;
    overflow: hidden;

    &.active {
      transform: perspective(1000px) rotateX(0deg);
      overflow-y: scroll;

    }

    a {
      display: block;
      padding: 10px;
      text-align: center;
      text-decoration: none;
      background: #262626;
      color: white;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      transition: .5s;

      &:hover {
        background: #0d7ad0;
      }
    }
  }
}

.btn-dropdown2 {
  width: 100%;
  height: 60px;
  background: #2196F3;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  font-size: 24px;
}

/* Style page content */
.main {
  margin-left: 250px; /* Same as the width of the sidebar */
  padding: 0 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}
</style>