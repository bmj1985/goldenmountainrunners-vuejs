<template>
  <div class="home">
    <div class="welcome">
      <img alt="GMR logo" src="../assets/gmr_logo.svg">Welcome to Golden Mountain Runners!
    </div>
    <div class="run-info">
      <div class="photo">
      <img alt="Golden Mountain runners action photo" src="../assets/northtable.png">
      </div>
      <div class="description">
        <p class="next-run">Our next run will be:</p>
      <h3 class="date">{{date}}</h3>
      <RunDescription/>
      <p>Route description: <a :href="link"> {{link}}</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RunDescription from "../components/RunDescription.vue";

export default Vue.extend({
  name: "home",
  components: { RunDescription },
  data() {
    return {
      date: "Tuesday April 4th, 2019 6:15pm",
      link: "https://www.strava.com/routes/4737080"
    };
  }
});
</script>

<style lang="scss" scoped>
@import "colors";
.home {
  display: grid;
  grid-template-areas:
    ". welcome welcome welcome ."
    "description description description description description"
    "description description description description description"
    "description description description description description"
        "description description description description description";
  grid-template-rows: 1fr 1fr 2fr 2fr 1fr;
  grid-template-columns: 1fr 1fr 2fr 2fr 1fr;
  height: 100%;
  .welcome {
    grid-area: welcome;
    /* border: solid 2px black; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: $primary-4;
    height: 55%;
    border-radius: 10px;
    margin: 2rem;
    font-size: 3.5rem;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    img {
      height: 100px;
    }
  }

  .run-info {
    grid-area: description;
    margin: 2rem;
    padding: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  
  .photo {
    height: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-height: 100%;
      border-radius: 10px;
    }
  }

  .description {
    border: soldi 2px red;
    margin: 2rem;
    padding: 1rem;
    .next-run {
      font-size: 0.9rem;
    }
    h3 {
      font-size: 2rem;
      font-weight: 800;
      margin: 1rem;
    }
    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 1.1;
    }
  }
  }
}
</style>
