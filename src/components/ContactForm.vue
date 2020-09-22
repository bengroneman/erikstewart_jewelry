<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    netlify
  >
    <input type="hidden" name="contact" value="contact" />
    <h1 id="contact" class="text-6xl inline-block text-white">Contact</h1>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 pr-6 mb-6 md:mb-0">
        <label class="block tracking-wide text-white text-xs font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="name" type="text"
          placeholder="Full Name"
        >
      </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block tracking-wide text-white text-xs font-bold mb-2" for="emailaddress">
              Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="jane.doe@hey.com"
          >
        </div>
      </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <label for="message" class="block tracking-wide text-white text-xs font-bold mb-2">Message</label>
      <textarea
        class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="message"
        rows="4"
      ></textarea>
    </div>
    <button class="text-uppercase bg-blue-gray-e text-white p-2 mt-2 flex pl-6 pr-6 text-light-e">Submit form</button>
  </form>
</template>
