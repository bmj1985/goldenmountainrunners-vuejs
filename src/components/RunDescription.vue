<template>
  <div class="description-container">
    <div class="photo-container">
      <img id="pic" alt="Golden Mountain runners action photo" src="../assets/northtable.png">
    </div>
    <div class="text-container">
      <h3>Welcome to</h3>
      <img class="logo" alt="GMR logo" src="../assets/gmr_logo.png">
      <p class="next-run">Our next run will be:</p>
      <h2 class="date">{{date}} {{runTime}}</h2>
      <p>
        Where:
        <a href="https://goo.gl/maps/QpoQN1R1o7q" target="_blank">{{location}}</a>
      </p>
      <div class="run-description" :class="{pending: pendingRunDetails }">
        <!-- {{pendingRunDetails}} -->
        <p>***If you want to demo shoes show up at 6:00 so you can get fitted and we can start the run as close to 6:15 as possible***</p>
        <p>
          This week will be teaming up with our friends at <a href="https://www.vitaloutdoors.com/" target="_blank">Vital Outdoors</a> to do a demo run with Altra Shoes. We should have a variety of Altra’s to try out. Likely the TIMP, Lone Peak and Superior at a minimum. Vital will be offering a 20% discount on any Altra Shoes purchased or ordered the night of the event! In addition, we will likely have some Altra Swag to raffle at the end of the run for all those who took some demo shoes for spin. The run route for this event will take us through town and part way up Chimney Gulch (to the first Lookout Mountain Road Crossing). The total distance is 4 miles. After the run we will head to
          <a
            href="http://www.mountaintoadbrewing.com"
            target="_blank"
          >Mountain Toad Brewing</a> to talk about how awesome Altra Shoes are!
        </p>
        <p class="route">
          Route description:
          <a :href="link" target="_blank">{{link}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { isTuesday, eachDay, addDays, format } from "date-fns";

export default Vue.extend({
  name: "RunDescription",
  data() {
    return {
      pendingRunDetails:
        "Stay tuned! Details on next Tuesday's run will generally be posted sometime between Thursday and Monday prior.",
      link: "https://www.gmap-pedometer.com/?r=7203287",
      runTime: "6:15pm",
      location: "Vital Outdoors, 1224 Washington Ave, Golden, CO 80401"
    };
  },
  computed: {
    date: function() {
      const oneWeekFromToday = addDays(new Date(), 7);
      const daysArr = eachDay(new Date(), oneWeekFromToday);
      const tuesday = daysArr.find(v => isTuesday(v));
      return tuesday ? format(tuesday, "dddd MMMM Do, YYYY") : null;
    }
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
  a {
    text-decoration: none;
    color: #365899;
  }
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
    overflow: scroll;
    @media only screen and (max-width: 450px) {
      margin: 0;
      justify-content: flex-start;
      align-items: space-evenly;
      line-height: 1.2;
      text-align: center;
    }
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
      /* &.pending {
              text-align: center;
          } */
      text-align: justify;
      font-size: 1.25rem;
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
        height: 7rem;
        width: 7rem;
      }
      .run-description {
        /* &.pending {
              text-align: center;
          } */
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

