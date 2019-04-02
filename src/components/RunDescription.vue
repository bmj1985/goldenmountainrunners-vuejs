<template>
  <div
    class="run-description"
  >This week we will run from <a href="http://www.mountaintoadbrewing.com" target="_blank">Mountain Toad Brewing</a> up North Table. The run is a classic out and back that reaches the highest point on North Table (Lichen Peak) and is one of the <a href="http://www.goldenhellweek.com" target="_blank">2019 Golden Hell Week</a> routes. The total distance is just over 4.5 miles. After the run we will celebrate our activity with happy hour priced beers at Mountain Toad. See you Tuesday!</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RunDescription",
  props: {
    msg: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.run-description {
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1.1;
}
a {
  text-decoration: none;
}
</style>
