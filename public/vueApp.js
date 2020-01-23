const url =
  "https://rata.digitraffic.fi/api/v1/metadata/stations";

const vm = new Vue({
  el: "#demo",
  data: {
    results: []
  },
  mounted() {
    axios.get(url).then(response => {
      this.results = response.data;
    });
  }
});
