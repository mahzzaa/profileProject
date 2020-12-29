<template>
  <section
    class="h-screen xs:h-full bg-left-bottom bg-no-repeat bg-background-info bg-64 xs:bg-48 xs:bg-left-bottom bg-scroll xs:bg-opacity-0"
  >
    <div class="">
      <div
        class="pt-20 container mx-auto flex flex-col items-center justify-center"
      >
        <div
          class="flex flex-row w-3/4 flex flex-row xs:flex-col justify-center items-center border-b-2 border-gray-200"
        >
          <div
            class="w-1/2 flex flex-col m-6 xs:justify-center xs:items-center"
          >
            <p class="uppercase tracker-tighter text-gray-700 font-medium">
              First Name
            </p>
            <input
              class="border-2 w-64 xs:w-52 h-10 m-2 p-6 rounded-md"
              type="text"
              placeholder="Enter your firstname"
            />
            <p class="uppercase tracker-tighter text-gray-700 font-medium">
              Last Name
            </p>
            <input
              class="border-2 w-64 xs:w-52 h-10 m-2 p-6 rounded-md"
              type="text"
              placeholder="Enter your lastname"
            />
          </div>
          <div
            class="w-1/2 m-6 flex flex-col justify-end items-end xs:justify-center xs:items-center"
          >
            <div class="flex flex-col justify-center items-center">
              <p
                class="uppercase tracker-tighter text-gray-700 font-medium font-medium"
              >
                My Avatar
              </p>
              <div class="flex justify-center items-center m-2">
                <img
                  class="w-24 h-24 border-gray-400 felx flex-col justify-center items-center border-4 rounded-full"
                  src="https://avatars1.githubusercontent.com/u/61012284?s=400&u=f4da2fd1e9eb0c89ed6fb70c7edd434c2a30b6bb&v=4"
                  alt=""
                  srcset=""
                />
              </div>

              <button
                class="focus:bg-green-light uppercase bg-gray-400 m-2 px-2 py-2 w-28 rounded-md tracker-tighter font-medium text-gray-100 update-btn hover:bg-gray-500 focus:outline-none hover:shadow-md"
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div
          class="flex flex-row w-3/4 flex flex-row xs:flex-col justify-between items-center border-b-2 border-gray-200 p-6"
        >
          <div class="">
            <p class="m-2 text-gray-700 font-medium">Email Adress</p>
            <p class="m-2 text-gray-700 font-medium">
              Your email adress is
              <span class="font-bold">Ehsan.8643@gmail.com</span>
            </p>
          </div>
          <div class="">
            <button
              @click="toggleModal1 = !toggleModal1"
              class="focus:bg-yellow-light uppercase bg-gray-400 m-2 px-2 py-2 w-28 rounded-md tracker-tighter font-medium text-gray-100 hover:bg-gray-600 focus:outline-none hover:shadow-md"
            >
              Change
            </button>

            <div
              v-if="toggleModal"
              class="h-screen fixed z-40 inset-0 opacity-25 bg-black"
            ></div>
            <div
              v-if="toggleModal"
              class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
            >
              <div
                class="absolute mx-auto w-auto max-w-2xl flex flex-col jstify-center items-center"
              >
                <div
                  class="bg-white w-full flex flex-col p-5 m-5 flex justify-center items-center shadow-lg rounded-md"
                >
                  <span
                    class="m-2 p-2 flex justify-center items-center font-medium text-gray-900"
                    ><div class="flex flex-col justify-center items-center">
                      <img
                        src="~/assets/img/fingerprint.svg"
                        class="w-12 h-12"
                        alt=""
                        srcset=""
                      />
                      <p class="text-md text-gray-700">
                        Reset your password
                      </p>
                    </div>
                  </span>
                  <div class="flex flex-col justify-center items-center">
                    <div class="flex flex-col justify-start items-start">
                      <label
                        for="password1"
                        class="text-xs text-gray-700 font-medium"
                        >Current Password</label
                      >
                      <input
                        id="password1"
                        class="border-2 w-64 xs:w-52 h-6 m-2 p-5 rounded-md focus:outline-none placeholder-opacity-50 placeholder-gray-700 focus:placeholder-gray-400"
                        type="password"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div class="flex flex-col justify-start items-start">
                      <label
                        for="password1"
                        class="text-xs text-gray-700 font-medium"
                        >New Password</label
                      >
                      <input
                        id="password1"
                        class="border-2 w-64 xs:w-52 h-6 m-2 p-5 rounded-md focus:outline-none placeholder-opacity-50 placeholder-gray-700 focus:placeholder-gray-400"
                        type="password"
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div class="flex flex-col justify-start items-start">
                      <label
                        for="password1"
                        class="text-xs text-gray-700 font-medium"
                        >Confirm New Password</label
                      >
                      <input
                        id="password1"
                        class="border-2 w-64 xs:w-52 h-6 m-2 p-5 rounded-md focus:outline-none placeholder-opacity-50 placeholder-gray-700 focus:placeholder-gray-400"
                        type="password"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <button
                      class="px-6 py-2 m-2 text-gray-200 bg-lime-700 focus:bg-green-400 focus:text-green-200 hover:bg-green-400 hover:text-gray-200 rounded-md font-medium focus:outline-none flex justify-center items-center w-20"
                      @click="toggleModal = false"
                    >
                      Close
                    </button>
                    <button
                      class="px-6 py-2 text-gray-200 bg-red-50 focus:bg-red-400 focus:text-gray-200 hover:bg-red-400 hover:text-gray-200 rounded-md font-medium focus:outline-none flex justify-center items-center w-20"
                      @click="toggleModal = false"
                    >
                      save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="toggleModal1"
              class="h-screen fixed z-40 inset-0 opacity-25 bg-black"
            ></div>
            <div
              v-if="toggleModal1"
              class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
            >
              <div
                class="absolute mx-auto w-auto max-w-2xl flex flex-col jstify-center items-center"
              >
                <div
                  class="bg-white w-full flex flex-col p-5 m-5 flex justify-center items-center shadow-lg rounded-md"
                >
                  <span
                    class="p-2 flex justify-center items-center font-medium text-gray-900"
                  >
                    <div class="flex flex-col justify-center items-center">
                      <img
                        src="~/assets/img/gmail.svg"
                        class="w-12 h-12"
                        alt=""
                        srcset=""
                      />
                      <p class="text-md text-gray-700">
                        Type your email adress
                      </p>
                    </div>
                  </span>
                  <div class="flex flex-col justify-center items-center">
                    <div class="flex flex-col justify-start items-start">
                      <input
                        id="password1"
                        class="border-2 w-64 xs:w-52 h-6 m-2 p-5 rounded-md focus:outline-none placeholder-opacity-50 placeholder-gray-700 focus:placeholder-gray-400"
                        type="password"
                        placeholder="Enter your current password"
                      />
                    </div>
                  </div>
                  <div class="flex justify-center items-center">
                    <button
                      class="px-6 py-2 m-2 text-gray-200 bg-lime-700 focus:bg-green-400 focus:text-green-200 hover:bg-green-400 hover:text-gray-200 rounded-md font-medium focus:outline-none flex justify-center items-center w-20"
                      @click="toggleModal1 = false"
                    >
                      Close
                    </button>
                    <button
                      class="px-6 py-2 text-gray-200 bg-red-50 focus:bg-red-400 focus:text-gray-200 hover:bg-red-400 hover:text-gray-200 rounded-md font-medium focus:outline-none flex justify-center items-center w-20"
                      @click="toggleModal1 = false"
                    >
                      save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-row w-3/4 flex flex-row xs:flex-col justify-between items-center border-b-2 border-gray-200 p-6"
        >
          <div class="flex flex-col">
            <p class="m-2 text-gray-700 font-medium">Password</p>
          </div>

          <button
            @click="toggleModal = !toggleModal"
            class="uppercase bg-gray-400 m-2 px-2 py-2 w-28 rounded-md tracker-tighter font-medium text-gray-100 hover:bg-gray-600 focus:bg-red-50 focus:outline-none hover:shadow-md"
          >
            Change
          </button>
        </div>
        <div
          class="flex flex-col w-3/4 justify-center items-center border-gray-200"
        >
          <div class="flex justify-start items-start">
            <p
              class="m-4 text-gray-700 font-medium flex justify-start items-start"
            >
              choose your language
            </p>
          </div>

          <div class="flex-wrap">
            <div class="flex flex-row">
              <button
                class="w-1/3 border-2 border-r-0 border-b-0 border-gray-400 px-4 py-2 text-gray-400 font-medium hover:bg-gray-400 hover:text-gray-700 focus:bg-gray-500"
              >
                <div class="flex flex-row justify-center items-center">
                  <img
                    class="w-5 h-5"
                    src="https://www.flaticon.com/svg/static/icons/svg/940/940207.svg"
                    alt=""
                    srcset=""
                  />
                  <p>English</p>
                </div>
              </button>
              <button
                class="w-1/3 border-2 border-r-0 border-b-0 border-gray-400 px-4 py-2 text-gray-400 font-medium hover:bg-gray-400 hover:text-gray-700 focus:bg-gray-500"
              >
                <div class="flex flex-row justify-center items-center">
                  <img
                    class="w-5 h-5"
                    src="~/assets/img/iran.svg"
                    alt=""
                    srcset=""
                  />
                  <p>Persian</p>
                </div>
              </button>
              <button
                class="w-1/3 border-2 border-b-0 border-gray-400 px-4 py-2 text-gray-400 font-medium hover:bg-gray-400 hover:text-gray-700 focus:bg-gray-500"
              >
                <div class="flex flex-row justify-center items-center">
                  <img
                    class="w-5 h-5"
                    src="https://www.flaticon.com/svg/static/icons/svg/206/206818.svg"
                    alt=""
                    srcset=""
                  />
                  <p>chinese</p>
                </div>
              </button>
            </div>
            <div class="flex flex-row">
              <button
                class="w-1/3 border-2 border-r-0 border-gray-400 px-4 py-2 text-gray-400 font-medium hover:bg-gray-400 hover:text-gray-700 focus:bg-gray-500"
              >
                <div class="flex flex-row justify-center items-center">
                  <img
                    class="w-5 h-5"
                    src="https://www.flaticon.com/svg/static/icons/svg/555/555602.svg"
                    alt=""
                    srcset=""
                  />
                  <p>French</p>
                </div>
              </button>
              <button
                class="w-1/3 border-2 border-r-0 border-gray-400 px-4 py-2 text-gray-400 font-medium hover:bg-gray-400 hover:text-gray-700 focus:bg-gray-500"
              >
                <div class="flex flex-row justify-center items-center">
                  <img
                    class="w-5 h-5"
                    src="~/assets/img/italy.svg"
                    alt=""
                    srcset=""
                  />
                  <p>Italy</p>
                </div>
              </button>
              <button
                class="w-1/3 border-2 border-gray-400 px-4 py-2 text-gray-400 font-medium hover:bg-gray-400 hover:text-gray-700 focus:bg-gray-500"
              >
                <div class="flex flex-row justify-center items-center">
                  <img
                    class="w-5 h-5"
                    src="https://www.flaticon.com/svg/static/icons/svg/555/555560.svg"
                    alt=""
                    srcset=""
                  />
                  <p>Turkish</p>
                </div>
              </button>
            </div>
          </div>
          <div class="p-2 m-3">
            <button
              class="px-6 py-2 text-gray-700 focus:bg-gray-400 focus:text-gray-200 hover:bg-gray-500 hover:text-gray-200 rounded-md font-medium focus:outline-none hover:shadow-md"
            >
              cancel
            </button>
            <button
              class="px-10 py-2 bg-gray-500 text-gray-200 focus:bg-gray-700 focus:text-gray-200 hover:bg-gray-700 hover:text-gray-200 rounded-md font-medium focus:outline-none hover:shadow-md"
            >
              change
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      toggleModal: false,
      toggleModal1: false
    };
  }
};
</script>

<style scoped></style>
