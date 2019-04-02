<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer/>
  </div>
</template>

<style lang="scss">
@import "reset";
@import "colors";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  header {
    height: 7vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $primary-0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    z-index: 10;
  }

  main {
    z-index: -99999;
    height: 88vh;
    width: 100vw;
    background-image: url("./assets/goldentopo.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    /* margin-top: 10px;
    margin-bottom: 10px; */
  }

  footer {
    height: 5vh;
    width: 100vw;
    background: $primary-0;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.19), 0 -6px 6px rgba(0, 0, 0, 0.23);
    z-index: 1;
  }
}
</style>
