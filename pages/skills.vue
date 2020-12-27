<template>
  <section class="background">
    <div class="">
      <div
        class="pt-20 container mx-auto flex flex-col items-center justify-center"
      >
        <p class="p-3 text-gray-700 font-medium uppercase border-b-2">
          Add new personal skill
        </p>

        <div
          class="flex flex-col sm:justify-start xs:justify-center xs:items-center "
        >
          <p class="p-2 text-gray-700 font-medium uppercase pb-0">skill name</p>
          <div class="flex justify-center">
            <input
              type="text"
              placeholder="Enter your skill"
              class="border-2 border-gray-400 w-64 xs:w-52 h-10 m-5 p-6 rounded-md hover:border-gray-500"
            />
          </div>

          <p class="p-2 text-gray-700 font-medium uppercase pb-0">
            Enter your certificate time
          </p>
          <div class="flex flex-col justify-center items-center">
            <form action="" class="flex flex-col">
              <input
                class="m-5 border-2 border-gray-400 rounded-md p-3 w-64 hover:border-gray-50"
                type="date"
                id="skill"
                name="skill"
              />
              <div class="flex items-end justify-end">
                <button
                  type="submit"
                  class="m-5 mt-0 px-3 py-2 text-gray-700 hover:text-gray-900 bg-gray-400 w-20 rounded-md font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <p class="p-3 text-gray-700 font-medium uppercase">
            Explain your skill
          </p>
          <textarea
            class="bg-gray-200 p-3 m-5 rounded-md focus:border-none focus:bg-gray-100 xs:w-64 border-2 border-gray-400 hover:border-gray-500"
            name=""
            id=""
            cols="50"
            rows="10"
          ></textarea>
          <div class="flex flex-col justify-center">
            <p class="p-2 text-gray-700 font-medium uppercase">
              Upload your certificate image:
            </p>
            <div
              class="border-dashed border-2 border-gray-500 p-2 m-3 rounded-md xs:w-64"
            >
              <p class="p-3 text-gray-700 font-medium">
                You can choose your image to upload
              </p>
              <div class="flex flex-col justify-center items-center">
                <input
                  type="file"
                  name="file"
                  id="file"
                  @change="previewImage"
                  accept="image/*"
                  class="overflow-hidden z-0 opacity-0 w-0 h-0"
                />
                <label for="file" class="text-sm text-gray-500 hover:text-gray-700 border-2 mb-2 p-3 rounded-md"
                  >Choose a file</label
                >
              </div>

              <div class="flex flex-col justify-center items-center m-2">
                <progress :value="uploadValue" max="100"></progress>
              </div>
              <div class=" uppercase"></div>
              <div
                class="flex justify-center items-center border-dashed border-2 border-gray-200 m-2"
              >
                <img class="preview w-52 h-40" :src="picture" />
              </div>
              <div class="flex justify-end items-end">
                <button
                  @click="onUpload"
                  class="m-2 px-3 py-2 bg-amber-200 text-gray-600 hover:text-gray-900 focus:text-gray-900 w-20 rounded-full font-medium "
                >
                  Upload
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-end justify-end">
            <button
              type="submit"
              class="m-5 mt-0 px-3 py-2 text-gray-700 hover:text-gray-900 bg-lime-500 w-20 rounded-md font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
          });
        }
      );
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("~assets/img/skateboard.svg");
  background-repeat: no-repeat;
  background-size: 40%;
  background-attachment: fixed;
  background-position: bottom right;
}
</style>
