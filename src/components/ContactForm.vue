<template>
  <form class="contact-form" name="contact">

    <div class="sender-info">
      <div>
        <label for="name" class="label">Your name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label for="email" class="label">Your email</label>
        <input type="email" name="email" />
      </div>
    </div>

    <div class="message">
      <label for="message" class="label">Message</label>
      <textarea name="message"></textarea>
    </div>

    <button class="button">Submit form</button>

  </form>
</template>
