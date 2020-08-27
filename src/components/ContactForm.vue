<template>
  <form class="w-1/2 ml-24">
    <h1 id="contact" class="text-6xl inline-block">Contact</h1>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 pr-6 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="name" type="text"
          placeholder="Jane Doe"
        >
      </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="emailaddress">
              Email
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="jane.doe@hey.com">
        </div>
      </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <label for="message" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Message</label>
      <textarea
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="message"
        rows="4"
      ></textarea>
    </div>
    <button class="button">Submit form</button>
  </form>
</template>
