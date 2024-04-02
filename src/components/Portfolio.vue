<template>
  <div class="flex flex-col">


    <h1 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2 text-center">
      Projects
    </h1>
    <section class="relative py-6 bg-gray-300">
      <div class="container mx-auto px-4">
        <div
            class="flex flex-col"
        >
          <project v-for="project in projects" :key="project.id" :project="project"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Project from "./Project.vue";

export default {
  name: "profile-page",
  components: {
    Project,
  },
  data() {
    return {
      projects: [],

    };
  },
  methods: {
    getProjects() {
      this.projects = this.$store.getters.getProjects;
    },
    showPics() {
      this.showPictures = !this.showPictures
    }
  },
  created() {
    this.getProjects();
  },
};
</script>
