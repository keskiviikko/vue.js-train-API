<template>
  <div class="search">
    <h1>{{ msg }}</h1>
    <div>
      <p>
        Start Station:
        <input type="text" placeholder="Add start station" />
      </p>
      <p>
        End Station:
        <input type="text" placeholder="Add end station" />
      </p>

      <p>
        <button id="btnSearch" type="button">Search</button>
      </p>
    </div>
    <Table />
  </div>
</template>

<script>
import Table from "./Table";

export default {
  name: "Search",
  components: {
    Table
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
