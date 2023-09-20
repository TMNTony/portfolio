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
        <section class="relative py-16 bg-gray-300">
          <div class="container mx-auto px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
            >
              <div class="px-6">
                <div
                  class="flex flex-col items-center justify-around mt-12">
                </div>
              </div>
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
  export default {
    name: "profile-page",
    components: {
      NavbarComponent,
      FooterComponent,
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
    },
    created() {
      this.getProjects();
    },
  };
  </script>