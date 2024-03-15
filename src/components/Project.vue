<template>
  <div
    class="relative mb-6 w-full min-w-0 break-words rounded-lg bg-white px-6 shadow-xl"
  >
    <div class="mt-12 flex flex-col items-center justify-around">
      <div
        class="mb-2 mt-0 text-center text-xl font-bold uppercase leading-normal text-gray-500"
      >
        {{ project.name }}
      </div>
      <div
        v-if="project.pictures.length > 0"
        @click="showPics()"
        class="mb-2 mt-0 cursor-pointer text-sm leading-normal text-blue-500"
      >
        Show Pictures
      </div>
      <a
        v-if="project.site != null"
        :href="project.site"
        target="_blank"
        rel="noopener noreferrer"
        class="mb-2 mt-0 cursor-pointer text-sm leading-normal text-blue-500"
      >
        Go To Site
      </a>
      <div v-if="showPictures" class="flex">
        <div
          v-for="picture in project.pictures"
          :key="picture"
          class="relative m-10 cursor-pointer border hover:border-indigo-500"
        >
          <img
            :src="imageUrl(picture)"
            alt="Example Image"
            class="z-0 h-32 w-32"
            @click.prevent="openModal(picture)"
          />
        </div>
        <!-- Modal -->
      </div>
      <div class="flex justify-center flex-wrap space-x-5">
        <div
          v-for="skill in project.skills"
          :key="skill"
          class=" flex mb-2 mt-0  text-sm font-bold uppercase leading-normal text-gray-500"
        >
          <i class="fas fa-cog mr-2 text-green-500"></i>
          {{ skill }}
        </div>
      </div>
      <div class="mb-2 mt-0 w-2/3 text-sm leading-normal">
        {{ project.description }}
      </div>
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="mb-2 mt-0 text-sm font-bold uppercase leading-normal text-blue-500"
        >My Code</a
      >
    </div>
  </div>
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 outline-none focus:outline-none"
  >
    <a
      class="z-100 fixed right-8 top-6 text-5xl font-bold text-white"
      href="javascript:void(0)"
      @click="closeModal"
      >&times;</a
    >
    <img :src="modalImageUrl" id="modal-img" class="z-100 object-cover" />
  </div>
</template>

<script>
export default {
  name: "project",
  props: {
    project: Object,
  },
  data() {
    return {
      showModal: false,
      showPictures: false,
      modalImageUrl: "",
    };
  },
  methods: {
    imageUrl(imagePath) {
      return new URL(`/src/assets/${imagePath}`, import.meta.url);
    },
    openModal(imagePath) {
      this.modalImageUrl = new URL(`/src/assets/${imagePath}`, import.meta.url);
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    showPics() {
      this.showPictures = !this.showPictures;
    },
  },
};
</script>