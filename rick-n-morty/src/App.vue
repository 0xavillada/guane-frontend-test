<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/ricknmorty2.gif">
    <router-view/>
  </div>
</template>

<style lang="scss">

body {
  margin: 0;
}

img{    
  margin-bottom: 50px;
  width:40%;
  height:auto;
}

#app {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-image: url(./assets/RnM_Background_Giant.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
