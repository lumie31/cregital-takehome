<template>
  <div class="about">
    <h1>This is the results page</h1>
    <div class="container">
      <div class="d-flex justify-content-between">
        <button @click.prevent="getPrev" class="btn btn-info" v-if="isMultiplePage">Prev</button>
        <button @click.prevent="getNext" class="btn btn-info">Next</button>
      </div>
      <div class="row">
        <div
          class="col-md-3 p-0"
          v-for="(result, index) in searchResults.photos"
          :key="index"
          :id="result.id"
          @click.prevent="viewImage($event)"
        >
          <div class="card p-2 border-0" style="width: 18rem;">
            <img
              :src="result.src.medium"
              class="card-img-top"
              :alt="result.src.photographer"
              width="286"
              height="191"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import toastr from "toastr";

export default {
  data() {
    return {
      searchResults: [],
      isMultiplePage: false,
      nextUrl: "",
      prevUrl: ""
    };
  },
  methods: {
    getData() {
      let result = JSON.parse(localStorage.getItem("Results"));
      this.searchResults = result;
      this.nextUrl = result.next_page ? result.next_page : "";
      if (result.prev_page) {
        this.prevUrl = result.prev_page;
        this.isMultiplePage = true;
      } else {
        this.isMultiplePage = false;
      }
    },
    getNext() {
      axios
        .get(this.nextUrl)
        .then(response => {
          // JSON responses are automatically parsed.
          let results = response.data;
          localStorage.removeItem("Results");
          localStorage.setItem("Results", JSON.stringify(results));
          toastr.success("Search successful!");
          this.getData();
        })
        .catch(e => {
          let error = e.error;
          // localStorage.setItem("Error", JSON.stringify(error));
          toastr.warning(error);
        });
    },
    getPrev() {
      axios
        .get(this.prevUrl)
        .then(response => {
          // JSON responses are automatically parsed.
          let results = response.data;
          localStorage.removeItem("Results");
          localStorage.setItem("Results", JSON.stringify(results));
          toastr.success("Search successful!");
          this.getData();
        })
        .catch(e => {
          let error = e.error;
          // localStorage.setItem("Error", JSON.stringify(error));
          toastr.warning(error);
        });
    },
    viewImage(event) {
      let id = event.currentTarget.id;
      this.$router.push(`/imageView/${id}`);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>