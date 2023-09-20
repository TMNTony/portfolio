<template>
  <div
    class="min-w-0 break-words relative px-6 bg-white w-full mb-6 shadow-xl rounded-lg"
  >
    <div class="flex flex-col items-center justify-around mt-12">
      <div
        class="text-xl leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
      >
        {{ project.name }}
      </div>
      <div class="flex">
        <div
          v-for="picture in project.pictures"
          :key="picture"
          class="relative m-10 border hover:border-indigo-500"
        >
          <img
            :src="picture"
            alt=""
            class="w-32 h-32 z-0"
            @click.prevent="openModal(picture)"
          />
        </div>
        <!-- Modal -->
      </div>
      <div class="flex space-x-5">
        <div
          v-for="skill in project.skills"
          :key="skill"
          class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
        >
          <i class="fas fa-cog text-green-500 mr-2"></i>
          {{ skill }}
        </div>
      </div>
      <div class="text-sm leading-normal mt-0 mb-2 w-2/3">
        {{ project.description }}
      </div>
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm leading-normal mt-0 mb-2 text-blue-500 font-bold uppercase"
        >My Code</a
      >
    </div>
  </div>
  <div
    v-if="showModal"
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-black/70"
  >
    <a
      class="fixed z-100 top-6 right-8 text-white text-5xl font-bold"
      href="javascript:void(0)"
      @click="closeModal"
      >&times;</a
    >
    <img
      :src="modalImageUrl"
      id="modal-img"
      class="max-w-[800px] max-h-[600px] object-cover z-100"
    />
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
      modalImageUrl: "",
    };
  },
  methods: {
    openModal(imageUrl) {
      this.modalImageUrl = imageUrl;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
