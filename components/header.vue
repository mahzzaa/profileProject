<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-16 bg-gray-100 text-gray-700 border-b border-gray-200 z-10"
  >
    <div class="flex items-center">
      <button class="mr-2" aria-label="Open Menu" @click="drawer">
        <img class="h-10 w-10" src="~/assets/img/gear.svg" />
      </button>
      <div class="bg-clip-text text-gray-700">
        <p class="font-bold">Ehsan Motamedi</p>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="">
        <img
          class="h-12 w-12 flex justify-center items-center border-white border-4 focus:border-gray-500 hover:border-gray-400 rounded-full"
          src="https://avatars1.githubusercontent.com/u/61012284?s=460&u=f4da2fd1e9eb0c89ed6fb70c7edd434c2a30b6bb&v=4"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 left-0 w-64 bg-gray-100 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <button
        @click="isOpen = false"
        class="flex items-center w-full mt-3 mb-2 p-4 text-gray-500 font-medium hover:bg-gray-500 hover:text-white "
      >
        <button class="mr-2">
          <img class="h-8 w-8" src="~/assets/img/home.svg" alt="" srcset="" />
        </button>
        <a href="http://ehsan-motamedi.com/">Home</a>
      </button>
      <nuxt-link to="/info"
        @click="isOpen = false"
        class="flex items-center w-full mt-3 mb-2 text-gray-500 font-medium p-4 hover:bg-gray-500 hover:text-white ">
          <img class="h-8 w-8" src="~/assets/img/boy.svg" alt="" srcset="" />
        Info</nuxt-link>
        <nuxt-link to="/skills"
        @click="isOpen = false"
        class="flex items-center w-full mt-3 mb-2 text-gray-500 font-medium p-4 hover:bg-gray-500 hover:text-white ">
          <img class="h-8 w-8" src="~/assets/img/user.svg" alt="" srcset="" />
        Personal Skills</nuxt-link>
        <nuxt-link to="/champions"
        @click="isOpen = false"
        class="flex items-center w-full mt-3 mb-2 text-gray-500 font-medium p-4 hover:bg-gray-500 hover:text-white ">
          <img class="h-8 w-8" src="~/assets/img/trophy.svg" alt="" srcset="" />
        Champions</nuxt-link>
        <div class="fixed bottom-0 w-full">
        <button
          class="flex items-center p-4 text-white bg-gray-500 w-full"
        >
          <img class="h-8 w-8" src="~/assets/img/color-wheel.svg" alt="" srcset="" />
          <p class="text-gray-200 font-medium p-4 ">Theme</p>
        </button>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  },
};
</script>
