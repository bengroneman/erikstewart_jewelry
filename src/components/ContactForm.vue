<template>
  <form
    id="contact-form"
    name="contact"
    method="post"
    action="/success/"
    @submit.prevent="handleSubmit"
  >
    <input
      type="hidden"
      name="contact"
      value="contact"
    >
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field">
      </label>
    </p>
    <h2
      id="contact"
      class="text-white"
    >
      Contact
    </h2>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
        <label
          class="block tracking-wide text-white text-xs font-bold mb-2"
          for="name"
        >
          Name
        </label>
        <input
          id="name"
          v-model="formData.name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Full Name"
          name="name"
        >
      </div>
      <div class="w-full md:w-1/2">
        <label
          class="block tracking-wide text-white text-xs font-bold mb-2"
          for="emailaddress"
        >
          Email
        </label>
        <input
          id="emailaddress"
          v-model="formData.emailaddress"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="jane.doe@hey.com"
          name="emailaddress"
        >
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <label
        for="message"
        class="block tracking-wide text-white text-xs font-bold mb-2"
      >Message</label>
      <textarea
        id="message"
        v-model="formData.message"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        rows="4"
        name="message"
      />
    </div>
    <button
      type="submit"
      class="ml-0 mx-auto text-uppercase bg-blue-gray-e text-white p-2 mt-2 flex pl-6 pr-6 text-light-e"
    >
      Submit
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  }
}
</script>