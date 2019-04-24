<template>
  <div class="description-container">
    <div class="photo-container">
      <img id="pic" alt="Golden Mountain runners action photo" src="../assets/northtable.png">
    </div>
    <div class="text-container">
      <div class="major-details">
        <h3>Welcome to</h3>
        <img class="logo" alt="GMR logo" src="../assets/gmr_logo.png">
        <p class="next-run">Our next run will be:</p>
        <h2 class="date">{{nextEvent ? nextEventDate : nextTuesdayPretty}} {{time}}</h2>
        <p class="location" v-if="nextEvent">
          Where:
          <a :href="googleMapsLink ? googleMapsLink : null" target="_blank">{{location}}</a>
        </p>
      </div>
      <div class="run-description">
        <h2 class="title">{{nextEvent ? nextEvent.title : title}}</h2>
        <div v-if="!details" :class="{pending: pendingRunDetails }">{{pendingRunDetails}}</div>
        <div v-else class="run-details">
          <p v-for="detail in details" :key="detail.dateTime">{{detail}}</p>
        </div>
        <p class="route" v-if="nextEvent">
          Route description:
          <a :href="runRouteLink" target="_blank">{{runRouteLink}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  isTuesday,
  eachDay,
  addDays,
  format,
  isAfter,
  isBefore,
  parse
} from "date-fns";

interface GMREvent {
  dateTime: string;
  details: Array<string>;
  googleMapsLink: string;
  location: string;
  runRouteLink: string;
  time: string;
  title: string;
}

export default Vue.extend({
  name: "RunDescription",
  data() {
    return {
      pendingRunDetails:
        "Stay tuned! Details on next Tuesday's run will generally be posted sometime between Thursday and Monday prior."
    };
  },
  computed: {
    nextTuesday(): Date {
      const oneWeekFromToday: Date = addDays(new Date(), 7);
      const daysArr: Array<Date> = eachDay(new Date(), oneWeekFromToday);
      // @ts-ignore
      const tuesday!: Date = daysArr.find(v => isTuesday(v));
      return parse(tuesday);
    },
    nextTuesdayPretty(): string {
      return format(this.nextTuesday, "dddd MMMM Do, YYYY");
    },
    events(): Array<GMREvent> {
      return this.$store.state.events;
    },
    nextEvent(): GMREvent | null {
      return (
        this.events &&
        this.events.filter((event: GMREvent) => {
          return (
            this.nextTuesday &&
            isAfter(new Date(event.dateTime), new Date()) &&
            isBefore(
              new Date(event.dateTime),
              addDays(new Date(this.nextTuesday), 1)
            )
          );
        })[0]
      );
    },
    nextEventDate() {
      return (
        this.nextEvent &&
        format(new Date(this.nextEvent.dateTime), "dddd MMMM Do, YYYY")
      );
    },
    details() {
      return this.nextEvent && this.nextEvent.details;
    },
    title() {
      return this.nextEvent && this.nextEvent.title;
    },
    googleMapsLink() {
      return this.nextEvent && this.nextEvent.googleMapsLink;
    },
    location() {
      return this.nextEvent && this.nextEvent.location;
    },
    runRouteLink() {
      return this.nextEvent && this.nextEvent.runRouteLink;
    },
    time() {
      return this.nextEvent && this.nextEvent.time;
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
    .major-details {
      height: 55%;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 2rem;
        @media only screen and (max-width: 450px) {
          font-size: 1rem;
        }
      }
      h3 {
        font-size: 1.75rem;
      }
      .logo {
        height: 10rem;
        width: 10rem;
        @media only screen and (max-width: 450px) {
          height: 7rem;
          width: 7rem;
        }
      }
      /* .next-run {
      }
      .date {
      }
      .location {
      } */
    }
    .run-description {
      margin-top: 1rem;
      height: 45%;
      line-height: 1.1;
      h2 {
        font-size: 1.25rem;
        text-align: center;
        font-weight: 800;
      }
      p {
        margin-top: 0.75rem;
      }
      &.pending {
        text-align: center;
      }
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
        &.pending {
          text-align: center;
        }
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

