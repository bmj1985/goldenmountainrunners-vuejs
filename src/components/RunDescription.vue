<template>
  <div class="description-container">
    <div class="photo-container">
      <img id="pic" alt="Golden Mountain runners action photo" src="../assets/northtable.png">
    </div>
    <div class="text-container">
      <h3>Welcome to</h3>
      <img class="logo" alt="GMR logo" src="../assets/gmr_logo.png">
      <p class="next-run">Our next run will be:</p>
      <h2 class="date">{{date}}</h2>
      <div class="run-description">
        This week we will run from
        <a
          href="http://www.mountaintoadbrewing.com"
          target="_blank"
        >Mountain Toad Brewing</a> up North Table. The run is a classic out and back that reaches the highest point on North Table (Lichen Peak) and is one of the
        <a
          href="http://www.goldenhellweek.com"
          target="_blank"
        >2019 Golden Hell Week</a> routes. The total distance is just over 4.5 miles. After the run we will celebrate our activity with happy hour priced beers at Mountain Toad. See you Tuesday!
      </div>
      <p class="route">
        Route description:
        <a :href="link" target="_blank">{{link}}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RunDescription",
  data() {
    return {
      date: "Tuesday April 4th, 2019 6:15pm",
      link: "https://www.strava.com/routes/4737080"
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.description-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  // text-shadow: 0 2px 4px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
  .photo-container {
    flex: 1;
    height: 98%;
    img {
      height: 100%;
      border-radius: 10px;
    }
    @media only screen and (max-width: 450px) {
      display: none;
    }
    @media only screen and (max-width: 600px) {
      img {
        max-width: calc(570px - 2rem);
        max-height: calc(570px - 2rem);
      }
    }
    @media only screen and (max-width: 760px) {
      img {
        max-width: calc(730px - 2rem);
        max-height: calc(730px - 2rem);
      }
    }
  }
  .text-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    margin: 2rem;
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    .logo {
      height: 10rem;
      width: 10rem;
    }
    .run-description {
      text-align: justify;
      font-size: 1.5rem;
      box-shadow: 0;
    }
    .route {
      font-size: 1.25rem;
    }
    @media only screen and (max-width: 450px) {
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-size: 1.25rem;
      }
      .logo {
        height: 10rem;
        width: 10rem;
      }
      .run-description {
        text-align: justify;
        font-size: 1.1rem;
        box-shadow: 0;
      }
      .route {
        font-size: 1rem;
      }
    }
  }
}
</style>

