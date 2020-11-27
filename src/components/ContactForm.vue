<template>
  <form
    name="contact"
    id="contact-form"
    method="post"
    @submit.prevent="handleSubmit"
    action="/success/"
  >
    <input type="hidden" name="contact" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>
    <h1 id="contact" class="text-6xl inline-block text-white">Contact</h1>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
        <label class="block tracking-wide text-white text-xs font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="name"
          type="text"
          placeholder="Full Name"
          name="name"
          v-model="formData.name"
        />
      </div>
        <div class="w-full md:w-1/2">
          <label class="block tracking-wide text-white text-xs font-bold mb-2" for="emailaddress">
              Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="emailaddress"
            type="text"
            placeholder="jane.doe@hey.com"
            name="emailaddress"
            v-model="formData.emailaddress"
          />
        </div>
      </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <label for="message" class="block tracking-wide text-white text-xs font-bold mb-2">Message</label>
      <textarea
        class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="message"
        rows="4"
        name="message"
        v-model="formData.message"
      ></textarea>
    </div>
    <button type="submit" class="ml-0 mx-auto text-uppercase bg-blue-gray-e text-white p-2 mt-2 flex pl-6 pr-6 text-light-e">Submit</button>
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