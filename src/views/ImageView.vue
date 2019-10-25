<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 p-0">
        <div class="card p-2 border-0" style="width: 18rem;">
          <img :src="selectedImg.src.large" class="card-img-top" alt width="700" height="300" />
          <div class="card-body">
            <p class="card-text font-weight-bold">{{selectedImg.photographer}}</p>
            <a
              :href="selectedImg.src.original"
              download="image.png"
              class="btn btn-success"
              target="_blank"
            >Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedImg: ""
    };
  },
  methods: {
    loadImage() {
      let imgId = this.$route.params.id;
      // alert(imgId);
      let results = JSON.parse(localStorage.getItem("Results"));
      let image = results.photos.filter(img => img.id == imgId);
      alert(JSON.stringify(image));
      // alert(JSON.stringify(results.photos));
      this.selectedImg = image[0];
    }
  },
  mounted() {
    this.loadImage();
  }
};
</script>

<style>
</style>