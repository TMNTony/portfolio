<template>
  <div>
    <navbar-component></navbar-component>
    <main class="profile-page">
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
              <div class="flex flex-row items-center justify-around mt-12">
                <!-- Profile Image -->
                <div class="w-96 h-96 rounded-full overflow-hidden">
                  <img
                    src="../assets/Anthony Calrson.jpeg"
                    alt="profile picture"
                    class="w-full h-full object-cover object-top"
                  />
                </div>

                <!-- Profile Details -->
                <div class="flex flex-col align-center">
                  <h3
                    class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                  >
                    Tony Carlson
                  </h3>
                  <div
                    class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                  >
                    <i
                      class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                    ></i>
                    Birmingham, Alabama
                  </div>
                  <div class="mb-2 text-gray-700 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                    >Software Developer
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                    >University of Alabama
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                    >University of North Texas
                  </div>
                  <div class="mb-2 text-gray-700">
                    <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                    >TechElevator
                  </div>
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      I am a software developer with a background in music and
                      higher education. I have a solid foundation in software
                      and web development. I am known for my problem-solving
                      abilities, meticulous attention to detail, and a passion
                      for continuous learning. My unique blend of music and
                      education experience adds diversity and valuable insights
                      to any project.
                    </p>
                    <router-link :to="{ name: 'portfolio' }">My Portfolio</router-link>
                  </div>
                </div>
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
};
</script>
