<template>
  <div class="hello h-100 d-flex align-items-center mx-5">
    <form class="input-group">
      <input v-model="searchInput" type="text" placeholder="Search..." class="form-control" /> &nbsp;
      <button type="submit" @click.prevent="search" class="btn btn-primary">Search</button>
    </form>
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
      alert(this.searchInput);
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
<style scoped>
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
