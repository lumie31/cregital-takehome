<template>
  <div class="hello">
    <h1 class="font-weight-bold">Search for anything!</h1>
    <br />
    <div class="h-100 d-flex justify-content-center">
      <form class="input-group flex-column" style="width: 50%">
        <input
          v-model="searchInput"
          type="text"
          placeholder="Search for something (e.g cat...)"
          class="form-control w-100"
          style="border-radius: 50px"
        />
        <br />
        <button
          type="submit"
          @click.prevent="search(searchInput)"
          class="btn btn-primary mx-auto"
        >Search</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import toastr from "toastr";

export default {
  name: "HelloWorld",
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    search() {
      if (!this.searchInput) {
        return;
      } else {
        axios
          .get(
            `https://api.pexels.com/v1/search?query=${this.searchInput}&per_page=20&page=1`
          )
          .then(response => {
            // JSON responses are automatically parsed.
            let results = response.data;
            localStorage.setItem("Results", JSON.stringify(results));
            toastr.success("Search successful!");
            this.$router.push("/results");
          })
          .catch(e => {
            let error = e.error;
            // localStorage.setItem("Error", JSON.stringify(error));
            toastr.warning(error);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
