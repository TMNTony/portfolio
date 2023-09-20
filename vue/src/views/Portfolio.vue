<template>
  <div>
    <navbar-component></navbar-component>
    <main class="portfolio-page">
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://www.birminghamal.gov/wp-content/uploads/2014/06/iStock_000020097816_Medium.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-6 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
          class="flex flex-col -mt-64"
          >
          <project v-for="project in projects" :key="project.id" :project="project"   />
          </div>
        </div>
      </section>

    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import Project from "../components/Project.vue";
export default {
  name: "profile-page",
  components: {
    NavbarComponent,
    FooterComponent,
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
    showPics(){
        this.showPictures = !this.showPictures
    }
  },
  created() {
    this.getProjects();
  },
};
</script>
